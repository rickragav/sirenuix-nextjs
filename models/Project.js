// models/Project.js
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const projectHighlightsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  descriptions: {
    type: [String],
    required: true,
    validate: [arrayMinLength, "At least one highlight is required"],
  },
});

const projectObjectivesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const projectImageSchema = new mongoose.Schema({
  imageId: { type: String, required: true, unique: true },
  imageUrl: {
    type: String,
    required: true,
    validate: [urlValidator, "Invalid URL format for project image"],
  },
});

// Add a pre-save hook to generate a unique ID for each image
projectImageSchema.pre("save", function (next) {
  // Generate a unique ID (you can use a library like uuid)
  this.imageId = generateUniqueId();
  next();
});

const projectInfoSchema = new mongoose.Schema({
  projectObjectives: projectObjectivesSchema,
  projectHighlights: projectHighlightsSchema,
  projectBriefDetails: { type: String, required: true },
  projectImages: {
    type: [projectImageSchema],
    required: true,
    validate: [arrayMinLength, "At least one image is required"],
  },
});

const socialMediaLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  url: {
    type: String,
    required: true,
    match: [/(https?:\/\/[^\s]+)/, "Invalid URL format"],
  },
});

const seoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, trim: true },
  seo: seoSchema,
  baseImage: {
    type: String,
    required: true,
    validate: [urlValidator, "Invalid URL format for base image"],
  },
  projectInfo: projectInfoSchema,
  socialMediaLinks: {
    type: [socialMediaLinkSchema],
    required: true,
    validate: [arrayMinLength, "At least one social media link is required"],
  },
});

function arrayMinLength(arr) {
  return arr && arr.length > 0;
}

function urlValidator(url) {
  return /(https?:\/\/[^\s]+)/.test(url);
}

function generateUniqueId() {
  return new uuidv4();
}

const Project = mongoose.model("Project", projectSchema);

export default Project;
