require('dotenv').config()
const { JWK_SURI, ISSUER } = process.env
const axios = require("axios")


const dataUser = async(accessToken) => {

    ///peticion a auth0 para traer datos de usuario

    const response = await axios.get(`${ISSUER}userinfo`, {
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })

    const userInfo = response.data

    return userInfo.email
}

module.exports = dataUser