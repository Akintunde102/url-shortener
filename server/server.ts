import express from "express";
import cors from "cors";
import { connectDb } from "./db";
import { PORT } from "./utils/config";
import { getUrls, receiveUrl, welcome } from "./controllers";
import bodyParser from "body-parser";

const app: express.Application = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//Routes
app.get("/api/urls", getUrls);
app.post("/api/url", receiveUrl);
app.get("/api/", welcome);

// Handle Production
if (process.env.NODE_ENV === 'production'){
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
  
}


connectDb().then(async () => {
  app.listen(PORT, () =>
    console.log(`URL SHORTENER SERVER listening on port ${PORT}!`)
  );
});
