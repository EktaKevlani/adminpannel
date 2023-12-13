
import './App.css'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Admin from './components/adminpannel/Admin'
import History from './components/history/History'
import Balance from './components/balance/Balance'
import Card from './components/card/Card'
import Reports from './components/reports/Reports'
function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/balance' element={<Balance/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/reports' element={<Reports/>}/>
      </Routes>
      </BrowserRouter>






     

      
    </>
  )
}

export default App
