import { ExternalLinkContainer } from "./style";
import type { ReactNode } from "react";

interface ExternalLinkProps{
    children: ReactNode;
    githubAccountUrl?: string;
}
export function ExternalLink ({children, githubAccountUrl = ""}: ExternalLinkProps){
    return(
        <ExternalLinkContainer target="_blank" href={githubAccountUrl}>
            {children}
        </ExternalLinkContainer>
    )
}