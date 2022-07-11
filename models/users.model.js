const mongoose = require("mongoose");
const columns = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["m", "f"]
    },
    hobbies: {
        type: Array
    }
}
const usersSchema = mongoose.Schema(columns);
module.exports = {
    model: mongoose.model("users", usersSchema),
    columns: columns
}