const mongoose = require('mongoose');
const express = require('express');
let 	cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb+srv://vovijan:Huaweig1@clustername-wz4o0.mongodb.net/test?retryWrites=true";

// connects our back end code with the database
mongoose.connect(
	dbRoute,
	{ useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
connection.on("error", console.error.bind(console, "MongoDB connection error:"));

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
