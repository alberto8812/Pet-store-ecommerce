import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart, deleteCart, increaseCart } from "../../../redux/actions";
import "./Carrito.css";

//{ image, name, stock, price, id, category, genre, age }
export default function Carrito() {
  //   const [counter, setCounter] = useState(0);
  const productsInTheCart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let listCart = [];
  let totalCart = 0;

  Object.keys(productsInTheCart).forEach(product => {
    totalCart += productsInTheCart[product].quantity * productsInTheCart[product].price;
    listCart.push(productsInTheCart[product]);
  });

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
    dispatch(deleteCart(e.target.id));
  };

  function handleNext() {
    // e.preventDefault();
    navigate('/paymentgateway');
  }

  return (
    <div className="m7">
      <div className="b1 desk">
        <div className="title">My Cart</div>
      </div>
      <div className="total-container mobile"></div>
      <div className="notification success desk">
        {/* <i className="fas fa-truck"></i> */}
        <i class="bi bi-shop-window"> </i>
        Withdrawal by branch
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
                  <div key={key}>
                    <button id={item.id} onClick={e => handleDelete(e)}>❌</button>
                    <h3 className="name">{item.name}</h3>
                    <img className="image" src={item.image} alt={item.name} />
                    <ul>
                      <li><strong>Age: </strong> {item.age}</li>
                      <li><strong>ID Product: </strong>{item.id}</li>
                    </ul>
                    <button className="minus disabled" onClick={e => handleDecrease(e)} id={item.id}>-</button>
                    <span className="count" id={item.id}>{item.quantity}</span>
                    <button className="plus" onClick={e => handleIncrease(e)} id={item.id}>+</button>
                    <span>Total $ {totalPrice(item.price, item.quantity)} </span>
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
}
