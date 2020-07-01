import styled from 'styled-components'

export const ScoreHeader = styled.header`
    display: flex;
    flex-direction: row;
    border-bottom: 3px solid lightgray;
    background-color: rgba(175, 175, 175, 0.4);

    & h1 {
        flex-grow: 1;
        margin: 0 1em 0 1em;

    }
    & h1:last-child {
        text-align: end;
    }
`

export const PlayLoading = styled.div`
    display: inline-flex;
    flex-basis: 100%;
    height: 95vh;
    justify-content: center;
    align-items: center;
`

export const PlayContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`
