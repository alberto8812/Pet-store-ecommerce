import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/User/404NotFound/404NotFound";
import AboutUs from "./components/User/AboutUs/AboutUs";
import Detail from "./components/User/Details/Details";
import Profile from "./components/User/Profile/Profile";
import Create from "./components/Admin/Create/Create";
import Home from "./components/User/Home/Home";
import PaymentGateway from "./components/User/PaymentGateway/PaymentGateway";
import Registration from "./components/User/Registration/Registration";
import NavBar from "./components/User/NavBar/NavBar";
import Carrito from "./components/User/Carrito/Carrito";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshCart } from "./redux/actions";
import Estadisticas from "./components/Admin/estadisticas/Estadisticas";
import NavbarAdmin from "./components/Admin/NavbarAdmin/NavbarAdmin";
import HomeAdmin from "./components/Admin/HomeAdmin/HomeAdmin";
import SidebarAdmin from "./components/Admin/SidebarAdmin/SidebarAdmin";
import ProductsAdm from "./components/Admin/ProductsAdm/ProductsAdm"
import Users from "./components/Admin/Users/Users"

//////////////////////
const stripePromise = loadStripe(
  "pk_test_51LkfWEIzGpa9z0EFC6OqfUFPRBmrUIS1nZVezBHgqSh6GBtJ3x5whj06EuCkgwBhls2xwc3M8UI9JKxid7o7Zzni00BiLqFS7P"
);

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCart(cart));
  }, []);

  return (
    <div className="App">
      {/* zona de users e invitados  */}
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products/detail/:id"} element={<Detail />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/registration"} element={<Registration />} />
        <Route path={"/profile/:email"} element={<Profile />} />
        <Route path={"/registration"} element={<Registration />} />
        <Route path={"/paymentgateway"} element={<Elements stripe={stripePromise}><PaymentGateway /></Elements>}/>
        <Route path={"/carrito"} element={<Carrito />} />
      </Routes> 
      {/* dashboard de admin */}
     {/* < NavbarAdmin /> */ }
    
      <Routes>
      <Route  path={"/admin/"} element={< SidebarAdmin />}>
        <Route path={"logs"} element={<HomeAdmin/>}/>
        <Route path={"statistics"} element={<Estadisticas/>}/>
        <Route path={"productsAdm"} element={<ProductsAdm />}/>
        <Route path={"users"} element={<Users/>}/>
        <Route path={"create"} element={<Create />} />
        <Route path={"*"} element={<NotFound />} />
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
