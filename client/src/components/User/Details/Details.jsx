import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, getDetails, addComment } from "../../../redux/actions/index";
import Loading from "../Loading/Loading";
import './Details.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Footer from "../Footer/Footer";
import { useAuth0 } from '@auth0/auth0-react';//libreia Auth0
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Vamos a validar que la persona seleccione estrellas? Si o si haga puntuación? 

//Función para validar comentario de Review:
export function validate (data) {
    let errors = {}

    if(!data.comment) {
        errors.comment = 'Your comment is empty.'
    } else if (/\S+@\S+\.\S+/.test(data.comment)) {
        errors.comment = 'Your comment cannot be an email. To contact us, go to the "Contact Us" section'
    } else if (data.comment.length > 2000) {
        errors.comment = 'Comment cannot exceed 2000 characters'
    }
    return errors
}

export default function Detail() {
   const {user,isAuthenticated,getAccessTokenSilently}=useAuth0()

    const [carga, setCarga] = useState(true);
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const myProduct = useSelector(state => state.details);
   // console.log(myProduct,user.email)
   const [userLogin, setuserLogin] = useState([])
    // userLogin=[]//definimos una variable  para el filtrado
   // console.log(myProduct)
//PARA REVIEW:
useEffect(() => {
    dispatch(getDetails(id)).then(() => setCarga(false))
}, [id,dispatch])

 
    useEffect(() => {
      
       if(isAuthenticated && Object.keys(myProduct).length){//pregunta si el usuario tiene login en la pagina
            
            //indaga indaga si el usuario realizo compra en el producto
      
    setuserLogin(()=>(myProduct===undefined?{}:myProduct.reviews.find(e  => e.user === user.email )))//encuentra
   
        }

    }, [dispatch,isAuthenticated,myProduct])


    const [input, setInput] = React.useState ({ 
        comment: ''
    })
    const [errors, setErrors] = React.useState({});

    const [data, setData] = React.useState({id: '', comment:'', punctuation:''})
    useEffect(() => {
     setData({...data,id:id})
    }, [id])
    

    let render = false;

    const handleSubmit = (e) => {
        
        e.preventDefault();
 
    
        const errors = validate(data)
        
        if (!isAuthenticated) {
            alert('You must be logged to comment')
        } else if(errors.comment){
            alert('Your comment could not be published')
        } else if (userLogin.length  ) {//userLogin.review.length
            render = false;
            alert('You already posted a comment on this product')
        } else {
            alert('Comment posted successfully')
            render = false

            const getToken=async()=>{

                //pedimisn el token
                const token= await getAccessTokenSilently()
                console.log(token)
                //realizamon un arreglo con los header
               const headers= {   
                  headers:{
                  authorization: `Bearer ${token}`
                  },    
                  }
                //dispatch(getCustomerData)
                dispatch(addComment(data,headers))
              }
          
              getToken()
         
        }
    }

    const handleChange =  function(e) {
       
        setData({
            ...data,
            [e.target.name]:e.target.value,
            id: userLogin.id
        });
        setErrors(validate({
            ...data,
            [e.target.name]:e.target.value
        }))
    }

    const calificar = function (e) {
        setData({...data, punctuation: e})
        //console.log({...data, punctuation:e})

        for(var i = 1; i<=5; i++) {
            const stars = document.getElementById('star' + i)
            stars.style.color = i<=e?'rgb(255, 251, 5)': '#ccc'
            stars.style.textShadow = i<=e?'0px 0px 5px yellow' : ''
        }
    }

    const renderizarEstrellas = function (e) {
        let string = ''
        for (var i=1; i<=e; i++){
            string = string + '★'
        }
        return string
    }


//HASTA ACÁ REVIEW    

    const [quantitySelected, setQuantitySelected] = useState(1);

    function restar(e) {
        e.preventDefault()
        if(quantitySelected === 1){
            return
        }
        return setQuantitySelected(quantitySelected -1)
    }
    function sumar(e) {
        e.preventDefault()
        if(quantitySelected === myProduct.stock){
            return
        }
         return setQuantitySelected(quantitySelected +1)
    };

    useEffect(() => {
        console.log(quantitySelected, "3")
    }, [quantitySelected])
    

    function handleAddToCart(){
        myProduct.quantitySelected = quantitySelected;
        dispatch(addToCart(myProduct));
        notifyOK();
        setTimeout(() => {
            navigate('/')
        }, 3000);
    };

    const notifyOK = () => {
        toast.success("Added to cart", {
          theme: "colored",
        });
    };

    function handleBuyCart(){
        myProduct.quantitySelected = quantitySelected;
        dispatch(addToCart(myProduct));
        notifyOK();
        setTimeout(() => {
            navigate('/carrito')
        }, 3000);
    }



    if (carga) {
        return <Loading />;
    };

console.log(myProduct,"4")
    return (
       Object.keys(myProduct).length?<div className="contenido">
            <div className="m3">
                <div className="b5 desk">
                    <li><a href="/">Home</a></li>
                    {/*<li><a href="/"></a></li>*/}
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
                                                <img src={myProduct?.image} alt={myProduct.name} />
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
                                    <p>{myProduct.name}</p>
                                    <br />
                                    <p>{myProduct.genre.name} {myProduct.category.name} </p>
                                    <br />
                                    <p>
                                        <span className="span1"> ideal for {myProduct.age}
                                            <br />
                                        </span>
                                        <br />
                                        <b>
                                            <span className="span2">Full Description: </span>
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
                        {/* SECCIÓN DE REVIEWS */}
                        <div className="item-description m-mobile">
                            <h2 className="title desk">Reviews</h2>
                            <div class="rating">
                                <span className='star' onClick={e => calificar(5)} id="star5">★</span>
                                <span className='star' onClick={e => calificar(4)} id="star4">★</span>
                                <span className='star' onClick={e => calificar(3)} id="star3">★</span>
                                <span className='star' onClick={e => calificar(2)} id="star2">★</span>
                                <span className='star' onClick={e => calificar(1)} id="star1">★</span>
                            </div>
                            <div className="review">
                            {!userLogin.comment?.length && 
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <h4 className="titleRev">Write a review</h4>
                                    <div className="comarea">
                                        <textarea className={errors.comment? 'danger' : 'com'} type="text" placeholder="Leave your opinion..." name="comment" onChange={(e)=>handleChange(e)} value={data.comment}/>
                                        {errors.comment && (
                                            <p className='danger'>{errors.comment}</p>
                                        )}
                                        <button type="submit" className="btncom">Comment</button>
                                    </div>
                                </form>}
                            </div>
                            <div>
                                <h2 className="title desk">Comments</h2>
                                
                                <scroll-container>
                           
                   
                                
                                <div className="comments">
                                    <scroll-page>
                                    <div className="comments">
                                    <div className="comments">
                                    {myProduct?.reviews?.map( review => {
                                    return(
                                        <div>
                                            <h2>{review.comment}</h2>
                                            <h2>{renderizarEstrellas(review.punctuation)}</h2>
                                        </div>
                                    )
                                })}
                                </div>
                                
                                    <div>
                                        <span className='starComment'>{renderizarEstrellas(3)}</span>
                                    </div>
                                    <div>
                                       <p>Is a good product. I am satisfied with what I bought.</p> 
                                    </div>
                                    </div>
                                    </scroll-page>
                                    <scroll-page>
                                    <div className="comments">
                                    <div>
                                        <span className='starComment'>{renderizarEstrellas(2)}</span>
                                    </div>
                                    <div>
                                       <p>I don't recommend it. It's very expensive.</p> 
                                    </div></div>
                                    </scroll-page>
                                    <scroll-page>
                                    <div className="comments">
                                    <div>
                                        <span className='starComment'>{renderizarEstrellas(5)}</span>
                                    </div>
                                    <div>
                                       <p>I love the quality of this product. My pet is enjoying it.</p> 
                                    </div></div>
                                    </scroll-page>
                                    <scroll-page>
                                    <div className="comments">
                                    <div>
                                        <span className='starComment'>{renderizarEstrellas(4)}</span>
                                    </div>
                                    <div>
                                       <p>I liked the product. I would like more variety.</p> 
                                    </div></div>
                                    </scroll-page>
                                    <scroll-page>
                                    <div className="comments">
                                    <div>
                                        <span className='starComment'>{renderizarEstrellas(1)}</span>
                                    </div>
                                    <div>
                                       <p>Very bad. I wouldn't buy it again.</p> 
                                    </div></div>
                                    </scroll-page>
                                </div>  
                                </scroll-container>   
                            </div>
                        </div>
                        {/* FIN SECCION REVIEWS */}
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
                                {/*<span className="old bloquePrecio" id="precioLista">Precio sin descuento.. EJ: $100.000</span>*/}
                                <span className="price" id="precioPromo">US$ {myProduct.price}</span>
                                {/*<span className="discont bloquePrecio" id="porcentajePromo">15% OFF</span>*/}
                                {/*<span className="item-descuento-fp">
                                    "5% de descuento"
                                    <span className="fp">pagando en Efectivo</span>
                            </span>*/}
                            </div>
                            <div className="producto-information">
                            <div className="icon">
                                            <StorefrontIcon width='20px' height='20px' viewBox="0 0 25 25" className="Store"/><span className="tag free">Available now</span>
                                        </div>
                            </div>
                            <div className="delivery">
                                <ul>
                                    <li>
                                        <div className="body">
                                            {/* <p>Withdrawal per branch</p> */}
                                            <ul>
                                                <li><strong>Age: </strong> {myProduct.age}</li>
                                                <li><strong>ID Product: </strong>{myProduct.id}</li>
                                                <li><strong>Stock: </strong>{myProduct.stock}</li>
                                            </ul>

                                            {/*<a className="more" href="/sucursales/listado">see branches</a>*/}
                                        </div>
                                    </li>
                                    {/*<li>
                                        <div className="icon">
                                            <LocalShippingIcon width='20px' height='20px' viewBox="0 0 20 20" className="Local" />
                                        </div>
                                        <div className="body">
                                            <p>Shipping all over the country</p>
                                            <a className="more" src='/envio/formas_de_envio/cp'>Calculate shipping cost</a>

                                        </div>

                        </li>*/}
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
                                            <p className="counter-detail">{quantitySelected}</p>
                                            {/* <input onChange={e => onChange(e)} type="text" name="cantidad" id="cantidad" value="1" readOnly /> */}
                                            <button type="button" onClick={e => sumar(e)} value>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="available" id="existencias">{myProduct.stock}</div>
                                    <div className="btn-container">
                                        <button type="button" onClick={handleBuyCart} className="btn-section-add-to-cart" id="comprar">Buy</button>
                                        <button type="button" onClick={handleAddToCart} id='agregarAlCarrito' className="btn-sectionadd-to-cart">Add to cart</button>
                                    </div>
                                </div>
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

        </div>:<h1>loading..........</h1>
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

