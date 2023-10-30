import { useState } from 'react'
import Board from '../components/Board'
import Header from '../components/Header'
import Indicator from '../components/Indicator'
import { Toolbar } from '../components/Toolbar'
import { BiX, BiRadioCircle } from 'react-icons/bi'
import { GrUndo } from 'react-icons/gr'
import { VscDebugRestart } from 'react-icons/vsc'
import Theme from '../utilities/Theme'

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquare = history[currentMove]

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXIsNext(!xIsNext)
    }

    function jumpTo(move) {
        if (currentMove === 0) return
        setCurrentMove(move)
        setXIsNext(move % 2 === 0)
    }

    return (
        <>
            <Header />
            <section className='w-screen h-screen grid__center'>
                <div className='w-10/12 xl:w-[27%] grid__center gap-y-7 mt-10'>
                    <Indicator
                        turn={
                            xIsNext ? (
                                <BiX className='inline-block text-2xl xl:text-3xl text-blue-600' />
                            ) : (
                                <BiRadioCircle className='inline-block text-2xl xl:text-3xl text-red-600' />
                            )
                        }
                        squares={currentSquare}
                    />
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquare}
                        onPlay={handlePlay}
                    ></Board>
                    <Toolbar>
                        <Toolbar.Button onClick={() => jumpTo(currentMove - 1)}>
                            <GrUndo className='toolbar__icon' />
                            <span className='toolbar__text'>Undo</span>
                        </Toolbar.Button>
                        <Toolbar.Button onClick={() => jumpTo(0)}>
                            <VscDebugRestart className='toolbar__icon' />
                            <span className='toolbar__text'>Restart</span>
                        </Toolbar.Button>
                        <Toolbar.Button>
                            <Theme />
                            <span className='toolbar__text'>Theme</span>
                        </Toolbar.Button>
                    </Toolbar>
                </div>
            </section>
        </>
    )
}
