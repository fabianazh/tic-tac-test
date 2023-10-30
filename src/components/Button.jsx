/* eslint-disable react/prop-types */
export default function Button({ customClass, children }) {
    return (
        <div
            className={`${customClass} w-full transition-all duration-300 font-medium rounded-md xl:text-lg shadow-md py-2 xl:py-4 px-4 text-center`}
        >
            {children}
        </div>
    )
}
