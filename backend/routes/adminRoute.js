import express from "express";
import { addArtist,loginAdmin } from "../controllers/adminController.js";
import authAdmin from "../middlewares/authAdmin.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-artist",authAdmin ,upload.single("image"), addArtist);
adminRouter.post("/login", loginAdmin);

export default adminRouter;
