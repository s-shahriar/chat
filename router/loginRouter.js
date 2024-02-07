const express = require("express");
const router = express.Router();


const { getLogin } = require('../controller/loginController')
const decorateHtmlResponse = require('../middlewares/common/decorateHTMLResponse')

// login page

router.get("/", decorateHtmlResponse("login"), getLogin);


module.exports = router;