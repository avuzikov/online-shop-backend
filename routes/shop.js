const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  //path.join is used instead of / to build paths that will be working on both windows and linux systems
});

module.exports = router;
