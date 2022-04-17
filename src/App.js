import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Services from './Pages/Services/Services';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
