const express = require("express");
const router = express.Router();

//gets all contact
router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//creates new contact
router.route("/").post((req, res) => {
    res.status(200).json({ message: "Create Contact" });
});

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