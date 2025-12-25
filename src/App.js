import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home'
import {SignUp} from './components/auth/SignUp'
import {Login} from './components/auth/Login'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
