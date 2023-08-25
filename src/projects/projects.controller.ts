import { Request, Response } from "express";

import Projects from '.';

const projectsController = {
    getProjects: async (req: Request, res: Response) => {
        //
        const projectsList = await Projects.getAllProjects();

        //
        res.status(200).json({
            message: "Success",
            data: projectsList,
            code: 200
        });
    },

    getSingleProjectDetails: async (req: Request, res: Response) => {
        const id = req.params.id;
        const project = await Projects.getProjectById(id);
        res.status(200).json({
            message: "Success",
            data: project,
            code: 200
        });
    },

    createProject: async (req: Request, res: Response) => {
        const data = req.body;
        // const project = await Projects.create(data);
        res.status(200).json({
            message: "Success",
            data: 'nothing for now',
            code: 200
        });
    },
};

export default projectsController;