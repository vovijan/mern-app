/*const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vovijan:Huaweig1@clustername-wz4o0.mongodb.net/boards?retryWrites=true')
	.then(res => {
		console.log('Successfull connect');
	}
)
	.catch(err => {
		console.log(`Connect error:${err}`);
	});

const Board = mongoose.model('Board', {
	title: {
		type: String,
		required: true,
		default: ''
	},
	items: Array
});

module.exports = {
	Board: Board
};
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema({
	title: {
		type: String,
		required: true,
		default: ''
	},
	items: Array
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Data', DataSchema);
