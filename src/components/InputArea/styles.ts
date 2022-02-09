import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;

    form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }

    button {
        align-self: flex-end;
        width: 150px;
        height: 35px;
        background: lightskyblue;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        margin-top: 10px;
        padding: 4px;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: 576px) {
        box-sizing: border-box;
        width: auto;

        form {
            box-sizing: border-box;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
        }

        button {
            margin: auto;
            width: 100%;
        }
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    min-width: 150px;

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        width: 90%;
        height: 25px;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
        padding: 4px;
        font-size: 15px;
    }

    select {
        width: 90%;
        height: 35px;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
        padding: 4px;
        font-size: 15px;
    }

    @media (max-width: 576px) {
        box-sizing: border-box;
        width: 100%;

        input {
            width: calc(100% - 8px); // 8px padding
            height: 25px;
        }

        select {
            width: 100%;
            height: 35px;
        }
    }   
`;
