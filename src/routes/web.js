const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! TPY");
});

router.get("/abc", (req, res) => {
  res.send("check abc route");
});

router.get("/tpy", (req, res) => {
  // res.send("<h1>hello tpy</h1>");
  res.render("sample.ejs");
});
module.exports = router; // export default router
