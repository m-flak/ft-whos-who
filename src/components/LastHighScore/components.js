import styled from 'styled-components'
import Button from '../Button'

export const LastHighScoreBox = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(1, 1, 1, 0.5);
    padding: 1em;

    & h3 {
        margin: 0;
        flex-grow: 0.25;
    }

    & span {
        flex-grow: 1;
        font-weight: bold;
        padding-left: 1em;
    }

    & span:nth-of-type(1) {
        box-shadow: 2px 4px rgba(255, 255, 255, 0.26);
    }

    & span:nth-of-type(1)::before {
        content: 'Name: ';
        font-weight: normal;
        font-size: 10pt;
    }

    & span:nth-of-type(2) {
        box-shadow: 0px 4px rgba(255, 255, 255, 0.26);
    }

    & span:nth-of-type(2)::before {
        content: 'Score: ';
        font-weight: normal;
        font-size: 10pt;
    }

    ${Button} {
        flex-grow: 0.15;
        margin-left: 1rem;
    }
`

export const HSModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    & h3 {
        margin: 0;
        border-bottom: 1px solid lightgray;
    }
`

export const HSModalButtonContainer = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: end;
`
