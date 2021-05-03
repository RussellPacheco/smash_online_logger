require("dotenv").config();
const express = require("express");
const router = require("./routes")
const db = require("./db")


const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 9000;

app.use(express.static(path.resolve(__dirname, "..", "dist")));

(async () => {
    try {
      console.log("Running migrations");
      await db.migrate.latest();
  
      console.log("Starting express");
      app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
    } catch (err) {
      console.error("Error starting app!", err);
      process.exit(-1);
    }
  })();
  