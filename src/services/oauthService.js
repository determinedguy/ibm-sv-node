const { OAuthContext } = require('ibm-verify-sdk');
const config = require('../config');

const authClient = new OAuthContext(config);

module.exports = {
  authenticate: () => authClient.authenticate(),
  getToken: (url) => authClient.getToken(url),
  revokeToken: (token) => authClient.revokeToken(token, 'access_token'),
  userInfo: (token) => authClient.userInfo(token),
};
