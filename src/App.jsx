import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
  );
}

export default App;
