const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const indexRouter = Router();

indexRouter.get("/", messagesController.getAllMessages);
indexRouter.get("/messages/:messageId", messagesController.getMessageById);
indexRouter.get("/new", messagesController.getCreateMessage);
indexRouter.post("/new", messagesController.postCreateMessage);

module.exports = indexRouter;
