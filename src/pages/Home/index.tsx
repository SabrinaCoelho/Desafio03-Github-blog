import { Card } from "./Card";
import { ProfileCard } from "./ProfileCard";
import { SearchForm } from "./SearchForm";
import { HomeContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <ProfileCard />
            <SearchForm/>
            <Card/>
        </HomeContainer>
    )
}