// pages/api/projects/create.js
import projectService from "../../../services/ProjectService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        slug,
        seo,
        baseImage,
        projectInfo,
        socialMediaLinks,
        designToolImage,
        designProduct,
        category,
      } = req.body;

      // Connect to the database
      await projectService.connect();

      // Create a new project using the ProjectService
      const result = await projectService.createProject({
        slug,
        seo,
        baseImage,
        projectInfo,
        socialMediaLinks,
        designToolImage,
        designProduct,
        category,
      });

      res.status(result.success ? 201 : 500).json(result);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(500).json({ success: false, error: "Error creating project" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
