import { ReactComponent as UK } from '../../assets/about/desktop/illustration-uk.svg';
import { ReactComponent as Canada } from '../../assets/about/desktop/illustration-canada.svg';
import { ReactComponent as Australia } from '../../assets/about/desktop/illustration-australia.svg';
import { StyledHeadquarters } from './styled/headquarters.styled';


export default function Headquarters () {
    return (
        <StyledHeadquarters>
            <h2>Our headquarters</h2>
            <div className='location-wrapper'>

                <div className='location'>
                    <UK />
                    <h3>United Kingdom</h3>
                    <p>68 Asfordby Rd<br/>Alcaston<br/>SY6 1YA</p>
                    <p>+44 1241 918425</p>
                </div>

                <div className='location'>
                    <Canada />
                    <h3>Canada</h3>
                    <p>1528 Eglinton Avenue<br/>Toronto<br/>Ontario M4P 1A6</p>
                    <p>+1 416 485 2997</p>
                </div>

                <div className='location'>
                    <Australia />
                    <h3>Australia</h3>
                    <p>36 Swanston Street<br/>Kewell<br/>Victoria</p>
                    <p>+61 4 9928 3629</p>
                </div>

            </div>
        </StyledHeadquarters>
    )
}