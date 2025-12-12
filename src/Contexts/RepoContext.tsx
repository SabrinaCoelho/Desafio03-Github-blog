import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";

import { api } from "../lib/axios";

export interface Issue{
    id: string;
    author?: string;
    title: string;
    body: string;
    comments: number;
    createdAt: string;
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
    getRepoIssues: (query: string) => Promise<void>;
    getRepoIssueData: (issueId: string) => Promise<void>;
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
    const [issues, setIssues] = useState<Issue[]>([]);
    const [actualIssue, setActualIssue] = useState<Issue>({} as Issue);

    const getRepoOwnerData = useCallback(
        async () => {
            const res = await api.get("users/sabrinacoelho");
            setUser(res.data);
    }, []);

    const getRepoIssues = useCallback(
        async (query?: string) =>{
            /* const owner = "anuraghazra";
            const repo = "github-readme-stats";
            console.log(query)
           const res = await api.get("search/issues",{
                params:{
                    q: `${query} repo:${owner}/${repo} is:issue`
                }
            }) 
            console.log(res.data.items)
            setIssues(res.data.items) */
            setIssues([])
        }, []
    )

    const getRepoIssueData = useCallback(
        async (issueId: string) => {
            const owner = "anuraghazra";
            const repo = "github-readme-stats";
            const res = await api.get(`repos/${owner}/${repo}/issues/${issueId}`);
            const {
                number,
                login, 
                title, 
                body, 
                comments, 
                created_at
            } = res.data;
            
            setActualIssue({
                id: number, 
                author: login,
                title, 
                body,
                comments,
                createdAt: created_at
            });
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
            getRepoIssues,
            getRepoIssueData
        }}>
            {children}
        </RepoContext.Provider>
    );
}