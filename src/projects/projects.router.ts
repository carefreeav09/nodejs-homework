import express, { Request, Response, NextFunction } from "express";
import projectsController from "./projects.controller";
const projectsRouter = express.Router();

//
projectsRouter.get("/", projectsController.getProjects);

//
projectsRouter.get("/:id", projectsController.getSingleProjectDetails);

//
projectsRouter.post("/", projectsController.createProject);

export default projectsRouter;
