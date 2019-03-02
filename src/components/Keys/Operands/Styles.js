import styled from 'styled-components';

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
// Create a Wrapper component that'll render a <section> tag with some styles
const OpsSection = styled.div`    
  width:70%;
  display:flex;
  flex-direction:column;  
`

export {SimpleOpsSection,NumberSection,OpsSection};