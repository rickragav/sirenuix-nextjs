// services/ProjectService.ts

import { connectToDatabase } from "../utils/dbConnect";
import { projectSchema, Project } from "../models/Project";

interface validationResult {
  valid: boolean;
  error?: string;
}

class ProjectService {
  private db: any; // Replace 'any' with the actual type of your MongoDB connection
  private collectionName: string;

  constructor() {
    this.db = null;
    this.collectionName = "projects";
  }

  async connect(): Promise<void> {
    this.db = await connectToDatabase();
  }

  async createProject(data: any): Promise<{ success: boolean; data?: any; error?: string }> {
    if (!this.db) {
      throw new Error("Database connection not established. Call connect() first.");
    }

    // Validate the incoming data against the projectSchema
    const validationResult = this.validateAgainstSchema(data, projectSchema);
    if (!validationResult.valid) {
      return { success: false, error: validationResult.error };
    }

    try {
      const projectsCollection = this.db.collection(this.collectionName);

      // Insert your MongoDB logic here
      // For example, you can use the `projectsCollection` as shown in the previous example
      const result = await projectsCollection.insertOne(data);

      return { success: true, data: result };
    } catch (error) {
      console.error("Error creating project:", error);
      return { success: false, error: "Error creating project" };
    }
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    try {
      // Connect to the database
      await this.connect();

      const projectsCollection = this.db.collection(this.collectionName);

      const project = await projectsCollection.findOne({ slug });
      const projectInstance:Project = Object.assign(new Project(), project);
      return projectInstance;
    } catch (error) {
      console.error("Error getting project by slug:", error);
      throw error;
    }
  }

  async getAllProjects(): Promise<Project[]> {
    try {
      // Connect to the database
      await this.connect();

      const projectsCollection = this.db.collection(this.collectionName);
      const projects = await projectsCollection.find({ /* your query conditions */ }).toArray();
      return projects;
    } catch (error) {
      console.error("Error getting all projects:", error);
      throw error;
    }
  }

  private validateAgainstSchema(data: any, schema: any): validationResult {
    // Validation logic similar to what was in the create.js file
    // ...

    return { valid: true };
  }
}

const projectService = new ProjectService();
export default projectService;
