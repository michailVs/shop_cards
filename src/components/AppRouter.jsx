import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CardInfo from './CardInfo'
import CardList from './CardList'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CardList/>}/>
            <Route path="/:id" element={<CardInfo/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter