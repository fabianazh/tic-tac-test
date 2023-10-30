/* eslint-disable react/prop-types */
export default function Button({ customClass, children }) {
    return (
        <div
            className={`${customClass} w-full transition-all duration-300 font-medium rounded-md shadow-md py-2 px-4 text-center`}
        >
            {children}
        </div>
    )
}
