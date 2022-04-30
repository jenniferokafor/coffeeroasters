import { StyledSubscription } from './styled/subscription.styled';
import planData from './data';
import OptionsForm, { EachOption } from './OptionsForm';
import { useState } from 'react';


export default function Subscription () {
    // CREATING STATES

    // // customer order details
    // const [order, setOrder] = useState({
    //     drinkStyle: '',
    //     coffeeType: '',
    //     amount: '',
    //     grind: '',
    //     delivery: '',
    //     price: '',
    // });

    // map through planData 
    const mappedPlanData = planData.map(item => {
        return (
            <OptionsForm
                key={item.id}
                item={item}
                title={item.title}
                name={item.name}
                id={item.info}
                type={item.info.type}
                description={item.info.description}
            />
        )
    })

    return (
        <StyledSubscription>
            <div className="options-wrapper">
                {mappedPlanData}
            </div>
        </StyledSubscription>
    )

}

    

//     // populating the product and options section in planOptions
//     const planSelection = planData.map(item => {
//         return (
//             <PlanOptions
//                 handleClick={optionClick}
//                 key={item.id}
//                 item={item}
//                 title={item.title}
//             />
//         )

        
//     })


//     return(
//         <StyledSubscription>
//             <div className="options-wrapper">
//                 {planSelection}
//             </div>
//         </StyledSubscription>
//     )
// }