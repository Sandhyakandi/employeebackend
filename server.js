import { APP_PORT } from "./config/index.js";
import express from "express";
import routes from "./routes/index.js";
import mongoConnect from "./util/database.js";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next(); 
});
app.use("/api", routes);
mongoConnect(()=>{
    app.listen(APP_PORT, () => {
    console.log(`Port ${APP_PORT}...4000...started`);
  })
  
  });