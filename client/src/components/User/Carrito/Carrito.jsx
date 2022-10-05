import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {decreaseCart, deleteCart, increaseCart } from "../../../redux/actions";
import "./Carrito.css";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import Loading from "../Loading/Loading";

/**/
//{ image, name, stock, price, id, category, genre, age }
export default withAuthenticationRequired ( function Carrito() {
  const productsInTheCart = useSelector(state => state.cart);
  const numberCart = useSelector(state => state.numberCart);
  const [myCartQuantity, setmyCartQuantity] = useState(0);


  /////////

  const calculatemyCartQuantity = () => {
    let counter = 0;
    productsInTheCart.forEach((item) => {
      counter += item.quantity;
    });
    setmyCartQuantity(counter);
  };

  useEffect(() => {
    calculatemyCartQuantity();
  }, [numberCart]);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  let listCart = [];
  let totalCart = 0;

  Object.keys(productsInTheCart).forEach(product => {
    totalCart += productsInTheCart[product].quantity * productsInTheCart[product].price;
    listCart.push(productsInTheCart[product]);
  });

  const quantityState = listCart.map(el => el.quantity);

  useEffect(() => {
    quantityState;
  }, [numberCart])
  

  function totalPrice(price, item) {
    return Number(price * item).toLocaleString('en-US');
  };

  function handleDecrease(e) {
    e.preventDefault();
    dispatch(decreaseCart(e.target.id));
  };

  function handleIncrease(e) {
    e.preventDefault();
      dispatch(increaseCart(e.target.id));
  };

  function handleDelete(e) {
    e.preventDefault();
    window.confirm('Do you want to delete this product from the cart?');
    dispatch(deleteCart(e.target.id));
  };

  function handleNext() {
    navigate('/paymentgateway');
  }

  return (
    <div className="m7">
      <div className="b1 desk">
        <div className="title">My Cart ( {myCartQuantity} )</div>
      </div>
      <div className="total-container mobile"></div>
      <div className="notification success desk">
        {/* <i className="fas fa-truck"></i> */}
        {/* <i class="bi bi-shop-window"> </i> */}
        <i class="bi bi-truck"></i>
        Free shipping from $500
      </div>
      <section className="cart-products-container">
        <div className="cart-product">
      {(productsInTheCart.length === 0) && (<div ><h1 className="empty-cart">Your cart is empty.</h1>
      <p className="text-emptyCart">But we have a lot of products waiting for you!</p></div>) }
          <div className="product-head desk">
          </div>
          <div className="table">
            {
              listCart.map((item, key) => {
                return (
                  <div className="item-cart" key={key}>
                    <button className="btn-delete" id={item.id} onClick={e => handleDelete(e)}>❌</button>
                    <a href={`/products/detail/${item.id}`} className="item-cart">
                    <h3 className="name" style={{'fontWeight': 'bold'}}>{item.name.toUpperCase()}</h3>
                    <img className="image" src={item.image} alt={item.name} />
                    </a>
                    <ul>
                      {/* <li><strong>Age: </strong> {item.age}</li>
                      <li><strong>ID Product: </strong>{item.id}</li> */}
                      <li><strong>Stock: </strong>{item.stock}</li>
                    </ul>
                    <div className="div-contador">
                    <button className="minus" onClick={e => handleDecrease(e)} id={item.id}>−</button>
                    <span className="count" id={item.id}>{quantityState.shift()}</span>
                    <button className="plus" onClick={e => handleIncrease(e)} id={item.id}>＋</button>
                    </div>
                    <span>Total $ {totalPrice(item.price, item.quantity)} </span>
                    <hr/>
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
                <div className="title-total-detail desk">Purchase Summary</div>
                <ul className="cart-totals">
                  <li id="total" className="cart-total desk">
                    <span>Total</span>
                    <span id="carritoTotal">$ {Number(totalCart).toLocaleString('en-US')}</span>
                  </li>
                </ul>
              </div>
              <div className="cart-form-actions">
                <a href="/">Buy more Products </a>
              </div>
              <br />
              <br />
              {(productsInTheCart.length === 0) ? 
              (<div className="cart-form-actions-disable" >
                <button type="button" onClick={handleNext} className="btn-checkout">Continue</button>
              </div>)
              :
              (<div className="cart-form-actions">
              <button type="button" onClick={handleNext} className="btn-checkout">Continue</button>
            </div>)
            }
            </div>
      </section>}

      {/* <div className="loading-checkout">
        <div className="loading-content">
          <div className="loading-icon"></div>
          <p className="loading-tile"></p>
        </div>
      </div> */}
    </div>
  );
}, {onRedirecting:()=><Loading/>}) ;
