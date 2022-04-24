import { StyledSubscription } from './styled/subscription.styled';
import planData from './data';
import PlanOptions, { EachOption } from './PlanOptions';
import { useState } from 'react';


export default function Subscription () {

    // creating state and function to hold customer order
    const [order, setOrder] = useState({
        drinkStyle: '',
        coffeeType: '',
        amount: '',
        grind: '',
        delivery: '',
    });

    function optionClick (event) {
        console.log(event.target.id)
    }

    // populating the product and options section in planOptions
    const planSelection = planData.map(item => {
        return (
            <PlanOptions
                handleClick={optionClick}
                key={item.id}
                item={item}
                title={item.title}
            />
        )

        
    })


    return(
        <StyledSubscription>
            <div className="options-wrapper">
                {planSelection}
            </div>
        </StyledSubscription>
    )
}