import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "../Backend/db/db.js";
import path from "path";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

(async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if DB connection fails
  }
})();

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", userRoute);

// Production setup
if (process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();

  app.use(express.static(path.join("./Frontend/dist")));
  app.get("*", (req, res) => {
     res.sendFile(path.join(dirPath, "./Frontend/dist", "index.html"));
  });
}
//server
server.listen(port, () => {
  connectToDB();
  console.log(`Server is running on port ${port}`);
});
