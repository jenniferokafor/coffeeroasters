import { StyledFooterNav } from "./styled/nav.styled";
import { ReactComponent as WhiteLogo } from '../../../src/assets/shared/desktop/logo-white.svg';
import { ReactComponent as Facebook } from '../../../src/assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../../src/assets/shared/desktop/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../../src/assets/shared/desktop/icon-twitter.svg';
import { StyledFooter } from "./styled/footer.styled";

export default function Footer () {
    return (
        <StyledFooter>
            <div className='footer-content'>
                <WhiteLogo />
                
                <StyledFooterNav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Create Your Plan</li>
                    </ul>
                </StyledFooterNav>

                <div className='social-icon-wrapper'>
                    <Facebook className='social-icon' />
                    <Twitter className='social-icon' />
                    <Instagram className='social-icon' />
                </div>
            </div>
            
        </StyledFooter>
    )
}