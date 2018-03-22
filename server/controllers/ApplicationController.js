const ApplicationModel = require("../models/Application");

module.exports = function list(request, response) {
    //For Array
    //return response.json(comments);

    //For DB
    ApplicationModel.find({}).exec()
    .then(applications => {
        return response.json(applications);
    });
}
module.exports = function show(request, response) {
    //For Array
    //return response.json(comments.find(comment => comment._id == request.params.id) || {});
    
    //For DB
    ApplicationModel.findById(request.params.id).exec()
    .then(application => {
      return response.json(application);
    });
}
module.exports = function create(request, response) {
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
module.exports = function update(request, response) {
    return response.json({theId: request.params.id});
}
module.exports = function remove(request, response) {
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