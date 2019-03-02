import styled from 'styled-components';

const large = {
    width:'5em'
}

const theme = [
    {
        name: 'light',
        background: 'lightgrey',
        color:'black'
    },
    {
        name: 'dark',
        background: 'darkgrey',
        color:'white'
    },
    {
        name: 'orange',
        background: '#FF8C00',
        color:'white'
    }
]

export const StyledButton = styled.button`
margin-top:5px;
margin-left:1em;
height:35px;  
border:none;
border-radius:50%;
width:${props =>{ return props.value == '0' ? large.width : '2.5em'}};
color: ${props => {
        const currentTheme = theme.filter(item => item.name == props.theme);        
        return currentTheme  ? currentTheme[0]['color'] : 'white'          
    }};
background:${props => {
        const currentTheme = theme.filter(item => item.name == props.theme);        
        return currentTheme[0]['background']
    }};
`

 