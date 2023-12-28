// pages/api/projects/create.js

import Project from "../../../models/Project";
import { dbConnect } from "../../../utils/dbConnect";


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { slug, seo, baseImage, projectInfo, socialMediaLinks } = req.body;
      const project = new Project({
        slug,
        seo,
        baseImage,
        projectInfo,
        socialMediaLinks,
      });
      const savedProject = await project.save();

      res.status(201).json({ success: true, data: savedProject });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error creating project' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
