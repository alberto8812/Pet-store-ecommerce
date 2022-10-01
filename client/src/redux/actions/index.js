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
    DELETE_CART,
    ADD_COMMENT,
    REFRESH_CART,
    GET_ADMINROLL,
    GET_GRAPHICS_DATA,
    DELETE_PRODUCT,
    GET_CUSTOMER_SHOPPING,
    EDIT_PRODUCT, 
    ACTIVE_PRODUCT
} from "./constants";

export function getAllProducts() {
    return async(dispatch) => {
        try {
            return axios.get('/products')
                .then(res => dispatch({ type: GET_ALL_PRODUCTS, payload: res.data }))
                .catch(err => dispatch({ type: GET_ALL_PRODUCTS, payload: err.data }))
        } catch (error) {
            console.log(error)
        }
    }
};

export function getProducts(prop) {
    return async function(dispatch) {
        try {
            return axios.get('/products/search?name=' + prop.name + '&category=' + prop.category + '&genre=' + prop.genre + '&age=' + prop.age)
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
            const { data } = await axios.get(`/products/detail/${id}`);
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
        const response = await axios.post('/loginAdmin/create', payload)
        return response;
    }
};

export function postContact(payload) {
    return async function() {
        try {
            let newEmail = await axios.post('/aboutus', payload)
            return newEmail;
        } catch (error) {
            console.error('Error en postContact --> ', error);
        }
    }
};

export function postConfirm(payload) {
    return async function() {
        try {
            let newConfirmEmail = await axios.post('http://localhost:3001/paymentgateway', payload)
            return newConfirmEmail;
        } catch (error) {
            console.error('Error en postConfirm --> ', error);
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

export function addComment(input) {
    return async function(dispatch) {
        axios.post('/loginUsers/comment', input)
            .then((res) => {
                dispatch({
                    type: ADD_COMMENT,
                    payload: res.data
                })
            })
    }
}

export function refreshCart(payload) {
    return {
        type: REFRESH_CART,
        payload
    }
};

////////////////////////************Admind*******************/////////////////////////////////// /




//verifica que tipo de roll de usuario

export const getRollAdmin = (token) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`/loginAdmin`, token);
            return dispatch({
                type: GET_ADMINROLL,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

//consigue todos los datos de las graficas 
export const getgraphicsData = (token) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`/loginAdmin/graphics`, token);
            return dispatch({
                type: GET_GRAPHICS_DATA,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

//consigue todos los datos de los usuarios que realizaron las compras
export const getCustomerShopping = (token) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`/loginAdmin/customerShopping`, token);
            return dispatch({
                type: GET_CUSTOMER_SHOPPING,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

// cambiar el status de la compra 
export const putCustomerShoppingStatus = (token, status, invoice) => {
    console.log(status)
    return async(dispatch) => {
        try {
            const { data } = await axios.put(`/loginAdmin/customerShopping/${invoice}`, { status: status }, token);
            return dispatch({
                type: GET_CUSTOMER_SHOPPING_STATUS,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

export function deleteProducts(id, setFlag) {
    return async(dispatch) => {
        try {
            return axios.delete(`http://localhost:3001/loginAdmin/delete/${id}`)
                .then(res => {
                    setFlag((flag) => !flag)
                    return dispatch({ type: DELETE_PRODUCT, payload: res.data })
                })
                .catch(err => dispatch({ type: DELETE_PRODUCT, payload: err.data }))
        } catch (error) {
            console.log(error)
        }
    }
};

export function activeProducts(id, setFlag) {
    return async(dispatch) => {
        try {
            return axios.put(`http://localhost:3001/loginAdmin/delete/${id}`)
                .then(res => {
                    setFlag((flag) => !flag)
                    return dispatch({ type: ACTIVE_PRODUCT, payload: res.data })
                })
                .catch(err => dispatch({ type: ACTIVE_PRODUCT, payload: err.data }))
        } catch (error) {
            console.log(error)
        }
    }
};

export function editProducts(id, headers, payload) {
    console.log(editProducts)
    return async function(dispatch) {
        try {
            axios.put(`/loginAdmin/edit/${id}`, payload, headers)
                .then(res => {
                    return dispatch({ type: EDIT_PRODUCT, payload: res.data })
                })
                .catch(err => dispatch({ type: EDIT_PRODUCT, payoad: err.data }))

        } catch (error) {
            console.log(error)
        }
    }
}



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