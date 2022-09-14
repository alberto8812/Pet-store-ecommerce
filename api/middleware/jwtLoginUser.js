const { expressjwt: jwt } = require("express-jwt"),////Express middleware for validating JWTs (JSON Web Tokens)
      jwks=require('jwks-rsa');

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

module.exports=jwtCheck;