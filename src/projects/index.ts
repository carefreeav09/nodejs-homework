import ProjectsService from './projects.service';
import ProjectsBusiness from './projects.business';
import ProjectsModel from './projects.model';

const projectsBusiness = new ProjectsBusiness();
const Projects = new ProjectsService(ProjectsModel, projectsBusiness);

export default Projects;
