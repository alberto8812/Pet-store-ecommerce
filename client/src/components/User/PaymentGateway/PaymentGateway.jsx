import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import "bootswatch/dist/pulse/bootstrap.min.css";
import './PaymentGateway.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { loadStripe } from "@stripe/stripe-js";
//import StripeCheckout from 'react-stripe-checkout'
/////
import {
    //Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
// import { postConfirm } from "../../../redux/actions";

//const stripePromise = loadStripe("pk_test_51LkfWEIzGpa9z0EFC6OqfUFPRBmrUIS1nZVezBHgqSh6GBtJ3x5whj06EuCkgwBhls2xwc3M8UI9JKxid7o7Zzni00BiLqFS7P");

export default withAuthenticationRequired(function PaymentGateway({ image, name, stock, price, id, category, genre, age }) {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const productsInTheCart = useSelector(state => state.cart);
    const navigate = useNavigate();


    let listCart = [];
    let totalCart = 0;


    let enviar = {
        products: '',
        payment: '',
    }

    Object.keys(productsInTheCart).forEach(product => {
        totalCart += productsInTheCart[product].quantity * productsInTheCart[product].price;
        listCart.push(productsInTheCart[product]);
    });

    const idList = listCart.map(e => e.id).toString()
    console.log(listCart)

    function totalPrice(price, item) {
        return Number(price * item).toLocaleString('en-US');
    };

    const notifyOK = () => {
        toast.success(`Payment complete!`, {
            theme: "colored",
        });
    };

    const notifyError = () => {
        toast.error(`ERROR`, {
            theme: "colored",
        });
    };


    // const eachProduct = listCart.map(el => el.name);
    // console.log('CADA PRODUCTO', eachProduct);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // dispatch(postConfirm())
        console.log(<CardElement />)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);
        // notifyOK();

        if (!error) {
            console.log(paymentMethod)
            const { id } = paymentMethod;
            try {
                const token = await getAccessTokenSilently()
                const { data } = await axios.post(
                    "http://localhost:3001/loginUsers/checkoutpayment",
                    {
                        id,
                        amount: totalCart * 100,
                        description: idList
                    },
                    {
                        headers: {
                            authorization: `Bearer ${token}`
                        },
                    }
                );
                console.log('Soy Data 104', data);

                enviar = {
                    products: listCart,
                    payment: data
                }
                dispatch(postSendProds(enviar , {
                    headers: {
                        authorization: `Bearer ${token}`
                    },
                }))
                dispatch()

                elements.getElement(CardElement).clear();
                notifyOK();
            } catch (error) {
                notifyError();
                console.log(error);

            }
            setLoading(false);
        }
    };



    function handleClean(e) {
        // e.preventDefault();
        window.localStorage.clear();
        window.location.reload()
        // setTimeout(() => {
        //     navigate('/')
        // }, 3000);

    }

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
                                return (
                                    <div>
                                        <h5 className="name">{item.name}</h5>
                                        <img className="image" src={item.image} alt={item.name} height='50px' width='50px' />
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
                                <CardElement
                                />
                            </div>

                            {/* <button disabled={!stripe} className="btn btn-success"/> */}

                            <button disabled={!stripe} onClick={e => handleClean(e)} className="btn btn-success">
                                {loading ? (
                                    <div className="spinner-border text-light" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                ) : (
                                    "Buy"
                                )}
                            </button>
                            <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />

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
}, { onRedirecting: () => <Loading /> });

