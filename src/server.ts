import express, { type Request, type Response } from "express";
import cors from "cors";
import userRoute from "./routes/user.route";
import errorHandler from "./middlewares/errorHandler";
import morgan from "morgan";
const app = express();
const port = process.env.PORT || 3000;

// ---- Middleware ---- //

// Middleware to enable CORS
app.use(cors());
// Middleware to log HTTP requests
app.use(morgan("dev"));
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to handle errors
app.use(errorHandler);

// ---- Routes ---- //

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1", userRoute);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
