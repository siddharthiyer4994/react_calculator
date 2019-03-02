import React from 'react';

import {StyledButton} from './styled';

export const Button = ({theme, value,onClick}) => {   
    return (
        <StyledButton theme={theme} value={value} onClick={()=>onClick(value)}>
            {value}
        </StyledButton>

    );
}
