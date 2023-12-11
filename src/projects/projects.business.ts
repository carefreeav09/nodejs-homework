export interface IProjectsBusiness {
  getThumbnailUrl: (file: Express.Multer.File[]) => string;
  getImagesUrl: (files: Express.Multer.File[]) => string[];
  parseArrays: (data: string) => Array<string>;
}

class ProjectsBusiness implements IProjectsBusiness {
  getThumbnailUrl(file: Express.Multer.File[]): string {
    if (file && file.length > 0) {
      return file[0].path;
    } else return '';
  }
  getImagesUrl(files: Express.Multer.File[]): string[] {
    const newUrls: Array<string> = [];

    if (files && files.length > 0) {
      files.forEach((file: Express.Multer.File) => {
        newUrls.push(file.path);
      });

      return newUrls;
    } else return newUrls;
  }

  parseArrays(data: string) {
    const newArray: Array<string> = data
      .split(',')
      .map((tech: string) => tech.trim());
    return newArray;
  }
}

export default ProjectsBusiness;
