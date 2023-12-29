// models/Project.js
import { v4 as uuidv4 } from "uuid";

export class ProjectImage {
  imageId: string;
  imageUrl: string;
}

export class SocialMediaLink {
  name: string;
  image: string;
  url: string;
}

export class Seo {
  title: string;
  description: string;
}

export class ProjectObjectives {
  title: string;
  description: string;
}

export class ProjectHighlights {
  title: string;
  descriptions: string[];
}

export class ProjectInfo {
  projectObjectives: ProjectObjectives;
  projectHighlights: ProjectHighlights;
  projectBriefDetails: string;
  projectImages: ProjectImage[];
}

export class Project {
  slug: string;
  seo: Seo;
  baseImage: string;
  projectInfo: ProjectInfo;
  socialMediaLinks: SocialMediaLink[];
}



// Define the projectImageSchema
const projectImageSchema = {
  imageId: { type: String, required: true, unique: true },
  imageUrl: {
    type: String,
    required: true,
    validate: [urlValidator, "Invalid URL format for project image"],
  },
};

const socialMediaLinkSchema = {
  name: { type: String, required: true },
  image: { type: String, required: true },
  url: {
    type: String,
    required: true,
    match: [/(https?:\/\/[^\s]+)/, "Invalid URL format"],
  },
};

// Define the project schema
const projectSchema = {
  slug: { type: String, required: true, unique: true, trim: true },
  seo: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  baseImage: {
    type: String,
    required: true,
    validate: [urlValidator, "Invalid URL format for base image"],
  },
  projectInfo: {
    projectObjectives: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
    projectHighlights: {
      title: { type: String, required: true },
      descriptions: {
        type: [String],
        required: true,
        validate: [arrayMinLength, "At least one highlight is required"],
      },
    },
    projectBriefDetails: { type: String, required: true },
    projectImages: {
      type: [projectImageSchema],
      required: true,
      validate: [arrayMinLength, "At least one image is required"],
    },
  },
  socialMediaLinks: {
    type: [socialMediaLinkSchema],
    required: true,
    validate: [arrayMinLength, "At least one social media link is required"],
  },
};

// Function to validate array length
function arrayMinLength(arr) {
  return arr && arr.length > 0;
}

// Function to validate URL
function urlValidator(url) {
  return /(https?:\/\/[^\s]+)/.test(url);
}

// Function to generate unique ID for images
function generateUniqueId() {
  return new uuidv4();
}

export { projectSchema, generateUniqueId };
