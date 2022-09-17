const { expressjwt: jwt } = require("express-jwt"),////Express middleware for validating JWTs (JSON Web Tokens)
      jwks=require('jwks-rsa'),
      jwtAuthz=require("express-jwt-authz");

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



const checkpermissions=jwtAuthz(['read:message'],{
      customScopeKey:"permissions"
  })



module.exports={jwtCheck,checkpermissions};