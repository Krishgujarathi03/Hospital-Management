import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import connectToDb from "./database/db.js";
import cloudinary from "cloudinary";
import messageRouter from "./routes/messageRoute.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./routes/userRoute.js";
import appointmentRouter from "./routes/appointmentRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

connectToDb();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on http://localhost:${port}`);
});

app.use(errorMiddleware);
