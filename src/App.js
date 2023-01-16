
import './App.css';
import './style.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Histroy from './components/Histroy';
import {BrowserRouter , Route,  Routes } from 'react-router-dom';



function App() {
  return (
    <>
    
   
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Histroy' element={<Histroy/>} />
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
