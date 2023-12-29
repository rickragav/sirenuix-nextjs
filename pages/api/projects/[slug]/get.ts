// pages/api/projects/[slug]/get.ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../utils/dbConnect";
import projectService from "../../../../services/ProjectService";
import { Project } from "../../../../models/Project";

interface ErrorResponse {
  success: false;
  error: string;
}

interface SuccessResponse<T> {
  success: true;
  data: T;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse<Project>>
) {
  const { slug } = req.query;

  if (req.method === "GET") {
    try {
      // Connect to the database
      await projectService.connect();

      const project = await projectService.getProjectBySlug(slug as string);

      if (!project) {
        return res
          .status(404)
          .json({ success: false, error: "Project not found" });
      }
      res.status(200).json({ success: true, data: project });
    } catch (error) {
      console.error("Error getting project:", error);
      res.status(500).json({ success: false, error: "Error getting project" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
