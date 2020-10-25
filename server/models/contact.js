/*
    File Name: contact.js (in models)
    Student Name: Nahia Akter
    Student ID: 301106956
    Date: 22 October, 2020
*/
let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    company: String,
    email: String,
    phone: String

}, {
    collection: 'contacts'
});


module.exports = mongoose.model('Contact', contactModel);