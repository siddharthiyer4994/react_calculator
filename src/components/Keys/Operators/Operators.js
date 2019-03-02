import React from "react";
import {OperatorsSection} from './Styles';
import {Button} from '../../Button/index';

const operators = (props) => {

const getOperatorButtons = ({values,onClick}) => {
    return values.operators.map(v=>{
        return(
            <Button key={v} 
                    theme='orange'
                    value={v}
                    onClick={onClick}
                    />
        )
    });
}

    return(
        <OperatorsSection>
            {getOperatorButtons(props)}           
        </OperatorsSection>
    );
}

export default operators;