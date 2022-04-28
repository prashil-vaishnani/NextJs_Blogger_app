// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { default as blogs } from "../../blog_details.json";

type Data = { id: string; title: string; description: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === "GET") {
    res.status(200).json(blogs);
  } else if (req.method === "POST") {
    const title: string = req.body.title;
    const description: string = req.body.description;
    const b: Data = {
      id: Date.now().toString(),
      title,
      description,
    };
    blogs.push(b);
    res.status(201).json(b);
  }
}
