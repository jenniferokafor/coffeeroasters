import { StyledHeader, StyledNav } from "./styled/header.styled";
import Logo from "./svg/Logo";
import OpenMenu from "./svg/OpenMenu";

export default function Header () {
    return (
        <StyledHeader>
            <Logo />
            <OpenMenu />
            <StyledNav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Create Your Plan</li>
                </ul>
            </StyledNav>
        </StyledHeader>
    )
}