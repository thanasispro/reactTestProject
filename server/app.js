const express = require("express");

const dotenv = require('dotenv');

dotenv.config();

const graphqlHTTP = require("express-graphql");

const category = require('./schemas/types');

const user = require('./schemas/user')

const mongoose = require("mongoose");

const cors = require("cors");


const uri = process.env.DB;

mongoose.connect(
  uri,
    { useNewUrlParser: true })
    .then(() => console.log("DB Connected"))
    .catch((response) => console.log(response))

const app = express();

app.use(cors());

app.use("/category", graphqlHTTP({
    schema: category,
    graphiql: true
}));

app.use("/user", graphqlHTTP({
  schema: user,
  graphiql: true
}));


//When our application starts, it will listen on port 4000
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});