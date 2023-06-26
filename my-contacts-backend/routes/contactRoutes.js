const express = require("express");
const router = express.Router();
const { 
    getContact, 
    createContact, 
    getOneContact, 
    updateContact, 
    deleteContact 
} = require("../controllers/contactController");

//GET all contacts   CREATE one contact
router.route("/").get(getContact).post(createContact);

//GET one contact   UPDATE one contact   DELETE one contact
router.route("/:id").get(getOneContact).put(updateContact).delete(deleteContact);

module.exports = router;