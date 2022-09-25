import React, { useState } from "react";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import "bootswatch/dist/pulse/bootstrap.min.css";
import './PaymentGateway.css'
//import { loadStripe } from "@stripe/stripe-js";

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
                <div className="title">Payment Gateway</div>
            </div>
            <div className="total-container mobile"></div>
            <div className="notification success desk">
                <i className="fas fa-truck"></i>
                "Products to pay"
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
                              <h5 className="name">{item.name}</h5>
                              <img className="image" src={item.image} alt={item.name} height='50px' width='50px'/>
                              <div className="product-info">
                              <h5 className="name">
                                <a href={`/products/detail/${id}`} target='_blank'>Go to product details</a>
                              </h5>
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
                    
                </div>
            </section>
            {<section className="cart-totals-container">
                <div className="fixed-resume">
                    <div className="cart-totals-detail">
                        <div className="title-total-detail desk">Way to pay</div>
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

