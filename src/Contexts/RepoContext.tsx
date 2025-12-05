import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";

import { api } from "../lib/axios";

interface Issue{
    id: string;
    title: string;
    body: string;
}

interface User{
    name: string;
}

interface RepoContextType{
    user: User;
    /* issues: Issue[];
    getRepoOwnerData: () => Promise<void>;
    getRepoIssues: () => Promise<void>;
    getRepoIssueData: () => Promise<void>; */
}

interface RepoProviderProps{
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const RepoContext = createContext({} as RepoContextType);

export function RepoProvider({children}: RepoProviderProps){

    const [user, setUser] = useState<User>({} as User);

    const getRepoOwnerData = useCallback(
        async () => {
            const res = await api.get("users/sabrinacoelho");
            setUser(res.data);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getRepoOwnerData();
    }, [getRepoOwnerData]);
    
    return(
        <RepoContext.Provider value={{
            user,
        }}>
            {children}
        </RepoContext.Provider>
    );
}