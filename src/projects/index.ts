import ProjectsService from './projects.service';

import ProjectsModel from './projects.model';

const Projects = new ProjectsService(ProjectsModel);

export default Projects;
