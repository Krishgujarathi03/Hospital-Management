import { Router } from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const messageRouter = Router();

messageRouter.post("/send", sendMessage);
messageRouter.get("/getall", isAdminAuthenticated, getAllMessages);

export default messageRouter;
