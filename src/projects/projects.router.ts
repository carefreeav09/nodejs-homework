import express from "express";
import projectsController from "./projects.controller";
//
import { upload } from "../config/multerConfig";
const projectsRouter = express.Router();

//
projectsRouter.get("/", projectsController.getProjects);

//
projectsRouter.get("/:id", projectsController.getSingleProjectDetails);

//
projectsRouter.post("/", upload().fields([{
    name: 'thumbnail',
    maxCount: 1
}, {
    name: 'images',
    maxCount: 8
}]), projectsController.createProject);

export default projectsRouter;


// git fake commit : no electricity, have to do this sadly