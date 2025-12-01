import { TextM, TextS, TitleL } from "../../../components/Typography/style";
import { CardContainer, CardHeader, RelativeDate } from "./style";

export function Card(){
    return(
        <CardContainer>
            <CardHeader>
                <TitleL>
                    JavaScript data types and data structures
                </TitleL>
                <RelativeDate>
                    <TextS>
                        Há 1 dia
                    </TextS>
                </RelativeDate>
            </CardHeader>
            <TextM>
               Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in 
            </TextM>
        </CardContainer>
    )
}
