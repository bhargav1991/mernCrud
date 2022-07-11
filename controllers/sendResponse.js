module.exports = function sendResponse(err, result, res, next) {
    if (err) {
        next(err);
    } else {
        res.status(200).send(result);
    }
};