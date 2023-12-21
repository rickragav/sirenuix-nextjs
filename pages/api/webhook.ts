// pages/api/webhook.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Handle webhook event
    console.log("Webhook received:", req.body);

    // Add your webhook processing logic here

    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
