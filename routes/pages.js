const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth");
const { sendDashboard } = require("../controllers/auth");
const { checkAuth } = require("../middlewares/auth");
const { checkCookiesJWT } = require("../middlewares/auth");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 

module.exports = pagesRouter