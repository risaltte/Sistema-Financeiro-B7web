import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-top: -40px;

    display: flex;
    align-items: center;

    @media (max-width: 576px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const MonthArea = styled.div`
    flex: 1;

    display: flex;
    align-items: center;

    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;

    display: flex;

    @media (max-width: 576px) {
        flex 1;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
`;
