import { CtaButton } from "../shared/styled/button.styled";
import { StyledHomeHero } from "../shared/styled/hero.styled";

export default function HomeHero () {
    return (
        <StyledHomeHero>
            <div className='bg-box'>
                <div className='hero-content-wrapper'>
                    <h1>Great coffee made simple.</h1>
                    <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan 
                        coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <CtaButton>Create your plan</CtaButton>
                </div>
            </div>
        </StyledHomeHero>
    )
}