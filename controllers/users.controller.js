const usersModel = require("../models/users.model");
const model = usersModel.model;
const sendResponse = require("./sendResponse");
const getUsers = function (req, res,next) {
    model.find({}, function (err, result) {
        sendResponse(err,result,res,next);
    });
};


module.exports = {
    getUsers
}