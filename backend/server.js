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

	if (err && err.text === 'ValidationError') {
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
			console.log(boards);
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

app.put('/board/:id', (req, res, next) => {
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
