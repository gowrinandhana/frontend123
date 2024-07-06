import logo from './logo.svg';
import './App.css';
import NavBar from './assets/components/navbar';
import Footer from './assets/components/footer';
import Signup from './assets/components/signup';
import Login from './assets/components/Login';
import Calculator from './assets/components/Calculator';
import Error from './assets/components/error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    
    <div style={{backgroundImage:'url(./bg.jpg)',backgroundSize: 'contain', minHeight: '100vh'}}>
   <>
        
<BrowserRouter>
<Routes>
<Route path="/calculate" element={<Calculator />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/signup" element={<Signup />}></Route>
<Route path="/*" element={<Error />}></Route>
</Routes>
</BrowserRouter>
<Footer/>
           </>  
                
     </div>
     
     
  );
}

export default App