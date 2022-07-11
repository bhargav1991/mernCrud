const express = require("express");
const router = express.Router();
const userController = require("./../controllers/user.controller");

router.get("/:id",userController.getUser);

router.post("/",userController.addUser);

router.put("/:id",userController.updateUser);

router.delete("/:id",userController.deleteUser);

module.exports = router;