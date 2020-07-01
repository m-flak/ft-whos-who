import React from 'react'
import styled from 'styled-components'
import spinner from '../../resrc/spinner.gif'

const OuterSpinner = styled.div`
    text-align: center;

    & img {
        width: ${({ width }) => width ? `${width}px` : '64px'};
        height: ${({ height }) => height ? `${height}px` : '64px'};
        opacity: 0.45;
    }

    &::after {
        content: 'Loading...';
        font-weight: bold;
    }
`

const Spinner = (props) => {
    return (
        <OuterSpinner>
            <img
              src={spinner}
              width={props.width}
              height={props.height}/>
            <br />
        </OuterSpinner>
    )
}

export default Spinner
