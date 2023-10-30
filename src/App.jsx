import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Game from './pages/Game'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/tic-tac-test/' element={<Landing />} />
                <Route path='/tic-tac-test/multiplayer' element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}
