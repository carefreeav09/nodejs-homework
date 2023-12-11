import { IProjects } from "./project.types";
import { IProjectsBusiness } from "./projects.business";

interface IProjectService {
  create: (data: IProjects, files: {
    [fieldname: string]: Express.Multer.File[];
  } | Express.Multer.File[] | undefined) => Promise<IProjects>;
  getAllProjects: () => Promise<IProjects[]>;
  getProjectById: (id: string) => Promise<IProjects | null>;
}

class ProjectService implements IProjectService {
  private projectModel;
  private projectBusiness;

  constructor(
    protected modal: any,
    protected business: IProjectsBusiness,
  ) {
    this.projectModel = modal;
    this.projectBusiness = business;
  }

  async create(data: IProjects, files: {
    [fieldname: string]: Express.Multer.File[];
  } | Express.Multer.File[] | undefined) {
    const thumbnail = files && "thumbnail" in files && this.projectBusiness.getThumbnailUrl(files.thumbnail);
    const images = files && "images" in files && this.projectBusiness.getImagesUrl(files.images);

    console.log(thumbnail, images, 'thumbnail and images');

    const newData = {
      ...data,
      thumbnail,
      images
    }
    const project = await this.projectModel.create(newData);
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