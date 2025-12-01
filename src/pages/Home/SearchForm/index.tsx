import { TextS, TitleS } from "../../../components/Typography/style";
import { PostCounter, SearchFormContainer, SearchFormHeader } from "./style";

export function SearchForm(){
    return(
        <SearchFormContainer>
            <SearchFormHeader>
                <TitleS>Publicações</TitleS>
                <PostCounter>
                    <TextS>6 publicações</TextS>
                </PostCounter>
            </SearchFormHeader>
            <input id="searchField" placeholder="Buscar conteúdo" type="text" name="searchField" />
        </SearchFormContainer>
    );
}