const express = require("express");
const router = express.Router();


const { getUsers } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHTMLResponse')
// login page

router.get("/", decorateHtmlResponse("Users"), getUsers);


module.exports = router;