import styled from "styled-components";

export const Container = styled.div`
    flex: 1;

    @media (max-width: 576px) {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 0px 5px #bbb;
        padding: 20px;
        border-radius: 10px
    }
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;