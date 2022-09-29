import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {decreaseCart, deleteCart, increaseCart } from "../../../redux/actions";
import "./Carrito.css";
import {withAuthenticationRequired} from '@auth0/auth0-react'
import Loading from "../Loading/Loading";


//{ image, name, stock, price, id, category, genre, age }
export default withAuthenticationRequired ( function Carrito() {
  const productsInTheCart = useSelector(state => state.cart);
  const numberCart = useSelector(state => state.numberCart);

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
        <div className="title">My cart ({numberCart})</div>
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
          <div className="product-head desk">
            {/* <div className="clear"></div> */}
          </div>
          <div className="table">
            {
              listCart.map((item, key) => {
                return (
                  <div className="item-cart" key={key}>
                    <button className="btn-delete" id={item.id} onClick={e => handleDelete(e)}>❌</button>
                    <img className="image" src={item.image} alt={item.name} />
                    <h3 className="name" style={{'fontWeight': 'bold'}}>{item.name.toUpperCase()}</h3>
                    {/* <ul> */}
                      {/* <li><strong>Age: </strong> {item.age}</li>
                      <li><strong>ID Product: </strong>{item.id}</li> */}
                      {/* <p><strong>Stock:</strong>{item.stock}</p> */}
                    {/* </ul> */}
                    <div className="div-total-contador">
                      <div className="div-contador">
                    <button className="minus" onClick={e => handleDecrease(e)} id={item.id}>−</button>
                    <span className="count" id={item.id}>{quantityState.shift()}</span>
                    <button className="plus" onClick={e => handleIncrease(e)} id={item.id}>＋</button>
                      </div>
                    <p className="available-cart">{item.stock} disponibles</p>
                    </div>
                    <span className="totalPrice-cart"> $ {totalPrice(item.price, item.quantity)} </span>
                    <hr/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      {
        <section className="cart-totals-container">
          <div className="fixed-resume">
            <div className="cart-totals-detail">
              <div className="title-total-detail desk">Purchase Summary</div>
              <ul className="cart-totals">
                {/* <li className="desk" id="subtotal">
                  <span>Subtotal</span>
                  <span id="carritoSubTotal">$250</span>
                </li>
                <div className="t3 desk" id="div_monto_descuento_padre">
                  <li
                    id="div_monto_descuento"
                    className="descuento_cupon_info m--font-success"
                  >
                    <span>Descuento Promocional</span>
                    <span className="texto-descuento-cupon">$ -50 </span>
                  </li>
                </div> */}
                <li id="total" className="cart-total desk">
                  <span>Total</span>
                  <span id="carritoTotal">$ {Number(totalCart).toLocaleString('en-US')}</span>
                </li>
                {/*<div className="cart-additional-title">
                  Descuentos y Cupones
                </div>
                <li className="cart-coupon">
                  <div className="cart-additional-item">
                    <div id="agregar_cupon_descuento">
                      <input
                        type="checkbox"
                        id="agregar_cupon"
                        name="agregar_cupon"
                      />
                      <label htmlFor="agregar_cupon">
                        Tengo un cupon de descuentos
                      </label>
                    </div>
                  </div>
                  <div id="sel_codigo_descuento">
                    <div className="cart-coupon-panel">
                      <input type="text" placeholder="Ingresa tu codigo" />
                      <button className="disabled">Aplicar</button>
                    </div>
                  </div>
                </li>*/}
              </ul>
            </div>
            <div className="cart-form-actions">
              <a href="/">Buy more Products </a>
            </div>
            <br />
            <br />
            <div className="cart-form-actions">
              <button type="button" onClick={handleNext} className="btn-checkout">Continue</button>
            </div>
          </div>
        </section>
      }
      <div className="loading-checkout">
        <div className="loading-content">
          <div className="loading-icon"></div>
          <p className="loading-tile"></p>
        </div>
      </div>
    </div>
  );
}, {onRedirecting:()=><Loading/>}) ;
