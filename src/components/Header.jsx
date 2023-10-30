/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import PauseModal from './PauseModal'

export default function Header() {
    return (
        <header className='header'>
            <Link to={'/tic-tac-test/'} className='header__icon'>
                <BsFillArrowLeftCircleFill className='' />
            </Link>
            <h1 className='text-2xl font-bold xl:text-5xl dark:text-white'>
                <span>TicTacTest</span>
            </h1>
            <PauseModal />
        </header>
    )
}
