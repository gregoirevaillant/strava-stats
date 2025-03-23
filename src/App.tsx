import { Route, Routes } from 'react-router'
import './App.css'

import Login from './screens/Login'
import Home from './screens/Home'
import Error from './screens/Error'
import ExchangeToken from './screens/ExchangeToken'
import Activities from './screens/Activities'
import Activity from './screens/Activity'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      
      <Route path="/login" element={<Login />} />
      
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<Activity />} />
      
      <Route path="/exchange_token" element={<ExchangeToken />} />
      <Route path="*" element={<Error />} />
    </Routes>

  )
}

export default App
