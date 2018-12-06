//Required Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Reequired Configuration files
const keys = require('./keys');

//MongoDB Configuration
const dbKeys = keys.mongoURI;

//App Initialization
const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//Connect to Mongoose
mongoose
  .connect(dbKeys, {useNewUrlParser: true})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//require Item Model
const Item = require('./item');

//App GET route
app.get('/display', (req, res) => {
  Item.find()
    .sort({data: -1})
    .then(items => res.json(items));
});

//App PUT route
app.put('/update', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item));
});

//Port Configuration
const port = 8000;

//Listening on port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
