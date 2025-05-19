import express from "express";
import { listUser } from "../controllers/user.controller";
const router = express.Router();

router.get("/user", listUser);

export default router;
