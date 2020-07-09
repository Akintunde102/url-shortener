import { connectDb } from "./db";
import { PORT } from "./utils/config";
import app from "./app";

connectDb().then(async () => {
  app.listen(PORT, () =>
    console.log(`URL SHORTENER SERVER listening on port ${PORT}!`)
  );
});

