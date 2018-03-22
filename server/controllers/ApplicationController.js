const ApplicationModel = require("../models/Application");

exports.list = function (request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    ApplicationModel.find({}).exec()
    .then(applications => {
        return response.json(applications);
    });
}
exports.show = function (request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    ApplicationModel.findById(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
}
exports.create = function (request, response) {
    //For Array
    //    comments.push(request.body);
    //return response.json({});
    
    //For DB
    const newApplication = new ApplicationModel(request.body);
    newApplication.save()
      .then(application => {
        return response.json(application);
      });
}
exports.update = function (request, response) {
    return response.json({theId: request.params.id});
}
exports.remove = function (request, response) {
    //return response.json({});
    /*
    ApplicationModel.remove(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
    */
    ApplicationModel.findByIdAndRemove(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
}
