import React from "react";
import {Button} from '../../Button/index'
import {SimpleOpsSection,NumberSection,OpsSection} from './Styles';

const operands = (props)=> {

const getInputButtons = ({values,onClick}) =>{
    
    return values.inputValues.map(v=>{
        return(
            <Button key={v} 
                    theme='dark'
                    value={v}
                    onClick={onClick}
                    />
        )
    });
}

const getSimpleOpsButtons = ({values,onClick}) => {
    return values.simpleOpValues.map(v=>{
        return (
            <Button key={v}
                    theme='light'
                    value={v}
                    onClick={onClick}            
            />
        )
    })
}

    return(
        <OpsSection>
            <SimpleOpsSection>
                {getSimpleOpsButtons(props)}                
            </SimpleOpsSection>
            <NumberSection>            
                   {getInputButtons(props)}               
            </NumberSection>
        </OpsSection>
    );
}

export default operands;
