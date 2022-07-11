require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");

// connect mongodb
const connectionStr = isProduction() ? process.env.MONGO_CONNECTION : "mongodb://localhost/mernCrud";

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

mongoose.connect(connectionStr).then(function (result) {
    console.info("mongodb connected");
}).catch(function (err) {
    console.error("Unable to connect mongodb", err.message);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/user", routes.user);
app.use("/users", routes.users);

// unhandled route

app.use((err, req, res, next) => {
    res.status(err.status || 422).send(err.message);
})

if (isProduction()) {
    app.use(express.static('frontend/build'));
    app.get("/", function (req, res) {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    });
}else{
    app.get("/", (req, res) => {
        res.status(200).send("Welcome");
    });
}

app.get("*",function(req,res){
    res.status(404).send("Page NOT FOUND");
})

app.listen(port, () => {
    console.log(`Listening @${port}`);
});
