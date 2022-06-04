
import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai'

export const BarContainer = styled.div`

    display: flex;
    background-color: #e5e5e5;
    margin: 20px;

    .Main, .Sub {
        margin: 40px;
    }

    .Sub {
        display: flex;
        position: absolute;
        right: 0;

        div {
            padding: 0 10px 0 10px;
        }
        
    }

    .Main {

    }

    @media screen and ( max-width: 800px ) {
        .Sub {
            display: none;
        }
    }

`;

export const Menu = styled(AiOutlineMenu)`

    position: absolute;
    right: 0;
    margin: 40px;

    @media screen and ( min-width: 800px ) {
        display: none;
    }
`;