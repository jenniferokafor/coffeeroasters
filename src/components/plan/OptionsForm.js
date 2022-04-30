import { useState } from 'react';
import { StyledForm } from "./styled/subscription.styled";
import { ReactComponent as Arrow } from '../../assets/plan/desktop/icon-arrow.svg';


export default function OptionsForm (props) {
    // customer order details
    const [order, setOrder] = useState({
        drinkStyle: '',
        coffeeType: '',
        amount: '',
        grind: '',
        delivery: '',
        checked: ''
    });

    // creating selection options to be rendered under each fieldset
    let options = [];
    for (let i = 0; i < 3; i++) {
        options.push(
            <label>      
                <input 
                    type='radio'
                    id={`${props.item.info[i]} ${i}`}
                    name={props.name}
                    value= {props.item.info[i].type}
                    // checked={props.name === props.item.info[i].type}
                    onChange={handleChange} 
                />
                    <span className='type'>{props.item.info[i].type}</span>
                    <br />
                    <span className='description'>{props.item.info[i].description}</span>
            </label>
        )
    }

    // event handler to set input to state
    function handleChange (event) {
        console.log('Before:');
        console.log(order);
        const {name, value, type} = event.target
        setOrder(prevOrder => {
            return {
                ...prevOrder,
                [name]: value
            }
        })
        console.log('After:')
        console.log(order);
    }

    


    return (
        <>
        <StyledForm>

            <fieldset>

                <div className='legend-wrapper'>
                    <legend>{props.title}</legend>
                    <Arrow />
                </div>

                {options}

            </fieldset>
        </StyledForm>

        
        </>
    )
}
