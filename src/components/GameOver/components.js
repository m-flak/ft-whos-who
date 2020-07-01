import React from 'react'
import styled from 'styled-components'

const InnerStat = styled.span`
    padding-left: 2rem;
    font-size: small;
    font-style: italic;
`

export const Stat = (props) => {
    return (
        <details>
            <summary>{props.ofWhat}</summary>
            <InnerStat>{props.children}</InnerStat>
        </details>
    )
}

export const GameOverHeader = styled.header`
    color: ${({ lost }) => lost ? 'red' : 'greenyellow'};
`

export const GameOverStats = styled.section`
    margin-bottom: 1rem;

    & h4 {
        margin-bottom: 0.5em;
        border-bottom: 1px solid lightgray;
    }
`

export const AddHighScoreLink = styled.a`
    display: ${({ scoreNowBest }) => scoreNowBest ? 'inherit' : 'none'};
    text-decoration: none;
    color: greenyellow;

    &:hover {
        cursor: pointer;
    }
`
