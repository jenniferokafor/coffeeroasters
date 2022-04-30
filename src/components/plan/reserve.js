import { StyledForm } from "./styled/subscription.styled";
import { ReactComponent as Arrow } from '../../assets/plan/desktop/icon-arrow.svg';


export default function PlanOptions (props) {

    

    return (
        <StyledForm>

            <fieldset>

                <div className='legend-wrapper'>
                    <legend>{props.title}</legend>
                    <Arrow />
                </div>

                <div className='order-input'>
                    <div>
                        <input 
                        type='radio'
                        id={props.item.info[0]}
                        name={props.item.info[0].type}
                        value={props.item.info[0].type}
                        />

                        <label
                        htmlFor={props.item.info[0]}>
                            <span className='type'>{props.item.info[0].type}</span>
                            <br />
                            <span className='description'>{props.item.info[0].description}</span>
                        </label>
                    </div>

                    <div>
                        <input 
                        type='radio'
                        id={props.item.info[1]}
                        name={props.item.info[1].type}
                        value={props.item.info[1].type}
                        />

                        <label
                        htmlFor={props.item.info[1]}>
                            <span className='type'>{props.item.info[1].type}</span>
                            <br />
                            <span className='description'>{props.item.info[1].description}</span>
                        </label>
                    </div>

                    <div>
                        <input 
                        type='radio'
                        id={props.item.info[2]}
                        name={props.item.info[2].type}
                        value={props.item.info[2].type}
                        />

                        <label
                        htmlFor={props.item.info[2]}>
                            <span className='type'>{props.item.info[2].type}</span>
                            <br />
                            <span className='description'>{props.item.info[2].description}</span>
                        </label>
                    </div>

                </div>

            </fieldset>



        </StyledForm>
    )
}
