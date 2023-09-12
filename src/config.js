// config.js
require('dotenv').config();

module.exports = {
  tenantUrl: process.env.TENANT_URL,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  responseType: process.env.RESPONSE_TYPE,
  flowType: process.env.FLOW_TYPE,
  scope: process.env.SCOPE,
};
