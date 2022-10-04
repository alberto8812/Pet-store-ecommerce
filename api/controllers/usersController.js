const { getLoginResponse } = require("../service/users/getLoginService")
const { postUserDataResponse } = require("../service/users/postUserDataResponse")
const { postCommentUser } = require("../service/users/postCommentService");
const { postProductUserCartService } = require("../service/users/postProductUserCartService")
const { postUserPaymentService } = require("../service/users/postUserPaymentService")

////login de usuario registro en base de datos y retorna infomracion de usuario
const getUserLogin = async(req, res) => {

    try {
        const getLoginUser = await getLoginResponse(req)

        res.status(200).json(getLoginUser)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}

//actualiza y/o retorna informacion del usuario
const postUserData = async(req, res) => {
    try {
        const userData = await postUserDataResponse(req)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//para postear una review
const postComment = async(req, res) => {
    try {
        const CommentPost = await postCommentUser(req)
        res.status(200).json(CommentPost)
    } catch (error) {
        res.status(400).json({ mesg: error.message })
    }
}


// ruta de medio de pago
const postUserPayment = async(req, res) => {
    const { id, amount } = req.body;
    try {
        const paymentUser = await postUserPaymentService(req)
        res.status(200).json(paymentUser)
    } catch (error) {
        res.status(400).json({ mesg: error.raw.message, id: id, amount: amount })
    }
}

// agregar  tablas de compra y de talles

const postUserCart = async(req, res) => {

    try {
        const UserCartService = await postProductUserCartService(req)
        res.status(200).json(UserCartService)
    } catch (error) {
        res.status(400).json({ mesg: error.message })
    }
}



module.exports = {
    getUserLogin,
    postUserData,
    postComment,
    postUserCart,
    postUserPayment
}