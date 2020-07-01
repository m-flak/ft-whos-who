import ReactModal from 'react-modal'

export default {
    overlay: {
        ...ReactModal.defaultStyles.overlay,
        backgroundColor: 'none'
    },
    content: {
        ...ReactModal.defaultStyles.content,
        background: 'rgba(107, 92, 115, 0.98)'
    }
}
