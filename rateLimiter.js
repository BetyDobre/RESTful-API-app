const rateLimit = require('express-rate-limit');

// setting a rate limit of login requests in a certain time period
const rateLimiterUsingThirdParty = rateLimit({
    // maximum 5 attempts in 10 minutes
    windowMs: 10 * 60 * 1000, 
    max: 5,
    message: 'You have exceeded the limit of attempts! Try again later!', 
    headers: true,
  });

  module.exports.rateLimiterUsingThirdParty = rateLimiterUsingThirdParty;