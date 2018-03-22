const ApplicationModel = require("../models/Application");

exports.list = function (req, res) {
    //For Array
    //return response.json(comments);

    //For DB
    ApplicationModel.find({}).exec()
    .then(applications => {
        return res.json(applications);
    });
}
exports.show = function (req, res) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    ApplicationModel.findById(req.params.id).exec()
    .then(application => {
      return res.json(application);
    });
}
exports.create = function (req, res) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});
    
    //For DB
    const newApplication = new ApplicationModel(req.body);
    newApplication.save()
      .then(application => {
        return res.json(application);
      });
}
exports.update = function (req, res) {
    return res.json({theId: req.params.id});
}
exports.remove = function (req, res) {
    //return response.json({});
    /*
    ApplicationModel.remove(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
    */
    ApplicationModel.findByIdAndRemove(req.params.id).exec()
    .then(application => {
      return res.json(application);
    });
}
