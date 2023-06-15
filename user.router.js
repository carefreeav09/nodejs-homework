const express = require("express");

const router = express.Router();

const usersController = require("./user.controller");
router.get("/", usersController.getUsers);

router.put("/", usersController.createUser);

router.patch("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;
