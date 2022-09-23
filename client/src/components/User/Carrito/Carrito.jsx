import { Link } from 'react-router-dom'
import './Carrito.css'


export default function Carrito({ image, name, stock, price, id, category, genre, age }) {
    return (
        <div className="m7">
            <div className="b1 desk">
                <div className="title">Mi Carrito</div>
            </div>
            <div className="total-container mobile"></div>
            <div className="notification success desk">
                <i className="fas fa-truck"></i>
                "Envio gratis a partir de $500"
            </div>
            <section className="cart-products-container">
                <div className="cart-product">
                    <div className="product-head desk">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="clear"></div>
                    </div>
                    <div className="table">
                        <div className="image">
                            <img src='https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/3889dc7d-2110-a629-dcef-d80dfae8c247/royal-canin-mini-adulto-63212df4c6871-thumb.jpeg'  alt={name} height='50px' width='50px' />
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
                                <span className="minus disabled">-</span>
                                <input type="number" id="cantidad_13854" pattern="[0-9]+" className="count" />
                                <span className="plus">+</span>
                            </div>
                            <small>{stock} 15u. disponibles</small>
                        </div>
                        <div className="price">
                            <div className="price-container">{price}</div>
                        </div>
                        <div className="delete" data-id='0'>
                            <a href={`/carrito/eliminar/product/${id}`}>
                                <i className="far fa-trash-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {<section className="cart-totals-container">
                <div className="fixed-resume">
                    <div className="cart-totals-detail">
                        <div className="title-total-detail desk">Resumen de compra</div>
                        <ul className="cart-totals">
                            <li className="desk" id='subtotal'>
                                <span>Subtotal</span>
                                <span id='carritoSubTotal'>$250</span>
                            </li>
                            <div className="t3 desk" id="div_monto_descuento_padre">
                                <li id='div_monto_descuento' className="descuento_cupon_info m--font-success">
                                    <span>Descuento Promocional</span>
                                    <span className="texto-descuento-cupon">$ -50 </span>
                                </li>
                            </div>
                            <li id="total" className="cart-total desk">
                                <span>Total</span>
                                <span id="carritoTotal">$200</span>
                            </li>
                            <div className="cart-additional-title">Descuentos y Cupones</div>
                            <li className="cart-coupon">
                                <div className="cart-additional-item">
                                    <div id="agregar_cupon_descuento">
                                        <input type="checkbox" id="agregar_cupon" name="agregar_cupon" />
                                        <label htmlFor="agregar_cupon">Tengo un cupon de descuentos</label>
                                    </div>
                                </div>
                                <div id="sel_codigo_descuento" >
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
                        <Link to='/paymentgateway'><button className="btn-checkout">Continuar</button></Link>
                    </div>
                </div>
            </section>}
            <div className="loading-checkout">
                <div className="loading-content">
                    <div className="loading-icon"></div>
                    <p className="loading-tile"></p>
                </div>
            </div>
        </div>
    )
}