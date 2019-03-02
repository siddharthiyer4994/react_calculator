import React from 'react';
import styled from 'styled-components';
import Operators from './Operators/Operators'
import Operands from './Operands/Operands';

const keys = ({values,onClick }) =>{

const BottomSection = styled.div`
height:%;
display:flex;
flex-direction:row;  
`
    return(
    <BottomSection>        
        <Operands values={values} onClick={onClick} />
        <Operators values={values} onClick={onClick}/>
    </BottomSection>
    );
}

export default keys;