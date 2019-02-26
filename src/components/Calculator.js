import React, {Component} from 'react';
import styled from 'styled-components';

class Calculator extends Component {
state = {
    value:null,
    displayValue:'0',
    waitingforOperand: true,
    operator: ''
};

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

const BottomSection = styled.div`
height:%;
display:flex;
flex-direction:row;  
`
const OpsSection = styled.div`    
  width:70%
  display:flex;
  flex-direction:column;  
`
const OperatorsSection = styled.div`
margin-right:25px;
display:flex;
flex-direction:column;
`
const SimpleOpsSection = styled.div`
display:flex;
flex-direction:row;  
`
const NumberSection = styled.div`
margin-top:0px;
display:flex;
flex-direction:row; 
flex-wrap:wrap; 
`
//buttons clear +- switch and %
const SimpleOpButton = styled.button`
  margin-top:5px;
  margin-left:1em;
  height:35px;  
  border:none;
  background:#bab4ad;
  border-radius:50%;
  width:2.5em;
`
const NumberButton= styled.button`
  margin-top:5px;
  margin-left:1em;
  height:35px;
  border:1px solid grey;
  background:grey;
  border-radius:50%;
  width:2.5em;
  color:white;
`
// Create a Wrapper component that'll render a <section> tag with some styles



const NumberRow = styled.section`
display:flex;
flex-direction:row; 
flex-wrap:wrap; 
`


const OperatorButton = styled.button`
  margin-top:5px;
  margin-left:1em;
  height:2.5em;
  border:none;
  background:#f4a442;
  border-radius:50%;
  width:2.5em;
`

    return (
            <Wrapper>
                <Title>
                    {this.state.displayValue}
               </Title>
                <BottomSection>
                    <OpsSection>
                        <SimpleOpsSection>
                            <SimpleOpButton onClick={()=>this.toggleNumberSign()} >+_</SimpleOpButton>       
                            <SimpleOpButton onClick={() => this.getPercentage()}>%</SimpleOpButton>
                            <SimpleOpButton onClick ={() => this.clearDisplay()}>AC</SimpleOpButton>
                        </SimpleOpsSection>
                        <NumberSection>
                            <NumberRow>
                                <NumberButton onClick ={() => this.getNumber(9)}>9</NumberButton>
                                <NumberButton onClick ={() => this.getNumber(8)}>8</NumberButton>
                                <NumberButton onClick ={() => this.getNumber(7)}>7</NumberButton>
                            </NumberRow >
                            <NumberRow>
                                <NumberButton onClick ={() => this.getNumber(6)}>6</NumberButton>
                                <NumberButton onClick ={() => this.getNumber(5)}>5</NumberButton>
                                <NumberButton onClick ={() => this.getNumber(4)}>4</NumberButton>
                            </NumberRow>
                            <NumberRow>
                                <NumberButton onClick ={() => this.getNumber(3)}>3</NumberButton>
                                <NumberButton onClick ={() => this.getNumber(2)}>2</NumberButton>
                                <NumberButton onClick ={() => this.getNumber(1)}>1</NumberButton>
                            </NumberRow>
                            <NumberRow>
                                <NumberButton onClick ={() => this.getNumber(0)}>0</NumberButton>
                                <NumberButton onClick ={() => this.getDot('.')}>.</NumberButton>
                            </NumberRow>
                        </NumberSection>
                    </OpsSection>

                    <OperatorsSection>
                        <OperatorButton onClick={() => this.performOperation('/')}>/</OperatorButton>
                        <OperatorButton onClick={() => this.performOperation('*')}>*</OperatorButton>
                        <OperatorButton onClick={() => this.performOperation('-')}>-</OperatorButton>
                        <OperatorButton onClick={() => this.performOperation('+')}>+</OperatorButton>
                        <OperatorButton onClick={() => this.performOperation('=')}>=</OperatorButton>
                    </OperatorsSection>

                </BottomSection>
            </Wrapper>
        
        )        
    }

}

export default Calculator;