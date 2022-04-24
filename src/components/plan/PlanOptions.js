import { StyledOptions } from "./styled/subscription.styled";
import { ReactComponent as ArrowClosed } from '../../assets/plan/desktop/icon-arrow.svg';


export default function PlanOptions (props) {

    return (
        <StyledOptions>
                    <div className="options-header">
                        <h2>{props.item.title}</h2>
                        <ArrowClosed />
                    </div>


                    <div className="options-selection" >
                        <h4>{props.item.info[0].type}</h4>
                        <p>{props.item.info[0].description}</p>
                    </div>

                    <div className="options-selection">
                        <h4>{props.item.info[1].type}</h4>
                        <p>{props.item.info[1].description}</p>
                    </div>

                    <div className="options-selection">
                        <h4>{props.item.info[2].type}</h4>
                        <p>{props.item.info[2].description}</p>
                    </div>

        </StyledOptions>
    )
}