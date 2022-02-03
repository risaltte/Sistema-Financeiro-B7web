import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 0 10px;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`;

export const ButtunAction = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;    

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
    
    img {
        width: 28px;
    }
`;