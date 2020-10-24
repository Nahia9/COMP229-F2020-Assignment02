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

// GET Route for the Contact List page - Read Operation
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {

            // console.log(ContactList);
            res.render('contact', {
                title: 'Contact List',
                ContactList: contactList
            })

        }
    });
});

module.exports = router;