/* eslint-disable react/prop-types */
import Square from '../components/Square'
import CalculateWinner from '../utilities/CalculateWinner'

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (squares[i] || CalculateWinner(squares)) return
        const nextSquares = squares.slice()
        xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O')
        onPlay(nextSquares)
    }
    return (
        <div className='board'>
            <Square
                value={squares[0]}
                onSquareClick={() => handleClick(0)}
                customClass='rounded-tl-xl'
            />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square
                value={squares[2]}
                onSquareClick={() => handleClick(2)}
                customClass='rounded-tr-xl'
            />
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            <Square
                value={squares[6]}
                onSquareClick={() => handleClick(6)}
                customClass='rounded-bl-xl'
            />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square
                value={squares[8]}
                onSquareClick={() => handleClick(8)}
                customClass='rounded-br-xl'
            />
        </div>
    )
}
