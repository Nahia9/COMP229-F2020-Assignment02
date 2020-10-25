var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Placeholder');
});

module.exports = router;

/*

let indexController = require('../controllers/index');

let contactController = require('../controllers/contact');

// route guard
function requireAuth(req, res, next) {
  //check if the user is logged in 
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

//GET home page. 
router.get('/', indexController.displayHomePage);

// GET home page. 
router.get('/home', indexController.displayHomePage);

//GET About page. 
router.get('/about', indexController.displayAboutPage);

//GET Products page. 
router.get('/projects', indexController.displayProjectsPage);

//GET Services page. 
router.get('/services', indexController.displayServicesPage);

// GET Contact Us page. 
router.get('/contact', indexController.displayContactPage);

// GET Contact Us page. 
router.get('/login', indexController.displayLoginPage);

// POST request for login page
router.post('/login', indexController.processLoginPage);

//Perform logout 
router.get('/logout', indexController.PerformLogout);

// GET contact list page. 
router.get('/contact-list', requireAuth, contactController.displayContactList);

// GET request for edit contact page 
router.get('/contact-list/update/:id', requireAuth, contactController.displayUpdatePage);

//POST request for processing edit page 
router.post('/contact-list/update/:id/', requireAuth, contactController.processUpdatePage);

// GET request for edit contact page 
router.get('/contact-list/delete/:id', requireAuth, contactController.processDeletePage);

module.exports = router;*/