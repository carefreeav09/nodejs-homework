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
projectsRouter.post("/", projectsController.createProject);

//
projectsRouter.post("/upload", upload().single('file'), projectsController.handleFileUpload);

export default projectsRouter;
