const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

var cardsSchema = require('./Models/cards');
const user = require("./Routes/Api/user");
const createTable = require("./Routes/Api/createTable");
const cardEvent = require("./Routes/Api/deck");

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = require("./Config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect( db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log("MongoDB successfully connected 🧉"))
.catch(err => console.log(err));



app.use("/user", user);
app.use("/table", createTable);
app.use("/card", cardEvent)


const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port http://localhost:${port} 🔥`));

// console.log(cardsSchema);
