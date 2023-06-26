const express = require("express");
const router = express.Router();
const { getContact, createContact, getOneContact, updateContact, deleteContact } = require("../controllers/contactController");

//gets all contacts
router.route("/").get(getContact);

//creates new contact
router.route("/").post(createContact);

//gets on contact
router.route("/:id").get(getOneContact);

//updates one contact
router.route("/:id").put(updateContact);

//deletes one contact
router.route("/:id").delete(deleteContact);

module.exports = router;