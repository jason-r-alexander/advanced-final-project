const express = require("express");
const {list,show,create,update,remove} = require("../controllers/ApplicationController");
const router = express.Router();


router.get("/applications", list);
//router.get("/applications/:id", show);
//router.post("/applications", create);
//router.put("/applications/:id", update);
//router.delete("/applications/:id", remove);

module.exports = router;