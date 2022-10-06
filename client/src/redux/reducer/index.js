import {
    GET_ALL_PRODUCTS,
    GET_DETAILS,
    SEARCH_BY_NAME,
    SORT_BY_PRICE,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    GET_NUMBER_FAVS,
    ADD_TO_CART,
    GET_NUMBER_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    UPDATE_CART,
    DELETE_CART,
    REFRESH_CART,
    GET_ADMINROLL,
    GET_GRAPHICS_DATA,
    GET_CUSTOMER_SHOPPING,
    GET_CUSTOMER_DATA,
    GET_CUSTOMER_SHOPPING_STATUS,
    POST_CUSTOMER_EDIT_DATA,
    POST_SEND_PRODS,
    PROFILE_DATA
} from "../actions/constants";

export const initialState = {
    products: [],
    allProducts: [],
    details: {},
    status: true,
    cart: [],
    numberCart: 0,
    statistics: [], /////contiene informacion para las graficas
    CustomerShopping: [], //contienes infomracion de las compras de cada usario para el admind
    userStatus: [], //almacenas los datos de todos los usuarios
    userProfile: {},
    favorites: [],
    numberFavs: 0
}

function rootReducer(state = initialState, action) {
    switch (action.type) {


        case GET_ALL_PRODUCTS:
            state.allProducts = [...action.payload]

            return {
                ...state,
                products: [...action.payload],

            };
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload.data
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                products: [...action.payload]
            };
        case SORT_BY_PRICE:
            // const newObject3 = {...state.allProducts };
            // console.log('1', newObject3);
            const priceState = state.products;
            const price = action.payload === 'higherPrice' ?
                priceState.sort((a, b) => b.price - a.price) :
                priceState.sort((a, b) => a.price - b.price);
            return {
                ...state,
                products: price,
                status: state.status === true ? false : true
            };

            /////////////////// FAVS ///////////////////

        case GET_NUMBER_FAVS:
            return {
                ...state
            };
        case ADD_FAVORITE:
            const itemToAdd = state.products.find(x => x.id === action.payload);
            state.favorites.push(itemToAdd);
            return {
                ...state,
                numberFavs: state.numberFavs + 1,
                status: state.status === true ? false : true
            };
        case REMOVE_FAVORITE:
            const itemToRemove = state.products.find(x => x.id === action.payload);
            return {
                ...state,
                numberFavs: state.numberFavs - itemToRemove.quantity,
                favorites: state.favorites.filter(item => {
                    return item.id != itemToRemove.id
                })
            };

            // case REFRESH_CART:
            //     let cart = [];
            //     if (localStorage.getItem("cart")) {
            //         cart = JSON.parse(localStorage.getItem("cart"))
            //     }
            //     return {
            //         ...state,
            //         numberCart: 1,
            //         cart: cart
            //     }


            /////////////////// CART ///////////////////

        case GET_NUMBER_CART:
            return {
                ...state
            };

        case ADD_TO_CART:
            if (state.numberCart === 0) {
                let shoppingCart = {
                    id: action.payload.id,
                    quantity: action.payload.quantitySelected,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price,
                    stock: action.payload.stock
                }
                state.cart.push(shoppingCart);
            } else {
                let check = false;
                state.cart.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.cart[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let cartShopping = {
                        id: action.payload.id,
                        age: action.payload.age,
                        quantity: action.payload.quantitySelected,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                        stock: action.payload.stock
                    }
                    state.cart.push(cartShopping);
                }
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return {
                ...state,
                numberCart: state.numberCart + 1
            };
        case INCREASE_QUANTITY:
            const increaseItem = state.cart.find(x => x.id === action.payload);
            state.numberCart++
                increaseItem.quantity++;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return {
                ...state
            };
        case DECREASE_QUANTITY:
            const decreaseItem = state.cart.find(x => x.id === action.payload);
            if (decreaseItem.quantity > 1) {
                state.numberCart--;
                decreaseItem.quantity--;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return {
                ...state
            }
        case DELETE_CART:
            const deleteItem = state.cart.find(x => x.id === action.payload);
            const newCart = state.cart.filter(item => {
                return item.id != deleteItem.id
            })
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                numberCart: state.numberCart - deleteItem.quantity,
                cart: newCart
            };
        case REFRESH_CART:
            let cart = [];
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"))
            }
            return {
                ...state,
                numberCart: 1,
                cart: cart
            }

            /////////////////// FIN CART ///////////////////

        case POST_SEND_PRODS:
            return {
                ...state,
            }
        case PROFILE_DATA:
            return {
                ...state,
                userProfile: {...action.payload }
            }

            /////////////////////////////////////ADMINS REDUCER/////////////////////////////////////////////////

        case GET_ADMINROLL:
            //identifica el tipo de roll user admin
            return state;

        case GET_GRAPHICS_DATA:
            //infomracion para las graficas admin
            return {...state, statistics: action.payload }

        case GET_CUSTOMER_SHOPPING:

            return {...state, customerShopping: action.payload }

        case GET_CUSTOMER_DATA:
            return {...state, userStatus: action.payload }

        case POST_CUSTOMER_EDIT_DATA:
            // console.log("data")
            return state
        case 'POST INFO':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default rootReducer;