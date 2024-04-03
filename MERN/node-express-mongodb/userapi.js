const express = require("express");
const router = express.Router();
module.exports = router;

const User = require("./userschema");

router.get("/", (req, res) => {
    let data = {"message":"Your User Api is Working"};
    res.status(200).json(data);
})