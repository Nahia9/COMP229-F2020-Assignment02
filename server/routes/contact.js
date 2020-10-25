/*
    File Name: contact.js (in routes)
    Student Name: Nahia Akter
    Student ID: 301106956
    Date: 22 October, 2020
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our contactModel
let Contact = require('../models/contact');

let contactControllers = require('../controllers/contact');

/* GET Route for the Book List page - READ Operation */
router.get('/', contactControllers.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactControllers.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactControllers.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', contactControllers.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', contactControllers.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', contactControllers.performDelete);

module.exports = router;