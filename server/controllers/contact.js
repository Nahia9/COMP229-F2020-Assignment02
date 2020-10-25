let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(BookList);

            res.render('contact/list', {
                title: 'Contact List',
                ContactList: contactList
            });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {
        title: 'Add Contact'
    })
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "company": req.body.company,
        "email": req.body.email,
        "phone": req.body.phone
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the book list
            res.redirect('/contactlist');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contact/edit', {
                title: 'Edit Contact',
                contact: contactToEdit
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "company": req.body.company,
        "email": req.body.email,
        "phone": req.body.phone
    });

    Contact.updateOne({
        _id: id
    }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the book list
            res.redirect('/contactlist');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({
        _id: id
    }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the book list
            res.redirect('/contactlist');
        }
    });
}