import { ExternalLinkContainer } from "./style";
import type { ReactNode } from "react";

interface ExternalLinkProps{
    children: ReactNode;
}
export function ExternalLink ({children}: ExternalLinkProps){
    return(
        <ExternalLinkContainer>
            {children}
        </ExternalLinkContainer>
    )
}