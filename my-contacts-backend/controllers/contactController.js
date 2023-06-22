//@description Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
        res.status(200).json({ message: "Get all contacts" });
};

module.exports = { getContact };


//@description Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "Create Contact" });
}; 

// FINISH OTHER ROUTES GET (ONE), PUT, DELETE

module.exports = { getContact, createContact };