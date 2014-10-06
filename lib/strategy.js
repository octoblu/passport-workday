/**
 * Module dependencies.
 */
var util = require('util'),
  Oauth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options = options || {};
  options.tokenURL = 'https://api.workday.com/??/token'; // TODO
  options.authorizationURL = 'https://www.workday.com/b/authorize'; // TOD

  this.clientSecret = options.clientSecret;

  Oauth2Strategy.call(this, options, verify);

  this.name = 'workday';
}

util.inherits(Strategy, Oauth2Strategy);

module.exports = Strategy;