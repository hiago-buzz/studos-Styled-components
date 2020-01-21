import styled from 'styled-components';

export const Title = styled.h1`
    color: #F00;
    background-color: #000;
    font-size: ${props => `${props.fontSize}px`};
    span{
        font-size: 12px;
    }
`;

export const Titlesmall = styled(Title)`
    color: #00F;
    font-size: 16px;
`;