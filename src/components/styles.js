import styled from 'styled-components';

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

export {Wrapper, Title};