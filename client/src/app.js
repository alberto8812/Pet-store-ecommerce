import { Profiler } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/User/404NotFound';
import AboutUs from './components/User/AboutUs';
import Detail from './components/User/Details/Details';
import Home from './components/User/Home'
import PaymentGateway from './components/User/PaymentGateway';
import Registration from './components/User/Registration';
import Profile from './components/User/Profile'
import NavBar from './components/User/NavBar';
import Create from './components/Admin/Create';

function App() {
  return (
    <div className="App">
      {/*<NavBar />*/}
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/details/:id'} element={<Detail />} />
        <Route path={'/aboutus'} element={<AboutUs />} />
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'/paymentgateway'} element={<PaymentGateway />} />
        <Route path={'/create'} element={<Create/>} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;