import express from "express";
import cors from "cors";
import { allowCrossDomain } from "./middlewares";
import taskRouter from "./routes/taskRouter";
import projectRouter from "./routes/projectRouter";
import swaggerDocs from "./swagger.js";
import { PORT } from "./config";
const app = express();

app.use(cors());
app.use(express.json());
app.use(allowCrossDomain);
app.use("/api", taskRouter);
app.use("/api", projectRouter);

app.listen(PORT, () => {
  console.log("Todoist local backend launched");
  swaggerDocs(app, PORT);
});