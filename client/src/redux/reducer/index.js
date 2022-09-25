import {
    GET_ALL_PRODUCTS,
    GET_DETAILS,
    SEARCH_BY_NAME,
    SORT_BY_PRICE,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    ADD_TO_CART,
    GET_NUMBER_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    UPDATE_CART,
    DELETE_CART,
    REFRESH_CART
} from "../actions/constants";

export const initialState = {
    products: [],
    allProducts: [],
    details: {},
    status: true,
    cart: [],
    numberCart: 0,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: [...action.payload],
                allProducts: [...action.payload]
            };
        case GET_DETAILS:
            return {
                ...state,
                details: {...action.payload }
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                products: [...action.payload],
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
                    price: action.payload.price
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
                        price: action.payload.price
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
            state.numberCart++
                state.cart[action.payload].quantity++;
            return {
                ...state
            };
        case DECREASE_QUANTITY:
            let quantity = state.cart[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.cart[action.payload].quantity--;
            }
            return {
                ...state
            }
        case DELETE_CART:
            let deleteQuantity = state.cart[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - deleteQuantity,
                cart: state.cart.filter(item => {
                    return item.id != state.cart[action.payload].id
                })
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

            /////////////////////test filters/////////////////////
            // case "GET_TEST":
            //     return {
            //         ...state,
            //         allProducts: action.payload
            //     };
        default:
            return state
    }
}

export default rootReducer;