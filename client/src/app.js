import { Profiler } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import NavBar from './components/User/NavBar';

=======
import NotFound from './components/User/404NotFound';
import AboutUs from './components/User/AboutUs';
import Detail from './components/User/Details/Details';
import Home from './components/User/Home'
import PaymentGateway from './components/User/PaymentGateway';
import Registration from './components/User/Registration';
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <NavBar/>
     <h1>PetLove</h1>
=======
     <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/detail/:id'} element={<Detail/>}/>
        <Route exact path={'/aboutus'} element={<AboutUs/>}/>
        <Route exact path={'/registration'} element={<Registration/>}/>
        <Route exact path={'/profile'} element={<Profiler/>}/>
        <Route exact path={'/registration'} element={<Registration/>}/>
        <Route exact path={'/paymentgateway'} element={<PaymentGateway/>}/>
        <Route path={'*'} element={<NotFound/>}/>
    </Routes>
>>>>>>> main
    </div>
  );
}

export default App;