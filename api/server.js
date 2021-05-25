const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config'); 

if (process.env["NODE_ENV"] === "development") {
    app.use(cors());
    console.log("Running in dev mode");
  }

require('./src/routes/index')(app);

app.use(express.json());
app.listen(config.port, () => console.log(`listening on port ${config.port}!`));