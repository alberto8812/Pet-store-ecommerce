import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions";
import Loading from "../Loading/Loading";
import './Details.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Footer from "../Footer/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Buy from "../Buy/Buy";
import AddToCart from "../AddToCart/AddToCart";


export default function Detail() {
    const [carga, setCarga] = useState(true);
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [counter, setCounter] = useState(0);

    function restar(e) {
        e.preventDefault()
        if(counter === 0){
            e.target.value(disable)
        }
        return setCounter(counter -1)
    }
    function sumar(e) {
        e.preventDefault()
        if(counter === myProduct.stock){
            e.target.value(disable)
        }
         return setCounter(counter +1)
    };

    // function onChange(e){
    //     e.preventDefault();
    //     {counter}
    // }

    useEffect(() => {
        dispatch(getDetails(id)).then(() => setCarga(false))
    }, [dispatch, id])

    const myProduct = useSelector(state => state.details)

    if (carga) {
        return <Loading />;
    }

    return (
        <div className="contenido">
            <div className="m3">
                <div className="b5 desk">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">"CATEGORIA DEL PRODUCTO"</a></li>
                    <div className="clear"></div>
                </div>
                <div className="product-container">
                    <div className="b1">
                        <div className="item-gallery">
                            <div className="item-tags"></div>
                            <span id="cont_galeria">
                                <div className="desk">
                                    <div className="d2">
                                        <div className="t1 activo" datatype="imagen">
                                            <picture>
                                                <source srcSet={myProduct.image} type='image/webp' />
                                                <img src={myProduct.image} alt={myProduct.name} />
                                            </picture>
                                        </div>
                                        <a href={myProduct.image}></a>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="d1">
                                        <picture>
                                            <source name="product-image" className="product-image" srcSet={myProduct.image} type='image/webp' src={myProduct.image} data-id='1' />
                                            <img src={myProduct.image} alt={myProduct.name} className='product-image' data-id="1" />
                                        </picture>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </span>
                            <div className="clear"></div>
                        </div>
                        <div className="desk">
                            <div className="item-description m-mobile">
                                <h2 className="title desk">Description</h2>
                                <div className="text c-mobile">
                                    <p>{myProduct.genre.name} {myProduct.category.name} {myProduct.name}</p>
                                    <p>
                                        <span className="span1">
                                            "Por si queremos agregar la edad recomendada EJ: Alimento para perros adultos de talla pequeña (peso adulto hasta 10 kg). De 10 meses a 8 años de edad."
                                            <br />
                                        </span>
                                        <br />
                                        <b>
                                            <span className="span2">Full Description:</span>
                                        </b>
                                    </p>
                                    <p>
                                        <span className="span3">
                                            {myProduct.detail}
                                        </span>
                                    </p>
                                </div>

                                <div className="clear"></div>
                            </div>
                        </div>
                        <div class="rating">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="b2">
                        <div className="short-description">
                            <input type="hidden" value={myProduct.stock} id="stock" />
                            <input type="hidden" value={myProduct.stock} id="idStock" name="idStock" />
                            <input type="hidden" value={myProduct.id} id="idProduct" />
                            <input type="hidden" value={myProduct.price} id="priceProduct" />
                            <h1 className="item-title">{myProduct.name}</h1>
                            <div className="price-container">
                                <span className="old bloquePrecio" id="precioLista">Precio sin descuento.. EJ: $100.000</span>
                                <span className="price" id="precioPromo">US$ {myProduct.price}</span>
                                <span className="discont bloquePrecio" id="porcentajePromo">15% OFF</span>
                                <span className="item-descuento-fp">
                                    "5% de descuento"
                                    <span className="fp">pagando en Efectivo</span>
                                </span>
                            </div>
                            <div className="producto-information">
                                <span className="tag free">Free shipping</span>
                            </div>
                            <div className="delivery">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <StorefrontIcon width='20px' height='20px' viewBox="0 0 20 20" className="Store"/>
                                        </div>
                                        <div className="body">
                                            <p>Free withdrawal per branch</p>
                                            <a className="more" href="/sucursales/listado">see branches</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <LocalShippingIcon width='20px' height='20px' viewBox="0 0 20 20" className="Local" />
                                        </div>
                                        <div className="body">
                                            <p>Shipping all over the country</p>
                                            <a className="more" src='/envio/formas_de_envio/cp'>Calculate shipping cost</a>

                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <form action='/carrito/agregar/${id}' name="form" method="post">
                                {/*
                                <fieldset id="2" className="talle">
                                    <div className="t1">Options:</div>
                                    <input className="atributos_del_producto" type="radio" name="atributo:2" value='' checked style='display: none' />
                                    <div onClick={''}>Rojo</div>
                                    </fieldset>
                                    */}
                                <div className="cart">
                                    <div className="quantity">
                                        <div className="content-qty">
                                            <button type="button" onClick={e => restar(e)} value>
                                            -
                                            </button>
                                            <p className="counter-detail">{counter}</p>
                                            {/* <input onChange={e => onChange(e)} type="text" name="cantidad" id="cantidad" value="1" readOnly /> */}
                                            <button type="button" onClick={e => sumar(e)} value>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="available" id="existencias">{myProduct.stock}</div>
                                    <div className="btn-container">
                                        <Buy/>
                                        <AddToCart/>
                                        {/*<button type="button" className="btn-section add-to-cart" id="comprar" name="comprar">Buy</button>*/}
                                        {/*<button type="button" className="btn-section add-to-cart" id='agregarAlCarrito' name="comprar">Add to cart</button>*/}
                                    </div>
                                </div>

                            </form>
                            <div className="clear"></div>
                        </div>
                        <div className="payments m-mobile">
                            <h2 className="title desk">Payment Methods</h2>

                            <div className="c-mobile">
                                <div className="card-promotion-section">
                                    <p><CreditCardIcon className="fa fa-credit-card" /></p>
                                    Pay with credit or debit
                                </div>
                                <div className="card-section">
                                    <p className="card-subtitle">Credit cards</p>
                                    <div className="icons">
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/visa.png" alt="visa" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/mastercard.png" alt="mc" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/cabal.png" alt="cabal" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/amex.png" alt="amex" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/mercadopagocc.png" alt="MP" />
                                    </div>
                                    <p className="card-subtitle">Debit cards</p>
                                    <div className="icons">
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/maestro.png" alt="Maestro" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/mastercard-debito.png" alt="Mastercard Débito" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/cabal-debito.png" alt="Cabal Débito" />
                                    </div>
                                    <p className="card-subtitle">Others</p>
                                    <div className="icons">
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/pago-facil.png" alt="Pago Fácil" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/rapipago.png" alt="Rapipago" />
                                        <img src="https://d28hi93gr697ol.cloudfront.net/_global/iconos/tarjetas/provincia-net-pagos.png" alt="Provincia NET Pagos" />
                                    </div>
                                </div>
                                <a href="/v/medios-pagos" className="btn-section">Payment Methods</a>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div className="clear"></div>
                </div>
                {/*<span id="productos_relacionados">
                    <div className="m-relacionados">
                        <div className="m-header">
                            <div className="title">You may also like</div>
                        </div>
                        <div className="m-productos">
                            <div className="swiper-container relacionados swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                <div></div>
                                <div></div>
                                <div></div>
                                <span></span>
                            </div>

                        </div>
                    </div>
                </span>*/}
                <div className="clear"></div>
                <Footer/>
            </div>

        </div>
    )

}


/*
    return (
        <div className="divDetail">
            <div>
                <h1 className="name">{myProduct.name}</h1>
                <ul className="asd">
                    <li>
                        <div>
                            <img src={myProduct.image} alt={myProduct.name}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2 className="caracts">Price:</h2>
                            <p>{myProduct.price}</p>
                            <h2 className="caracts">Rating:</h2>
                            <p>⭐ {myProduct.rating}</p>
                            <h2 className="caracts">Description:</h2>
                            <p >📌{myProduct.detail}</p>
                            <h2 className="caracts">Stock:</h2>
                            <p>{myProduct.stock}</p>
                            <h2 className="caracts">Genre:</h2>
                            <p>{myProduct.genre.name}</p>
                            <h2 className="last">Category:</h2>
                            <p>{myProduct.category.name}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )

<div className="text c-mobile">
                                    <p>{myProduct.genre.name} {myProduct.category.name} {myProduct.name}</p>
                                    <p>
                                        <span style='color: rgb(102, 102, 102); font-family: "RC TYPE", Roboto, Avenir, Helvetica, Arial, sans-serif; font-size: 16px;'>
                                            "Por si queremos agregar la edad recomendada EJ: Alimento para perros adultos de talla pequeña (peso adulto hasta 10 kg). De 10 meses a 8 años de edad."
                                            <br />
                                        </span>
                                        <br />
                                        <b>
                                            <span style='font-size:16px'>Full Description:</span>
                                        </b>
                                    </p>
                                    <p>
                                        <span style='color: rgb(102, 102, 102); font-family: "RC TYPE", Roboto, Avenir, Helvetica, Arial, sans-serif; font-size: 16px;'>
                                            {myProduct.detail}
                                        </span>
                                    </p>
                                </div>
    */

