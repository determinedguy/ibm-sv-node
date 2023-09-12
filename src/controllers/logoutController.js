const authClient = require('../services/oauthService');

module.exports = {
    logout: (req, res) => {
        if(!req.session.token){
            console.log('======== No token stored in session')
            res.redirect('/');
            return;
        }
        console.log('======== Attempting to revoke access_token')
        authClient.revokeToken(req.session.token, 'access_token')
         .then(() => {
             console.log('======== Successfully revoked access token');
             delete req.session.token;
             console.log('======== Deleteing token session');
             console.log('======== Logout session successful');
                res.redirect('/');
         })
         .catch((err) => {
            console.log('======== Error revoking token: ', err)
             res.redirect('/');
         })
    },
};
