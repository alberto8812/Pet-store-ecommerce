import axios from "axios";

export function getProducts(name) {
    return async function(dispatch) {
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


export const getDetails = (id) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`);
            return dispatch({
                type: "GET_DETAILS",
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export function clear() {
    return {
        type: 'CLEAR',
        payload: {},
    };
}


export function postProduct(payload) {
    return async function(dispatch) {
        const response = await axios.post('/create', payload)
        console.log(response)
        return response
    }
}


////////////////////////////////test filters/////////////////////////

export const testFilters = ({ name, genre }) => {
    return async(dispatch) => {
        try {
            console.log({ name, genre });
            const { data } = await axios.get(`http://localhost:3001/test?name=${name}&genre=${genre}`);
            return dispatch({
                type: "GET_TEST",
                payload: data,
            });
        } catch (err) {
            console.error(err);
        }
    };
}