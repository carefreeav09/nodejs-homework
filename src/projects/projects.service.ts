class ProjectService {
    projectModel: any;

    constructor(model: any) {
        this.projectModel = model;
    }

    async create(data: any) {
        const project = await this.projectModel.create(data);
        return project;
    }

    async getAllProjects() {
        const projects = await this.projectModel.find();
        return projects;
    }

    async getProjectById(id: string) {
        const project = await this.projectModel.findById(id);
        return project;
    }
}

export default ProjectService;