const express = require('express');
const route = express.Router();

const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);


/**
 *  @description Add Users
 *  @method GET /add-user
 */


route.get('/add-employee', services.add_employee);


/**
 *  @description Update Route
 *  @method GET /update-user
 */

route.get('/update-employee', services.update_employee);



module.exports = route;