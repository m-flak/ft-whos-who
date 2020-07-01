import React from 'react'
import ReactModal from 'react-modal'
import modalStyle from '../../modalStyle'

const DialogBox = (props) => {
    return (
        <ReactModal
          appElement={document.getElementById('app')}
          style={modalStyle}
          isOpen={props.isOpen}
          onRequestClose={props.closeFunc}>
            {props.children}
        </ReactModal>
    )
}

export default DialogBox
