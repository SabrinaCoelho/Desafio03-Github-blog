import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";

import { api } from "../lib/axios";

export interface Issue{
    id: string;
    number: string;
    author?: string;
    title: string;
    body: string;
    comments: number;
    url: string;
    created_at: string;
}

interface User{
    avatar_url: string;
    name: string;
    bio: string;
    login: string;
    followers: number;
    company: string;
    html_url: string;
}

interface RepoContextType{
    user: User;
    issues: Issue[];
    actualIssue: Issue;
    loading: boolean;
    isFetchJustCalled: boolean;
    isRateLimitExpired: boolean;
    rateLimitReset: string;
    isError: boolean;
    getRepoIssues: (query: string) => Promise<void>;
    getRepoIssueData: (issueId: string) => Promise<void>;
    updatePage: () => void;
    fetchJustCalled: (value: boolean) => void;
    /* getRepoOwnerData: () => Promise<void>;
    getRepoIssueData: () => Promise<void>; */
}

interface RepoProviderProps{
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const RepoContext = createContext({} as RepoContextType);

export function RepoProvider({children}: RepoProviderProps){
    const [user, setUser] = useState<User>({} as User);
    const [issues, setIssues] = useState<Issue[]>([] as Issue[]);
    const [actualIssue, setActualIssue] = useState<Issue>({} as Issue);
    const [page, setPage] = useState(1);
    const [isWaitingFetch, setIsWaitingFetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const [isFetchJustCalled, setIsfetchJustCalled] = useState(false);
    const [isRateLimitExpired, setIsRateLimitExpired] = useState(false);
    const [rateLimitReset, setRateLimitReset] = useState("");
    const [isError, setIsError] = useState(false);

    const updatePage = useCallback(
        () => {
        setLoading(true);
        setIsfetchJustCalled(true);
        if(!isWaitingFetch){
                setPage(prev => prev + 1)
                setIsWaitingFetch(true);
            }
        },[isWaitingFetch]
    );
    
    const fetchJustCalled = useCallback(
        (value: boolean) => {
            setIsfetchJustCalled(value);
        },[]
    );

    const getRepoOwnerData = useCallback(
        async () => {
            await api.get("users/sabrinacoelho")
            .then(
                res => {
                    setUser(res.data);
                    setIsError(false);
                }
            )
            .catch(
                () => setIsError(true)
            )
    }, []);

    const getRepoIssues = useCallback(
        async (query?: string) =>{
            setLoading(true);
            setIsfetchJustCalled(true);
            const owner = "anuraghazra";
            const repo = "github-readme-stats";
            await api.get("search/issues",{
                params:{
                    q: `${query ?? ""} repo:${owner}/${repo} is:issue`,
                    page: page
                }
            }).then(
                (res: any) => {
                    setIsError(false);
                    if(res.headers["x-ratelimit-remaining"] === 0){
                        setIsRateLimitExpired(true);
                        setRateLimitReset(res.headers["x-ratelimit-reset"]);
                    }else{
                        setIsRateLimitExpired(false);
                    }
                    setIssues(prev => {
                        console.log(...prev)
                        return [...prev, ...res.data.items]
                    })
                    setIsWaitingFetch(false);
                    setLoading(false);
                }
            ).catch(() =>{
                setIsError(true)
            })
        }, [page]
    )

    const getRepoIssueData = useCallback(
        async (issueId: string) => {
            const owner = "anuraghazra";
            const repo = "github-readme-stats";
            await api.get(`repos/${owner}/${repo}/issues/${issueId}`)
            .then(
                res =>{
                    setIsError(false);
                    const {
                    id,
                    number,
                    user, 
                    title, 
                    body, 
                    comments, 
                    html_url,
                    created_at
                } = res.data;
                setActualIssue({
                    id, 
                    number,
                    author: user.login,
                    title, 
                    body,
                    comments,
                    url: html_url,
                    created_at
                });
                }
            )
            .catch(
                ()=>{
                    setIsError(true);
                }
            )
        }, []
    );
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getRepoOwnerData();
        getRepoIssues();
    }, [getRepoOwnerData, getRepoIssues]);
    
    return(
        <RepoContext.Provider value={{
            user,
            issues,
            actualIssue,
            loading,
            isFetchJustCalled,
            rateLimitReset,
            isRateLimitExpired,
            isError,
            getRepoIssues,
            updatePage,
            getRepoIssueData,
            fetchJustCalled
        }}>
            {children}
        </RepoContext.Provider>
    );
}