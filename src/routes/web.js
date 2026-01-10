import express from "express";
import { handleHomePage ,handleUserPage } from "../controller/homeController.js";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", handleHomePage);
    router.get("/user", handleUserPage)

    return app.use("/", router)
}

export default initWebRoutes;