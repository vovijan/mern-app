const mongoose = require('mongoose');
const express = require('express');
let 	cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());
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

router.route('/').get((req, res) => {
	// eslint-disable-next-line array-callback-return
	Data.find((err, todos) => {
		if (err) {
			console.log(err);
		} else {
			res.json(todos);
		}
	});
});

router.route('/:id').get((req, res) => {
	let id = req.params.id;
	Data.findById(id, (err, todo) => {
		res.json(todo);
	});
});

router.route('/add').post((req, res) => {
	let todo = new Data(req.body);
	todo.save()
		.then(todo => {
			res.status(200).join({
				'todo': 'todo added successfully'
			});
		})
		.catch(err => {
			res.status(400).send('adding new todo failed');
		});
});

router.route('/update/:id').post((req, res) => {
	Data.findById(req.params.id, (err, todo) => {
		if (!todo)
			res.status(404).send('data is not found');
		else
			todo.todo_description = req.body.todo_description;
			todo.todo_responsible = req.body.todo_responsible;
			todo.todo_priority = req.body.todo_priority;
			todo.todo_completed = req.body.todo_completed;

			todo.save().then(todo => {
				res.json('Todo updated!');
			})
				.catch(err => {
					res.status(400).send('Update not possible');
				});
	});
});

app.use('/test', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
