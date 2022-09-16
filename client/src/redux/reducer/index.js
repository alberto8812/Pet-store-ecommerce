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
            var orderedProducts = [...state.products]
            orderedProducts.sort((product1, product2) => {
                if (product1.price > product2.price) {
                    return 1
                }
                if (product1.price < product2.price) {
                    return -1
                }
                return 0
            })
            if (action.payload === "desc") {
                orderedProducts = orderedProducts.reverse()
            }
            return {
                ...state,
                products: [...orderedProducts]
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