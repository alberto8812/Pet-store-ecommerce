require('dotenv').config()
const{JWK_SURI,ISSUER}=process.env
const { expressjwt: jwt } = require("express-jwt"),////Express middleware for validating JWTs (JSON Web Tokens)
      jwks=require('jwks-rsa'),
      jwtAuthz=require("express-jwt-authz");




/// verifica que el usuario esta con login
const jwtCheck = jwt({
     
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${JWK_SURI}/.well-known/jwks.json`
  }),
  audience: 'http://www.pet-love-api.com',
  issuer: `${ISSUER}`,
  algorithms: ['RS256']
})


//verifica el rol///////////////////////////
var checkpermissions=jwtAuthz(['read:message','write:message'],{
      customScopeKey:"permissions",
      customUserKey: 'auth'
  })




module.exports={jwtCheck,checkpermissions};