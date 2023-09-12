const authClient = require('../services/oauthService');

module.exports = {
    index: (req, res) => {
        if(req.session.token){
            console.log('======== Requesting userInfo claims using valid token');
            authClient.userInfo(req.session.token)
                .then((response) => {
                    res.render('dashboard', {userInfo :response.response});
                }).catch((err) => {
                    res.json(err);
                });
        } else {
            console.log('======== Current session had no token available.')
            res.redirect('/login')
        }
    },
};
