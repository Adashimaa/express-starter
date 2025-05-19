import type { Response } from "express";

const errorHandler = (err: any, res: Response) => {
  console.log("[Error]: ", err);
  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    error: err.message,
  });
};

export default errorHandler;
