const { expressjwt: jwt } = require("express-jwt"),
      jwks=require('jwks-rsa');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-nzbce16c.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'this is a inique identifier',
  issuer: 'https://dev-nzbce16c.us.auth0.com/',
  algorithms: ['RS256']
})

module.exports=jwtCheck;