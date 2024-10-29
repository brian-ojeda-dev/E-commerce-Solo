import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Error404 from './pages/Error404'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error404/>}/>
       </Routes>
    </BrowserRouter>
  )
}
