

export function postProduct(payload) {
    return async function (dispatch) {
        const response = await axios.post('/create', payload)
        console.log(response)
        return response
    }
}