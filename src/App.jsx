
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Details from './pages/Details'
import Header from './assets/component/Header'

function App() {
 

  return (
    <>
    <Header/>
     <Routes>
     <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/*' element={<Navigate to={'/'}/>}/>

        
     </Routes>
    </>
  )
}

export default App
