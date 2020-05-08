const express = require("express");

const dotenv = require('dotenv');

dotenv.config();

const graphqlHTTP = require("express-graphql");

const category = require('./schemas/types');

const mongoose = require("mongoose");


const uri = process.env.DB;

mongoose.connect(
  uri,
    { useNewUrlParser: true })
    .then(() => console.log("DB Connected"))
    .catch((response) => console.log(response))

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: category,
    graphiql: true
}));


//When our application starts, it will listen on port 4000
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});