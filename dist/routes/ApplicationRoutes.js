"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _ApplicationController = require("../controllers/ApplicationController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/applications", _ApplicationController.list);
router.get("/applications/:id", _ApplicationController.show);
router.post("/applications", _ApplicationController.create);
router.put("/applications/:id", _ApplicationController.update);
router.delete("/applications/:id", _ApplicationController.remove);

module.exports = router;