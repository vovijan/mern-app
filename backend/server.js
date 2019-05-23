const db = require('./data.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());


app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	next();
});

app.use((err, req, res, next) => {
	console.error(err);

	if (err && err.text && err.text === 'ValidationError') {
		let errorData = { statusCode: 400, message: '' };
		let validationKey = Object.keys(err.errors);
		validationKey.forEach(key => {
			errorData.message = errorData.message.concat(err.errors[key].message) + ' '
		});
		res.status(errorData.statusCode).send(errorData);
	}

	let errorData = {
		statusCode: err && err.statusCode < 500 && err.statusCode || 500,
		message: err && err.statusCode < 500 && err.message || 'Internal server error'
	};

	res.status(errorData.statusCode).send(errorData);
});

app.get('/boards', (req, res, next) => {
	db.Board.find({})
		.then(boards => {
			res.send(boards);
		})
		.catch(err => {
			next(err);
		})
});

app.post('/board', (req, res, next) => {
		console.log(req.body);
		let board = new db.Board();
		board.title = req.body.title;
		board.validate();
		board.save()
			.then(() => {
				res.send(board);
			})
			.catch(err => {
				next(err);
			})
	}
);

app.delete('/board/:id', (req, res, next) => {
	db.Board.findOneAndRemove({ _id: { $in: req.params.id } })
		.then(boardDeleted => {
			res.send(boardDeleted);
		})
		.catch(err => {
			next(err);
		})
});

app.put('/board/update/:id', (req, res, next) => {
	db.Board.findOneAndUpdate({ _id: req.params.id },
		{
			title: req.body.title,
			items: req.body.items
		}
	)
		.then(board => {
			res.send(board);
		})
		.catch(err => {
			next(err);
		})

});

app.listen(3001, () => console.log('Server listening on port 3001!'));

/*const mongoose = require('mongoose');
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
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));*/
