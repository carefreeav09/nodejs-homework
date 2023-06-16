const express = require("express");

const router = express.Router();

const userController = require("./user.controller");
router.get("/", userController.getUsers);

router.put("/", userController.createUser);

router.patch("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
