import styled from 'styled-components'

const Button = styled.button`
    padding: 0.25em;
    border: 1px solid lightgray;
    color: purple;
    font-family: 'Proxima Nova', sans-serif;

    &:hover {
        background-color: lightgray;
        color: purple;
        border: 1px solid purple;
    }
`

export default Button
