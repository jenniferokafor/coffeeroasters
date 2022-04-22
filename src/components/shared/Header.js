import { React, useState } from "react";
import { StyledHeader, StyledNav } from "./styled/header.styled";
import { StyledHeaderNav } from "./styled/nav.styled";
import Logo from "./svg/Logo";
import OpenMenu from "./svg/OpenMenu";
import { ReactComponent as CloseMenu } from '../../assets/shared/mobile/icon-close.svg'

export default function Header () {

    // value where toggle not clicked = false, toggle clicked = true
    const [toggle, setToggle] = useState(false);

    // function to switch toggle value on click
    function switchToggle () {
        setToggle(prevToggle => !prevToggle);
    }

    // operator to assign display of nav depending on toggle status
    let displayStatus = toggle ? 'block' : 'none';

    // operator to toggle the menu svg
    let menuButton = toggle ? <CloseMenu /> : <OpenMenu />;

    return (
        <StyledHeader>
            <Logo className='logo'/>
            <div className='toggle' onClick={switchToggle}>{menuButton}</div>
            <StyledHeaderNav className='header-nav' style={{display:`${displayStatus}`}}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Create Your Plan</li>
                </ul>
            </StyledHeaderNav>
        </StyledHeader>
    )
} 