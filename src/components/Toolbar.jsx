/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export function Toolbar({ children }) {
    return (
        <div className='bg-white dark:bg-dark dark:border dark:text-white w-full grid grid-cols-3 px-2 rounded-md shadow-md pt-3 pb-2'>
            {children}
        </div>
    )
}

export function Button({ onClick, children }) {
    return (
        <div onClick={onClick} className='toolbar__button group'>
            {children}
        </div>
    )
}

Toolbar.Button = Button
