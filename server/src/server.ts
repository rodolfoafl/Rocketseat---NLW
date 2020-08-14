import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(routes);
app.use(express.json());

const port = process.env.PORT || 3333;

app.listen(port);
