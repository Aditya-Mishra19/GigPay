const express =require('express');
const userRoutes= express.Router();

const userApp = express();

const authMiddleware= require('../middlewares/authMiddleware');

const bodyParser = require('body-parser');
userApp.use(bodyParser.json());
userApp.use(bodyParser.urlencoded({extended:true}));

const userController = require ('../controllers/userController')
userRoutes.route('/createuser').post( userController.createUser);
userRoutes.route('/login').post(userController.login);

// const detailsController = require ('../controllers/detailsController')
// userRoutes.route('/createdetails').post( detailsController.createDetails);

module.exports= userRoutes;