import mongoose from "mongoose";

const Project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  description: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  technologies: {
    type: [String],
    required: true,
    min: 6,
    max: 1024
  },
  freelance: Boolean,
  thumbnail: String,
  images: [String],
  url: {
    type: String,
    required: false,

  },
  github: String,
  appType: {
    type: String,
    required: true
  }
});

export default mongoose.model("Project", Project);


