"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _Application = require("../models/Application");

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    _Application2.default.find({}).exec().then(function (applications) {
        return response.json(applications);
    });
}
function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});

    //For DB
    _Application2.default.findById(request.params.id).exec().then(function (application) {
        return response.json(application);
    });
}
function create(request, response) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});

    //For DB
    var newApplication = new _Application2.default(request.body);
    newApplication.save().then(function (application) {
        return response.json(application);
    });
}
function update(request, response) {
    return response.json({ theId: request.params.id });
}
function remove(request, response) {
    //return response.json({});
    /*
    ApplicationModel.remove(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
    */
    _Application2.default.findByIdAndRemove(request.params.id).exec().then(function (application) {
        return response.json(application);
    });
}