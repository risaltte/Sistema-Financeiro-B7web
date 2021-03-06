import styled from "styled-components";

export const TableLine = styled.tr`
    transition: filter 0.2s;

    // elementos filhos impares
    &:nth-child(odd) {
        background: #eee;
    }

    // elementos filhos pares
    &:nth-child(even) {
        background: #fafcfa;
    }

    &:hover {
        filter: brightness(0.95);        
    }

    @media (max-width: 576px) {
        
    }
`;

export const TableColumn = styled.td`
    padding: 4px 10px;

    &:first-child {
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
    }

    &:last-child {
        border-bottom-right-radius: 10px; 
        border-top-right-radius: 10px; 
    }

    @media (max-width: 576px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 10px 15px;

        &:before {
            content: attr(data-title);
            font-weight: bold;
        }      
    }
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