import styled from 'styled-components';

const getType = type => {
    if (type === "primary") {
        return `
            background: #0899ff;
            color: #FDFDFD;
        `;
    }
    if (type === "error") {
        return `
            background: #FF8080;
            color: #FDFDFD;
        `;
    }
    if (type === "success") {
        return `
            background: #00CC99;
            color: #FDFDFD;
        `;
    }
    if (type === "warning") {
        return `
            background: #ffff00;
            color: #333333;
        `;
    }
    return `
        background: #FDFDFD;
        border: 1px solid #DCDCDC;
        color: #333333;
        `;
    }

    const getSize = size => {
        if (size === "sm"){
            return "padding: .2rem  .5rem";
        }
        if (size === "md"){
            return "padding: .5rem  .7rem";
        }
        if (size === "lg"){
            return "padding: 1.2rem  1.5rem";
        }
    }
    
    const Button = styled.button`
    border: none;
    margin: 5px;
    font-weight:bold;
    border-radius: ${({ round })=> round ? "10px" : null };
    cursor: pointer;
    ${({ type }) => getType(type)} 
    ${({ size }) => getSize(size)} 
`;

export default Button;