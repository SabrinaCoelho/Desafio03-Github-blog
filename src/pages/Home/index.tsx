import { useContextSelector } from "use-context-selector";
import { TitleM } from "../../components/Typography/style";
import { RepoContext } from "../../Contexts/RepoContext";
import { useIsScrollAtBottom } from "../../hook/useIsScrollAtBottom";
import { Card } from "./Card";
import { ProfileCard } from "./ProfileCard";
import { SearchForm } from "./SearchForm";
import { CardsContainer, HomeContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Home(){
    const isAtBottom = useIsScrollAtBottom();
    const { 
        updatePage, 
        loading, 
        isError, 
        isRateLimitExpired, 
        rateLimitReset, 
        isFetchJustCalled, 
        fetchJustCalled 
    } = useContextSelector(RepoContext, context => {
        return {
            updatePage: context.updatePage,
            loading: context.loading,
            isError: context.isError,
            isRateLimitExpired: context.isRateLimitExpired,
            rateLimitReset: context.rateLimitReset,
            isFetchJustCalled: context.isFetchJustCalled,
            fetchJustCalled: context.fetchJustCalled,
        }
    });
    if(isAtBottom && !isError && !loading){
        
        if(isRateLimitExpired){
            const delay = new Date(Number(rateLimitReset) * 1000).getTime() - new Date().getTime();
            setTimeout(
                () => {
                    updatePage();
                }, delay
            );
        }else if(!isFetchJustCalled){
            updatePage();
        }
    }else if(!loading){
        fetchJustCalled(false);
    }
    
    return(
        <HomeContainer>
            <ProfileCard />
            <SearchForm/>
            <CardsContainer>
                {
                    isError ? <TitleM>
                        Tivemos um problema. Por favor, contate o administrador da página.
                    </TitleM> : <Card/>
                }
                {
                    loading && !isError ? <TitleM>
                        Carregando issues...
                    </TitleM> : isRateLimitExpired ? <TitleM>
                        Nova busca {
                            formatDistanceToNow(new Date(Number(rateLimitReset) * 1000), { 
                                locale: ptBR,
                                addSuffix: true
                            })
                        }
                    </TitleM> : <></>
                }
            </CardsContainer>
        </HomeContainer>
    )
}