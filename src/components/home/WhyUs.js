import { ReactComponent as CoffeeBean } from '../../../src/assets/home/desktop/icon-coffee-bean.svg';
import { ReactComponent as Gift } from '../../../src/assets/home/desktop/icon-gift.svg';
import { ReactComponent as Truck } from '../../../src/assets/home/desktop/icon-truck.svg';
import { StyledWhyUs } from './styled/whyus.styled';

export default function WhyUs () {
    return (
        <StyledWhyUs>
            <div className='main-div'>
                <h3>Why choose us?</h3>
                <p>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
            </div>

            <div className='benefits-wrapper'>
                <div className='benefit'>
                    <CoffeeBean className='svg'/>
                    <div className='text-wrapper'>
                        <h4>Best quality</h4>
                        <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                    </div>
                </div>

                <div className='benefit'>
                    <Gift />
                    <div className='text-wrapper'>
                        <h4>Exclusive benefits</h4>
                        <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                    </div>
                </div>

                <div className='benefit'>
                    <Truck />
                    <div className='text-wrapper'>
                        <h4>Free shipping</h4>
                        <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                    </div>
                </div>
            </div>
        </StyledWhyUs>
    )
}