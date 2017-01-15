/*
 Name: Alex Oladele
 Date: 1/12/2017
 Course: CSE 270e
 */


var sidebar = require('../helpers/sidebar');
loginid = "";

// Exports Module with single function called index
module.exports = {
    /**
     *
     * @param req What the browser sends sends to the server (modified using middleware)
     * @param res What the server is ending back to the browser / client
     */
    index: function (req, res) {
        var viewModel = {
            loginid: loginid
        };

        if (loginid === "" || loginid === null || loginid === undefined) {
            res.render('main');
        } else {
            res.render('timer', viewModel);
        }
    },

    about: function (req, res) {
        res.render('about');
    },

    loginform: function (req, res) {
        res.render("loginform");
    },

    logout: function (req, res) {
        res.send("Temp logout page");
    },

    loginFormSubmit: function (req, res) {
        var dataIn = req.body;


        // Checks to verify that both pieces of information are there, and that password equals test
        if (dataIn.username && dataIn.password && dataIn.password === "test") {
            req.session.userid = dataIn.username;
            loginid = req.session.userid;

            res.redirect('/');
            // res.render('timer')
        } else {
            req.session.userid = dataIn.username;
            var userid = req.session.userid;

            var failure = {
                errormsg: "invalid username or password",
                userid:   userid
            };
            res.render('loginform', failure)
        }
    }
};