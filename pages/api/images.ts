import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isDev = process.env.NODE_ENV !== "production";
  const imageDirectory = path.join(process.cwd(), "public", "images");

  try {
    const files = await fs.promises.readdir(imageDirectory);
    const images = files
      .filter((file) => {
        return [".jpg", ".jpeg", ".png"].includes(path.extname(file));
      })
      .map((image) => {
        return isDev
          ? `http://localhost:3000/images/${image}`
          : `https://${process.env.VERCEL_URL}/images/${image}`;
      });

    return res.status(200).json(images);
  } catch (err) {
    console.error(err);
    //@ts-ignore
    return res.status(Number(500)).json({
      message: "Internal Server Error",
      details:
        "Mungkin Server kebanyakan request, coba beberapa waktu kemudian",
    });
  }
}
