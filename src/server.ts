require('custom-env').env()
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import "reflect-metadata";
import errorHandler from "./utils/error-handler";
import connection from "./connection";

const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json({ message: "Server starts successfully!" });
});

// routes
app.use("/api/v1", routes);

// CORS
app.use(cors());

// error handler
app.use(errorHandler);

app.set("port", process.env.PORT || "3000");

connection.then((connection) => {
  app.listen(process.env.PORT || "3000", () => {
    console.log("app is running on port ", process.env.PORT || "3000");
  });
});


export default app;
