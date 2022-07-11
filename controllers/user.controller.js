const usersModel = require("./../models/users.model");
const sendResponse = require("./sendResponse");
const model = usersModel.model;
const columns = usersModel.columns;

const getUser = function (req, res, next) {
    model.findById({ _id: req.params.id }, function (err, result) {
        if(err) err.status = 403;
        sendResponse(err, result, res, next);
    });
};

const addUser = function (req, res, next) {
    model.create(req.body, function (err, result) {
        sendResponse(err, result, res, next);
    });
}

const updateUser = function (req, res, next) {
    const data = {
        ...columns,
        ...{
            "name": req.body.name,
            "email": req.body.email,
            "age": req.body.age,
            "gender": req.body.gender,
            "hobbies": req.body.hobbies
        }
    }
    model.updateOne({ _id: req.params.id }, data, function (err, result) {
        sendResponse(err, result, res, next);
    })
};

const deleteUser = function (req, res, next) {
    model.deleteOne({ _id: req.params.id }, function (err, result) {
        sendResponse(err, result, res, next);
    })
};

module.exports = {
    getUser,
    addUser,
    updateUser,
    deleteUser
}