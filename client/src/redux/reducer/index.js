import {
    GET_ALL_PRODUCTS,
    GET_DETAILS,
    SEARCH_BY_NAME,
    ADD_PRODUCT,
    SORT_BY_PRICE,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    ADD_TO_CART,
    REMOVE_OF_CART,
    PAGINATE,
    CLEAR
} from "../actions/constants";

const initialState = {
    products: [],
    allProducts: [],
    details: {},
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
        case ADD_PRODUCT:
            return {
                ...state,
            };
        case SORT_BY_PRICE:
            // const newObject3 = {...state.allProducts };
            // console.log('1', newObject3);
            const priceState = state.allProducts;
            const price = action.payload === 'higherPrice' ?
                priceState.sort((a, b) => b.price - a.price) :
                priceState.sort((a, b) => a.price - b.price);
            return {
                ...state,
                products: price
            };
        case ADD_FAVORITE:
            return {

            };
        case REMOVE_FAVORITE:
            return {

            };
        case ADD_TO_CART:
            return {

            };
        case REMOVE_OF_CART:
            return {

            };
        case PAGINATE:
            return {
                ...state,
                products: [...action.payload],
            };
        case CLEAR:
            return {
                ...state,
                details: {}
            };

            /////////////////////test filters/////////////////////////////////////
        case "GET_TEST":
            return {
                ...state,
                allProducts: action.payload
            };
        default:
            return state
    }
}

export default rootReducer;