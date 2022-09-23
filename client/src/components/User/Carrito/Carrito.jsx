import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decreaseCart, deleteCart, increaseCart } from "../../../redux/actions";
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

  console.log(productsInTheCart);

  function totalPrice(price, item){
      return Number(price * item).toLocaleString('en-US');
  };

  function handleResta(e) {
    e.preventDefault();
    dispatch(decreaseCart());
    // if (counter === 0) {
    //   e.target.value(false);
    // }
    // return setCounter(counter - 1);
  };
  function handleSuma(e) {
    e.preventDefault();
    dispatch(increaseCart());
    // if (counter === stock) {
    //   e.target.value(false);
    // }
    // return setCounter(counter + 1);
  };

  function handleDelete(e){
    e.preventDefault(e);
    dispatch(deleteCart());
  };

  function handleNext(e){
      e.preventDefault();
      navigate('/paymentgateway');
  }

  return (
    <div className="m7">
      <div className="b1 desk">
        <div className="title">Mi Carrito</div>
      </div>
      <div className="total-container mobile"></div>
      <div className="notification success desk">
        {/* <i className="fas fa-truck"></i> */}
        <i class="bi bi-truck"></i>
        "Envio gratis a partir de $500"
      </div>
      <section className="cart-products-container">
        <div className="cart-product">
          <div className="product-head desk">
            {/* <div className="clear"></div> */}
          </div>
          <div className="table">
              {
                  listCart.map((item,key) => {
                      return(
                          <div key={key}>
                              <button type="button" onClick={e=> handleDelete(e)}><i class="bi bi-x-circle-fill" style={{ color: "#6200adc9" }}></i></button>
                              <h3 className="name">{item.name}</h3>
                              <img className="image" src={item.image} alt={item.name}/>
                              <ul>
                                  <li><strong>Age: </strong> {item.age}</li>
                                  <li><strong>ID Product: </strong>{item.id}</li>
                              </ul>

                            <button className="minus disabled" onClick={(e)=>handleResta(e)}>-</button>
                            <span className="count">{item.quantity}</span>
                            <button className="plus" onClick={(e)=>handleSuma(e)}>+</button>

                            <span>Total {totalPrice(item.price, item.quantity)} $</span>
                          </div>

                      )
                  })
              }
            {/* <div className="image">
              <img
                src="https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/3889dc7d-2110-a629-dcef-d80dfae8c247/royal-canin-mini-adulto-63212df4c6871-thumb.jpeg"
                alt={name}
                height="50px"
                width="50px"
              />
            </div>
            <div className="product-info">
              <h3 className="name">
                <a href={`/products/detail/${id}`} target="_blank">
                  Nombre del Producto
                </a>
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
            </div> */}
            {/* <div className="quantity" data-id="0">
              <div className="qty">
                <button
                  onClick={(e) => handleResta(e)}
                  className="minus disabled"
                  value
                >
                  -
                </button>
                <p id="cantidad_13854" className="count">
                  {counter}
                </p>
                <button onClick={(e) => handleSuma(e)} className="plus" value>
                  +
                </button>
              </div>
            </div> */}
            {/* <div className="price"> */}
              {/* <div className="price-container">{price}</div> */}
            {/* </div> */}
            {/* <div className="delete" data-id="0"> */}
              {/* <a href={`/carrito/eliminar/product/${id}`}> */}
                {/* <i
                  class="bi bi-x-circle-fill"
                  style={{ color: "#6200adc9" }}
                ></i> */}
                {/* <i className="far fa-trash-alt"></i> */}
              {/* </a> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      {
        <section className="cart-totals-container">
          <div className="fixed-resume">
            <div className="cart-totals-detail">
              <div className="title-total-detail desk">Resumen de compra</div>
              <ul className="cart-totals">
                <li className="desk" id="subtotal">
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
                </div>
                <li id="total" className="cart-total desk">
                  <span>Total $</span>
                  <span id="carritoTotal">{Number(totalCart).toLocaleString('en-US')}</span>
                </li>
                <div className="cart-additional-title">
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
                </li>
              </ul>
            </div>
            <div className="cart-form-actions">
              <a href="/">Comprar mas Productos</a>
              <button onClick={e => handleNext(e)} className="btn-checkout">Continuar</button>
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
