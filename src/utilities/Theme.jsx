import { useState, useEffect } from 'react'
import { PiSunBold, PiMoonLight } from 'react-icons/pi'

export default function Theme() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem('isDarkTheme', JSON.stringify(!isDarkTheme))
    }

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('isDarkTheme'))

        if (storedTheme !== null) {
            setIsDarkTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkTheme])

    let icon = isDarkTheme ? (
        <PiMoonLight className='toolbar__icon' onClick={toggleTheme} />
    ) : (
        <PiSunBold className='toolbar__icon' onClick={toggleTheme} />
    )

    return <>{icon}</>
}
