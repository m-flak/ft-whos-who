import styled from 'styled-components'

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: center;
`

export const DifficultySlider = styled.input`
    width: auto;
`

export const ErrorBox = styled.div`
    & span {
        color: red;
        font-weight: bold;
    }
`

export const HomeLoading = styled.div`
    display: inline-flex;
    flex-basis: 100%;
    height: 95vh;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 48pt;
    border-bottom: 1px solid lightgray;

    &::after {
        content: 'The game of Musical Knowledge!';
        font-size: 10pt;
        font-style: italic;
    }
`
