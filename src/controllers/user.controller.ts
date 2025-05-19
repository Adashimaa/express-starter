import type { NextFunction, Request, Response } from "express";
import { handleResponse } from "../utils/handleResponse";

export const listUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = [
      {
        id: 1,
        name: "John",
        email: "John@gmail.com",
      },
      {
        id: 2,
        name: "Jane",
        email: "Jane@gmail.com",
      },
    ];
    handleResponse(res, 200, "List of users", data);
  } catch (err) {
    next(err);
  }
};
