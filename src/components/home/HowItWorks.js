import CirclesNLines from "../shared/CirclesNLines";
import { CtaButton } from "../shared/styled/button.styled";
import { StyledProcess, StyledProcessHome } from "../shared/styled/process.styled";
import { StyledHowItWorks } from "./styled/howitworks.styled";

export default function HowItWorks () {
    return (
        <StyledHowItWorks>
            <h3>How it works</h3>

            <CirclesNLines />
            
            <StyledProcessHome>

            <div>
                <h2>01</h2>
                <h4>Pick your coffee</h4>
                <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
            </div>

            <div>
                <h2>02</h2>
                <h4>Choose the frequency</h4>
                <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
            </div>

            <div>
                <h2>03</h2>
                <h4>Receive and enjoy!</h4>
                <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                world-class coffees curated to provide a distinct tasting experience.</p>
            </div>

            </StyledProcessHome>

            <CtaButton>Create your plan</CtaButton>
        </StyledHowItWorks>
    )
}