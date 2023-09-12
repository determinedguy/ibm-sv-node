module.exports = {
    index: (req, res) => {
        if (req.session.token) {
            res.redirect("/dashboard");
        } else {
            res.render('index');
        }
    },
};
