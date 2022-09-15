import { Profiler } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/User/404NotFound/404NotFound';
import AboutUs from './components/User/AboutUs/AboutUs';
import Detail from './components/User/Details/Details';
import Home from './components/User/Home/Home'
import PaymentGateway from './components/User/PaymentGateway/PaymentGateway';
import Registration from './components/User/Registration/Registration';
import NavBar from './components/User/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<NavBar />} />
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/detail/:id'} element={<Detail />} />
        <Route exact path={'/aboutus'} element={<AboutUs />} />
        <Route exact path={'/registration'} element={<Registration />} />
        <Route exact path={'/profile'} element={<Profiler />} />
        <Route exact path={'/registration'} element={<Registration />} />
        <Route exact path={'/paymentgateway'} element={<PaymentGateway />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
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
    </div>
  );
}

export default App;