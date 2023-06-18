import React from 'react';
import clsx from 'clsx';

const style = {
    color: 'blue',
}

export function Title({ children }) {
    return React.createElement('h1', { style }, children)
}

export function Button({ className, children, onClick }) {
    return (
        <button className={clsx("button", className)} onClick={onClick}>{children}</button>
    )
}