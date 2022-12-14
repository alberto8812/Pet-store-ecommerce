import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react' //libreia Auth0
import {
    GET_ALL_PRODUCTS,
    GET_DETAILS,
    SORT_BY_PRICE,
    SEARCH_BY_NAME,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    GET_NUMBER_FAVS,
    ADD_TO_CART,
    GET_NUMBER_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_CART,
    ADD_COMMENT,
    REFRESH_CART,
    GET_ADMINROLL,
    GET_GRAPHICS_DATA,
    DELETE_PRODUCT,
    GET_CUSTOMER_SHOPPING,
    EDIT_PRODUCT,
    GET_CUSTOMER_DATA,
    GET_CUSTOMER_SHOPPING_STATUS,
    ACTIVE_PRODUCT,
    POST_CUSTOMER_EDIT_DATA,
    POST_SEND_PRODS,
    PROFILE_DATA
} from "./constants";

export function getAllProducts() {
    return async (dispatch) => {
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
    return async function (dispatch) {
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
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/products/detail/${id}`);
            return dispatch({
                type: GET_DETAILS,
                payload: { data },
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export function postProduct(payload, headers) {
    
    return async function(dispatch) {
        const response = await axios.post('/loginAdmin/create', payload, headers)
        return response;
    }
};

export function postContact(payload) {
    return async function () {
        try {
            let newEmail = await axios.post('/aboutus', payload)
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

////////////////////////// FAVS //////////////////////////

export function addToFav(payload) {
    return {
        type: ADD_FAVORITE,
        payload
    }
};


export function removeFromFav(payload) {
    return {
        type: REMOVE_FAVORITE,
        payload
    }
};

export function getNumberFavs() {
    return {
        type: GET_NUMBER_FAVS
    }
};

////////////////////////// FIN FAVS //////////////////////////




////////////////////////// CART //////////////////////////

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

export function refreshCart(payload) {
    return {
        type: REFRESH_CART,
        payload
    }
};

////////////////////////// FIN CART //////////////////////////


export function addComment(input,headres) {
    return async function(dispatch) {
        axios.post('/loginUsers/comment',input,headres)
            .then((res) => {
                dispatch({
                    type: ADD_COMMENT,
                    payload: res.data
                })
            })
    }
}

export const postSendProds = (enviar, headers) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(
                `/loginUsers/productusercart`,
                enviar, headers
            );
            return dispatch({
                type: POST_SEND_PRODS,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export const getDataProfile = (token) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/loginUsers`, token);
            return dispatch({
                type: PROFILE_DATA,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

////////////////////////************Admind*******************/////////////////////////////////// /




//verifica que tipo de roll de usuario

export const getRollAdmin = (token) => {
    return async (dispatch) => {
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
    return async (dispatch) => {
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
    return async (dispatch) => {
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

    return async (dispatch) => {
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

///// trae todos los datos del usuario de la base de datos
export const getCustomerData = (token) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/loginAdmin/datausers`, token);
            return dispatch({
                type: GET_CUSTOMER_DATA,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}

///// edita todos los datos del usuario de la base de datos
export const postCustomerData = (dataUser, headers) => {

    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/loginAdmin/editUsersAdmin`, dataUser, headers);
            return dispatch({
                type: POST_CUSTOMER_EDIT_DATA,
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}




export function deleteProducts(id, setFlag, value, headers) {
    // console.log(headers)
    return async (dispatch) => {
        try {
            return axios.put(`/loginAdmin/delete/${id}`, { value }, headers)
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
    return async (dispatch) => {
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
    console.log(id, headers, payload, 'action edit')
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

export function postInfo(payload, headers) {
    return async function (dispatch) {
        const response = await axios.post('/loginUsers/datauser', payload, headers)
        console.log(response)
        return response
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