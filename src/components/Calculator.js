import React, {Component} from 'react';
import styled from 'styled-components';
import {config} from '../constants/app.config';
import Keys from './Keys/Keys';

class Calculator extends Component {
state = {
    value:null,
    displayValue:'0',
    waitingforOperand: true,
    operator: ''
};
inputButtonClick = (element)=>{    

    if(element === '.') {this.getDot() }
    else if (config.inputValues.includes(element)) {this.getNumber(element)}
    else if (element === 'AC') {this.clearDisplay()}
    else if (element === '+-') {this.toggleNumberSign()}
    else if(element === '%') {this.getPercentage()}
    else {this.performOperation(element)}

}

getNumber (digit) {
    const {displayValue, waitingforOperand} = this.state;    
    //check to remove the trailing 0 from the display
    if(waitingforOperand){
        this.setState({
            waitingforOperand:false,
            displayValue: String(digit)
        })
    }else{        
        this.setState({
            displayValue: displayValue === '0' ? String(digit) :displayValue + digit
    })
    }
}

getDot () {
    const {displayValue, waitingforOperand} = this.state;
    //Check if dot is already present
    if(waitingforOperand){
        this.setState({
            waitingforOperand:false,
            displayValue: '.'
        });
    }else if(displayValue.indexOf('.') === -1){
        this.setState({
            displayValue : displayValue + '.'
        });
    }
}


clearDisplay (){
    //clear the display Value
    this.setState({
        displayValue:'0',
        value:null
    });
}

toggleNumberSign () {
    const {displayValue} = this.state;
    //check if '-' sign is present already
    if(displayValue !== '0'){
    this.setState({
        displayValue : displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
    })
    }
}

getPercentage () {
    const{displayValue} = this.state;
    const value = parseFloat(displayValue);
    this.setState({
        displayValue : String(value/100)
    })
}

performOperation(nextOperator) {
    const {displayValue, value ,operator} = this.state;

    const operations = {
        '/':(prevValue, nextValue) => prevValue/nextValue,
        '*':(prevValue, nextValue) => prevValue*nextValue,
        '-':(prevValue, nextValue) => prevValue-nextValue,
        '+':(prevValue, nextValue) => prevValue+nextValue,
        '=':(prevValue, nextValue) => nextValue
    }
    //const prevValue = 
    const nextValue = parseFloat(displayValue);

    if(value === null ){
        //when there is no previous value i.e value(from state)
        this.setState({
            value: nextValue
        })
    }else if(operator){
        const prevValue = value || 0;
        const computedValue = operations[operator](prevValue,nextValue)

        this.setState({
            value:computedValue,
            displayValue:String(computedValue)
        })
    }
    this.setState({
        waitingforOperand: true,
        operator: nextOperator
       
    });
    
}

render(){
const Wrapper = styled.section`
    height: 20em
    width: 13em;
    background: black;
    display:flex;
    flex-direction:column;  
    margin-left: 42.5% 
  `;

  const Title = styled.div`
  height:33%;
  max-height:33%;
  width:inherit;
  font-size: 45px;  
  text-align: right; 
  padding-right:15px;
  color: white;
`;

    return (
            <Wrapper>
                <Title>
                    {this.state.displayValue}
               </Title>
                <Keys values={config} onClick={this.inputButtonClick} ></Keys>
            </Wrapper>
        
        )        
    }

}

export default Calculator;