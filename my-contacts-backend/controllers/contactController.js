//@description Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
        res.status(200).json({ message: "Get all contacts" });
};

//@description Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Create Contact" });
}; 

//@description Get one contact
//@route GET /api/contacts/:id
//@access public
const getOneContact = (req, res) => {
    res.status(200).json({ message: "Get one contact"})
}

//@description Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: "Update contact"})
}

//@description Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: "Delete contact"})
}

module.exports = { getContact, createContact, getOneContact, updateContact, deleteContact };