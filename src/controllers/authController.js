const authClient = require('../services/oauthService');

module.exports = {
    login: (req, res) => {
        authClient.authenticate().then((url) => {
            console.log(`("======== Authentication redirect to: \n ${url}`);
            res.redirect(url);
        }).catch(error => {
            console.log(`There was an error with the authentication process:`, error);
            res.send(error);
        })
    },
    callback: (req, res) => {
        authClient.getToken(req.url).then(token => {
            token.expiry = new Date().getTime() + (token.expires_in * 1000);
            console.log("======== Token details:");
            console.log(token);
            req.session.token = token;
            res.redirect('/dashboard');
        }).catch(error => {
            res.send("ERROR: " + error);
        });
    },
};
