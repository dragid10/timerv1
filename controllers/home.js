/*
 Name: Alex Oladele
 Date: 1/12/2017
 Course: CSE 270e
 */


var sidebar = require('../helpers/sidebar');

// Exports Module with single function called index
module.exports = {
    /**
     *
     * @param req What the browser sends sends to the server (modified using middleware)
     * @param res What the server is ending back to the browser / client
     */
    index: function (req, res) {
        // TODO Come back to do something about this
        // JS Object that contains properties that hbs uses to fill the HTML
        var viewModel = {
            /*images: [{
             uniqueId: 1,
             title: 'Sample Image 1',
             description: '',
             filename: 'sample1.jpg',
             views: 0,
             likes: 0,
             timestamp: Date.now
             }, {
             uniqueId: 2,
             title: 'Sample Image 2',
             description: '',
             filename: 'sample2.jpg',
             views: 0,
             likes: 0,
             timestamp: Date.now
             }, {
             uniqueId: 3,
             title: 'Sample Image 3',
             description: '',
             filename: 'sample3.jpg',
             views: 0,
             likes: 0,
             timestamp: Date.now
             }, {
             uniqueId: 4,
             title: 'Sample Image 4',
             description: '',
             filename: 'sample4.jpg',
             views: 0,
             likes: 0,
             timestamp: Date.now
             }]*/

        };
        // res .render('index', viewModel);
        // sidebar(viewModel, function (viewModel) {
        res.render('main');
        // });
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

        if (username !== "") {
            res.redirect('/')
        }
    }
};