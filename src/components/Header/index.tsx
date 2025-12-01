import { HeaderContainer } from "./style";
import logo from "../../assets/Logo.svg";

export function Header(){
    return(
        <HeaderContainer>
            <div>
                <img src={logo} alt=""/>
            </div>
        </HeaderContainer>
    );
}