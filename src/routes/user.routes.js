import { Router } from "express";
import { registeruser } from "../controllers/user.controller";
const router = Router();
router.route("/register").post(registeruser);


export default router;