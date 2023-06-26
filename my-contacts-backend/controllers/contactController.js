const asyncHandler = require("express-async-handler");

//@description Get all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
        res.status(200).json({ message: "Get all contacts" });
});

//@description Create new contact
//@route POST /api/contacts
//@access public
const createContact = async (req, res) => {
    console.log(req.body)
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error ("All fields are mandatory")
    }
    res.status(201).json({ message: "Create Contact" });
}; 

//@description Get one contact
//@route GET /api/contacts/:id
//@access public
const getOneContact = async (req, res) => {
    res.status(200).json({ message: "Get one contact"})
}

//@description Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req, res) => {
    res.status(200).json({ message: "Update contact"})
}

//@description Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async (req, res) => {
    res.status(200).json({ message: "Delete contact"})
}

module.exports = { getContact, createContact, getOneContact, updateContact, deleteContact };