import { Card } from "./Card";
import { ProfileCard } from "./ProfileCard";
import { SearchForm } from "./SearchForm";
import { CardsContainer, HomeContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <ProfileCard />
            <SearchForm/>
            <CardsContainer>
                <Card/>
            </CardsContainer>
        </HomeContainer>
    )
}