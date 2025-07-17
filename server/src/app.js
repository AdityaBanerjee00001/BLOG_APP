import express from "express";
import { errorHandler } from "./middlewares/error.middleware.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import blogRouter from "./routes/blog.routes.js";
import commentRouter from "./routes/comment.routes.js";
const app = express();

//middlewares
app.use(express.json()); //helps to parse json data express cant parse json so we use it
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
//api
app.use("/api/v1/user", userRouter); //http://localhost:5000/api/v1/user/register
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/comment", commentRouter);
//global error handler

app.use(errorHandler);
export default app;
