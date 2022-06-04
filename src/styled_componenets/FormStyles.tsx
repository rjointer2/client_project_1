
import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    top: 20vh;

    .Group {
        display: flex;
        flex-direction: column;

        label {
            margin: 10px 0 10px 0;
            font-size: 20px;
        }
    }

    .Button {
        position: relative;
        right: 40px;
        margin: 10px 0 10px 0;
    }

    button {
        background: #676784;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        align-self: left;
        padding: 10px;
        font-size: 20px;
    }

`;