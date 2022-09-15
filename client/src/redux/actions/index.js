import axios from "axios";

export function getProducts(name) {
    return async function (dispatch) {
        try {
            if (name) {
                return axios.get('http://localhost:3001/products?name=' + name)
                    .then(res => dispatch({ type: 'GET_ALL_PRODUCTS', payload: res.data }))
                    .catch(err => dispatch({ type: 'GET_ALL_PRODUCTS', payload: err.data }))
            }
            let json = await axios.get('http://localhost:3001/products', {})
            return dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: json.data
            })
        } catch (err) {
            console.log(err)
            }
        }

    }


export function postProduct(payload) {
    return async function (dispatch) {
        const response = await axios.post('/create', payload)
        console.log(response)
        return response
    }
}