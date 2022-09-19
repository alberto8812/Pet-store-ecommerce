import axios from "axios";
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
} from "./constants";

export function getProducts(name) {
    return async function(dispatch) {
        try {
            if (name) {
                return axios.get('http://localhost:3001/products?name=' + name)
                    .then(res => dispatch({ type: GET_ALL_PRODUCTS, payload: res.data }))
                    .catch(err => dispatch({ type: GET_ALL_PRODUCTS, payload: err.data }))
            }
            let json = await axios.get('http://localhost:3001/products', {})
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: json.data
            })
        } catch (err) {
            console.error(err)
        }
    }
}

export const getDetails = (id) => {

    return async(dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`);
            return dispatch({
                type: GET_DETAILS,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

export function clear() {
    return {
        type: CLEAR,
        payload: {},
    };
};


export function postProduct(payload) {
    return async function(dispatch) {
        const response = await axios.post('/create', payload)
        return response
    }
};

export function postContact(payload) {
    console.log(payload)
    return async function() {
        try {
            let newEmail = await axios.post('http://localhost:3001/aboutus', payload)
            return newEmail;
        } catch (error) {
            console.error('Error en postContact --> ', error);
        }
    }
}

export function sortByPrice(payload) {
    return {
        type: SORT_BY_PRICE,
        payload
    }
};


////////////////////////////////test filters/////////////////////////

export const testFilters = ({ name, genre }) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/test?name=${name}&genre=${genre}`);
            return dispatch({
                type: "GET_TEST",
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};