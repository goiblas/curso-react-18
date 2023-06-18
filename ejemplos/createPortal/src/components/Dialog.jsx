import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function Dialog({ children, open, onClose}) {
    if (!open) return null

    return createPortal(
        <div className='dialog'>
            {children}
            <button onClick={onClose}>Close</button>
        </div>,
        document.body
    )
}

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}