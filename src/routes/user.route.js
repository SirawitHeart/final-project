const express = require('express');
const app = express.Router();
const controller = require('../controllers/user.controller')

app.get("/", controller.getUsers);

app.get("/:id", controller.getUserById);

app.post("/", controller.createUser);

app.put("/:id", controller.updateUser);

// app.patch("/:id", controller.addReview);

app.delete("/:id", controller.deleteUser);

app.get("/username/:username", controller.getUsersByUsername);

app.get("/fullname/:fullname", controller.getUsersByFullname);

module.exports = app;
