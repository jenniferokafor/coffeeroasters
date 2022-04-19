import { React, useState } from "react";
import { StyledHeader, StyledNav } from "./styled/header.styled";
import { StyledHeaderNav } from "./styled/nav.styled";
import Logo from "./svg/Logo";
import OpenMenu from "./svg/OpenMenu";

export default function Header () {

    // value where toggle not clicked = false, toggle clicked = true
    const [toggle, setToggle] = useState(false);

    // function to switch toggle value on click
    function switchToggle () {
        console.log(toggle)
        setToggle(prevToggle => !prevToggle);
    }

    // operator to assign display of nav depending on toggle status
    let displayStatus = toggle ? 'block' : 'none';

    return (
        <StyledHeader>
            <Logo className='logo'/>
            <div className='toggle' onClick={switchToggle}>icon</div>
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