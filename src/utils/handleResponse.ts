import type { Request, Response } from "express";

export const handleResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: any
) => {
  res.status(statusCode).json({
    status: statusCode,
    message,
    data,
  });
};
