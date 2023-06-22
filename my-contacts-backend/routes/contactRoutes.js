const express = require("express");
const router = express.Router();
const { getContact, createContact } = require("../controllers/contactController");

//gets all contacts
router.route("/").get(getContact);

//creates new contact
router.route("/").post(createContact);

//gets on contact
router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//updates one contact
router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//deletes one contact
router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;