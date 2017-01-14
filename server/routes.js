/*
 Name: Alex Oladele
 Date: 1/12/2017
 Course: CSE 270e
 */

/*Makes a map of each available URL path for the Program*/

// Grab modules needed
var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    image = require('../controllers/image');

// Creates the module that this file is and attaches all the routes to the app instance
// Routes to the proper controller and data for the controller | Remember that home is a var, and index is one of its properties
// TODO Add routes for the different pages
module.exports = function (app) {
    router.get('/', home.index);
    // :image_id acts as a wildcard for any image value, second parameter is callback function
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/images/:image_id/comment', image.comment);

    // Attaches routes to app instance
    app.use(router);
};