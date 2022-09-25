import React, { useState } from "react";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import "bootswatch/dist/pulse/bootstrap.min.css";
import './PaymentGateway.css'
//import { loadStripe } from "@stripe/stripe-js";

//HAY QUE HACER npm i --save @stripe/react-stripe-js @stripe/stripe-js   TANTO EN BACK COMO EN FRONT
// HAY QUE HACER npm i bootswatch EN FRONT

import {
    //Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

//const stripePromise = loadStripe("pk_test_51LkfWEIzGpa9z0EFC6OqfUFPRBmrUIS1nZVezBHgqSh6GBtJ3x5whj06EuCkgwBhls2xwc3M8UI9JKxid7o7Zzni00BiLqFS7P");

export default withAuthenticationRequired (function PaymentGateway({ image, name, stock, price, id, category, genre, age }) {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const productsInTheCart = useSelector(state => state.cart);

    let listCart = [];
    let totalCart = 0;
  
    Object.keys(productsInTheCart).forEach(product => {
      totalCart += productsInTheCart[product].quantity * productsInTheCart[product].price;
      listCart.push(productsInTheCart[product]);
  });
  
    function totalPrice(price, item){
        return Number(price * item).toLocaleString('en-US');
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(<CardElement />)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);

        if (!error) {
            // console.log(paymentMethod)
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post(
                    "http://localhost:3001/loginUsers/checkoutpayment",
                    {
                        id,
                        amount: 10000, //cents
                    }
                );
                console.log(data);

                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    console.log(!stripe || loading);

    return (
        <div className="m7">
            <div className="b1 desk">
                <div className="title">Pasarela de Pago</div>
            </div>
            <div className="total-container mobile"></div>
            <div className="notification success desk">
                <i className="fas fa-truck"></i>
                "Productos a pagar"
            </div>
            <section className="cart-products-container">
                <div className="cart-product">
                    <div className="product-head desk">
                        <div className="clear"></div>
                    </div>
                    
                    <div className="table">
                    {
                  listCart.map((item) => {
                      return(
                          <div>
                              <h3 className="image">{item.name}</h3>
                              <img className="image" src={item.image} alt={item.name} height='50px' width='50px'/>
                              <div className="product-info">
                              <h3 className="name">
                                <a href={`/products/detail/${id}`} target='_blank'>{item.name}</a>
                              </h3>
                              <div className="description">
                                <ul>
                                    <li>
                                        <strong>Age:</strong>
                                        {item.age}
                                    </li>
                                    <li>
                                        <strong>Id Product:</strong>
                                        {item.id}
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div className="quantity" data-id="0">
                            <div className="qty">
                                <label type="number" id="cantidad_13854" pattern="[0-9]+" className="count" /> 
                                {item.quantity} 
                            </div>
                            </div>
                            <span>Total {totalPrice(item.price, item.quantity)} $</span>
                          </div>
                      )
                  })
              }
                </div>
                    {/* <div className="table">
                        <div className="image">
                            <img src='https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/3889dc7d-2110-a629-dcef-d80dfae8c247/royal-canin-mini-adulto-63212df4c6871-thumb.jpeg' alt={name} height='50px' width='50px' />
                        </div>
                        <div className="product-info">
                            <h3 className="name">
                                <a href={`/products/detail/${id}`} target='_blank'>Nombre del Producto</a>
                            </h3>
                            <div className="description">
                                <ul>
                                    <li>
                                        <strong>Age:</strong>
                                        Puppy
                                    </li>
                                    <li>
                                        <strong>Id Product:</strong>
                                        AAAA-1111-BBBB-2222
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="quantity" data-id="0">
                            <div className="qty">
                                <label type="number" id="cantidad_13854" pattern="[0-9]+" className="count" />  
                            </div>
                        </div>
                        <div className="price">
                            <div className="price-container">{price}</div>
                        </div>
                    </div> */}
                </div>
            </section>
            {<section className="cart-totals-container">
                <div className="fixed-resume">
                    <div className="cart-totals-detail">
                        <div className="title-total-detail desk">Forma de Pago</div>
                        <form className="card card-body" onSubmit={handleSubmit}>
                            {/* <h3 className="cart-totals">Total: 100$</h3> */}
                            <h3 className="cart-totals">Total: {Number(totalCart).toLocaleString('en-US')}$</h3>
                            <div className="form-group">
                                <CardElement className="pagos"/>
                            </div>
                          <button disabled={!stripe} className="btn btn-success">
                                {loading ? (
                                    <div className="spinner-border text-light" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                ) : (
                                    "Buy"
                                )}
                            </button>
                        </form>
                    </div>
                </div>

            </section>}
            <div className="loading-checkout">
                <div className="loading-content">
                    <div className="loading-icon"></div>
                    <p className="loading-tile"></p>
                </div>
            </div>
        </div >
    )
},{onRedirecting:()=><Loading/>});

/*
<div className="container p-4">
                <div className="row h-800">
                    <div className="col-md-4 offset-md-4 h-800">
                        <form className="card card-body" onSubmit={handleSubmit}>
                            
                            <img
                                src="https://www.corsair.com/medias/sys_master/images/images/h80/hdd/9029904465950/-CH-9109011-ES-Gallery-K70-RGB-MK2-01.png"
                                alt="Corsair Gaming Keyboard RGB"
                                className="img-fluid"
                            />

                            <h3 className="text-center my-2">Price: 100$</h3>

                            
                            <div className="form-group">
                                <CardElement />
                                
                            </div>

                            <button disabled={!stripe} className="btn btn-success">
                                {loading ? (
                                    <div className="spinner-border text-light" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                ) : (
                                    "Buy"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
*/