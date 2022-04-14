import gran from '../../../src/assets/home/desktop/image-gran-espresso.png';
import planalto from '../../../src/assets/home/desktop/image-planalto.png';
import piccollo from '../../../src/assets/home/desktop/image-piccollo.png';
import danche from '../../../src/assets/home/desktop/image-danche.png';
import { StyledCollectionWrapper } from './styled/collection.styled';

export default function Collection () {
    return (
        <StyledCollectionWrapper>
            <h2>our collection</h2>
            <div className='products-wrapper'>
                <div className='product'>
                    <img src={gran}/>
                    <div>
                        <h4>Gran Espresso</h4>
                        <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                    </div>
                </div>

                <div className='product'>
                    <img src={planalto}/>
                    <div>
                        <h4>Planalto</h4>
                        <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
                    </div>
                </div>

                <div className='product'>
                    <img src={piccollo}/>
                    <div>
                        <h4>Piccollo</h4>
                        <p>Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
                    </div>
                </div>

                <div className='product'>
                    <img src={danche}/>
                    <div>
                        <h4>Danche</h4>
                        <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                    </div>
                </div>

            </div>
        </StyledCollectionWrapper>
    )
}