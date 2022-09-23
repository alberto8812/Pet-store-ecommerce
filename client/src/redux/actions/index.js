import axios from "axios";
import {
    GET_ALL_PRODUCTS,
    GET_DETAILS,
    SORT_BY_PRICE,
    SEARCH_BY_NAME,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    ADD_TO_CART,
    GET_NUMBER_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    UPDATE_CART,
    DELETE_CART
} from "./constants";

export function getAllProducts() {
    return async(dispatch) => {
        try {
            return axios.get('http://localhost:3001/products')
                .then(res => dispatch({ type: GET_ALxL_PRODUCTS, payload: res.data }))
                .catch(err => dispatch({ type: GET_ALL_PRODUCTS, payload: err.data }))
        } catch (error) {
            console.log(error)
        }
    }
};

export function getProducts(prop) {
    return async function(dispatch) {
        try {
            return axios.get('http://localhost:3001/products/search?name=' + prop.name + '&category=' + prop.category + '&genre=' + prop.genre + '&age=' + prop.age)
                .then(res => dispatch({ type: GET_ALL_PRODUCTS, payload: res.data }))
                .catch(err => dispatch({ type: GET_ALL_PRODUCTS, payload: err.data }))
        } catch (err) {
            console.error(err)
        }
    }
};

export const getDetails = (id) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/products/detail/${id}`);
            return dispatch({
                type: GET_DETAILS,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export function postProduct(payload) {
    return async function(dispatch) {
        const response = await axios.post('/create', payload)
        return response;
    }
};

export function postContact(payload) {
    return async function() {
        try {
            let newEmail = await axios.post('http://localhost:3001/aboutus', payload)
            return newEmail;
        } catch (error) {
            console.error('Error en postContact --> ', error);
        }
    }
};

export function sortByPrice(payload) {
    return {
        type: SORT_BY_PRICE,
        payload
    }
};

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
};

export function getNumberCart() {
    return {
        type: GET_NUMBER_CART
    }
};

export function updateCart(payload) {
    return {
        type: UPDATE_CART,
        payload
    }
};

export function deleteCart(payload) {
    return {
        type: DELETE_CART,
        payload
    }
};

export function increaseCart(payload) {
    return {
        type: INCREASE_QUANTITY,
        payload
    }
};

export function decreaseCart(payload) {
    return {
        type: DECREASE_QUANTITY,
        payload
    }
};


////////////////////////////////test filters/////////////////////////

// export const testFilters = ({ name, genre }) => {
//     return async(dispatch) => {
//         try {
//             const { data } = await axios.get(`http://localhost:3001/test?name=${name}&genre=${genre}`);
//             return dispatch({
//                 type: "GET_TEST",
//                 payload: data,
//             });
//         } catch (err) {
//             console.error(err);
//         }
//     };
// };