import express from "express";
import cors from "cors";
import index from "./routes/index.route";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", index);

export default app;
