import { Link } from 'react-router-dom'
import ApologyModal from '../components/ApologyModal'
import Button from '../components/Button'

export default function Landing() {
    return (
        <section className='w-screen bg-white dark:text-white dark:bg-darkBody gap-3 h-screen flex flex-col justify-center px-8 xl:px-56'>
            <h1 className='flex flex-col text-8xl font-semibold'>
                <span className='block'>Tic</span>
                <span className='block'>Tac</span>
                <span className='block'>
                    Test <span className='inline-block text-lg'>V 1.0</span>
                </span>
            </h1>
            <span className='text-lg xl:text-xl font-medium block mb-5 ml-1'>
                by{' '}
                <a
                    href='https://github.com/fabianazh'
                    className='inline-block pb-1.5 after:border-b-[2.5px] after:block after:border-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform text-blue-600 transition-colors duration-500'
                >
                    fabianazh
                </a>
            </span>
            <div className='flex flex-col gap-5'>
                <ApologyModal />
                <Link to={'/tic-tac-test/multiplayer'} className='group'>
                    <Button
                        customClass={
                            'bg-blue-600 text-white font-light group-hover:bg-blue-800 dark:bg-blue-800 dark:group-hover:bg-blue-600'
                        }
                    >
                        Local Multiplayer
                    </Button>
                </Link>
            </div>
        </section>
    )
}
