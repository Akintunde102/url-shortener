import express from "express";
import cors from "cors";
import { processLogin, processRegister } from "./controllers";
import bodyParser from "body-parser";

const app: express.Application = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//Routes
app.post("/api/user/login", processLogin);
app.post("/api/user/register", processRegister);



// Static folder
// app.use(express.static(__dirname + '/public/'));

  // Handle SPA
app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));

export default app;