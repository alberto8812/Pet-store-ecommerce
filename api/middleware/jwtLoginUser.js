const { expressjwt: jwt } = require("express-jwt"),////Express middleware for validating JWTs (JSON Web Tokens)
      jwks=require('jwks-rsa'),
      jwtAuthz=require("express-jwt-authz");




/// verifica que el usuario esta con login
const jwtCheck = jwt({
     
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-nzbce16c.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://www.pet-love-api.com',
  issuer: 'https://dev-nzbce16c.us.auth0.com/',
  algorithms: ['RS256']
})


//verifica el rol///////////////////////////
var checkpermissions=jwtAuthz(['read:message'],{
      customScopeKey:"permissions",
      customUserKey: 'auth'
  })




module.exports={jwtCheck,checkpermissions};