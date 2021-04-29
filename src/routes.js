var express         = require('express'),
    routes          = express.Router();
var userController  = require('./controller/user-controller');
var companyController  = require('./controller/company-controller');
var accessLogController  = require('./controller/access-log-controller');
var badgeController  = require('./controller/badge-controller');
var questionnaireController  = require('./controller/questionnaire-controller');
var employeeController  = require('./controller/employee-controller');
var passport	    = require('passport');


routes.get('/', (req, res) => {
    return res.send('Entrisec Standard API!');
});

// Company Routes
routes.get("/companies", companyController.all);
routes.get("/company/:id", companyController.find);
routes.post("/company/create", companyController.create);
routes.delete("/company/delete/:id", companyController.delete);
routes.patch("/company/edit/:id", companyController.edit);

// Access Logs Routes
routes.get("/accesslog", accessLogController.all);
routes.get("/accesslog/:id", accessLogController.find);
routes.post("/accesslog/add", accessLogController.create);
routes.delete("/accesslog/delete/:id", accessLogController.delete);

// Badge Routes
routes.get("/badges", badgeController.all);
routes.get("/badge/:id", badgeController.find);
routes.post("/badge/add", badgeController.create);
routes.delete("/badge/delete/:id", badgeController.delete);

// Questionnaire Routes
routes.get("/questionnaires", questionnaireController.all);
routes.get("/questionnaire/:id", questionnaireController.find);
routes.post("/questionnaire/add", questionnaireController.create);
routes.delete("/questionnaire/delete/:id", questionnaireController.delete);

// Employee Routes
routes.get("/employees", employeeController.all);
routes.get("/employee/:id", employeeController.find);
routes.post("/employee/add", employeeController.create);
routes.delete("/employee/delete/:id", employeeController.delete);

// user Routes
routes.get("/users", userController.all);
routes.get("/user/:id", userController.find);
routes.delete("/user/delete/:id", userController.delete);
routes.post("/user/register", userController.register);
routes.post("/user/login", userController.login); 
routes.patch("/user/edit", userController.edit);

module.exports = routes;
