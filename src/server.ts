import express from "express";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello word!" });
});

app.use(routes);

app.listen(3333, () => console.log("Server is running!"));
