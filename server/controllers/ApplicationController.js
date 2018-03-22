const ApplicationModel = require("../models/Application");

function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    ApplicationModel.find({}).exec()
    .then(applications => {
        return response.json(applications);
    });
}
function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    ApplicationModel.findById(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
}
function create(request, response) {
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
function update(request, response) {
    return response.json({theId: request.params.id});
}
function remove(request, response) {
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

exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.remove = remove;