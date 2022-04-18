// section 1 images 
import section1MobileImg from '../../assets/about/mobile/image-commitment.jpg';
import section1TabletImg from '../../assets/about/tablet/image-commitment.jpg';
import section1DesktopImg from '../../assets/about/desktop/image-commitment.jpg';

// section 2 images
import section2MobileImg from '../../assets/about/mobile/image-quality.jpg';
import section2TabletImg from '../../assets/about/tablet/image-quality.jpg';
import section2DesktopImg from '../../assets/about/desktop/image-quality.jpg';
import { StyledOurCommitment } from './styled/ourcommitment.styled';


export default function OurCommitment () {
    return (
        <StyledOurCommitment>
            <div className='section-1'>
                <img src={section1MobileImg} alt='person stirring a cup of coffee' />
                <img src={section1TabletImg} alt='person stirring a cup of coffee' />
                <img src={section1DesktopImg} alt='person stirring a cup of coffee' />
                
                <div>
                    <h2>Our commitment</h2>
                    <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </div>

            <div className='section-2'>
                <img src={section2MobileImg} alt='hand holding a cup of coffee' />
                <img src={section2TabletImg} alt='hand holding a cup of coffee' />
                <img src={section2DesktopImg} alt='hand holding a cup of coffee' />

                <div>
                    <h2>Uncompromising quality</h2>
                    <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
            </div>
        </StyledOurCommitment>
    )
}