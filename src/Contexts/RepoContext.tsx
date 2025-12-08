import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";

import { api } from "../lib/axios";

export interface Issue{
    id: string;
    title: string;
    body: string;
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
    getRepoIssues: (query: string) => Promise<void>;
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

    const getRepoOwnerData = useCallback(
        async () => {
            const res = await api.get("users/sabrinacoelho");
            setUser(res.data);
    }, []);

    const getRepoIssues = useCallback(
        async (query?: string) =>{
            console.log(query)
            const res = await api.get("search/issues",{
                params:{
                    q: "cloudflare repo:anuraghazra/github-readme-stats is:issue"
                }
            })
            console.log(res.data.items)
            setIssues(res.data.items)
        }, []
    )

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getRepoOwnerData();
        getRepoIssues();
    }, [getRepoOwnerData, getRepoIssues]);
    
    return(
        <RepoContext.Provider value={{
            user,
            issues,
            getRepoIssues
        }}>
            {children}
        </RepoContext.Provider>
    );
}