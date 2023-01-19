import React from 'react'
import ReactDOM from 'react-dom'


const MODAL_STYLES = {
    position: 'relative',
    width:'10rem',
    height:'10rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#fff',
    zIndex: 1000,
}

const OVERLAY_STYLES={
    position: 'fixed',
    top: 0,
    left: 0,
    bottom:0,
    right:0,
    transform: 'translate(0,0)',
    backgroundColor:'rgba(0,0,0,0.7)',
    zIndex:1000
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null
    return ReactDOM.createPortal(<>
        <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
            <p>{children}</p>
            <button onClick={onClose}>CLose</button>
        </div>
        </div>
        </>,document.getElementById('portal'))
        
        
    
}
