"use strict";

var _Application = require("../models/Application");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res) {
    //For Array
    //return response.json(comments);

    //For DB
    _Application2.default.find({}).exec().then(function (applications) {
        return res.json(applications);
    });
}
function show(req, res) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});

    //For DB
    _Application2.default.findById(req.params.id).exec().then(function (application) {
        return res.json(application);
    });
}
function create(req, res) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});

    //For DB
    var newApplication = new _Application2.default(req.body);
    newApplication.save().then(function (application) {
        return res.json(application);
    });
}
function update(req, res) {
    return res.json({ theId: req.params.id });
}
function remove(req, res) {
    //return response.json({});
    /*
    ApplicationModel.remove(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
    */
    _Application2.default.findByIdAndRemove(req.params.id).exec().then(function (application) {
        return res.json(application);
    });
}

exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.remove = remove;