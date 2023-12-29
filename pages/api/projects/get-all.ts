// pages/api/projects/get-all.js

import projectService from "../../../services/ProjectService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
     
      const projects = await projectService.getAllProjects();

      res.status(200).json({ success: true, data: projects });
    } catch (error) {
      console.error("Error getting projects:", error);
      res.status(500).json({ success: false, error: "Error getting projects" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
