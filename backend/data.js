const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vovijan:Huaweig1@clustername-wz4o0.mongodb.net/todolist?retryWrites=true&w=majority', {useNewUrlParser: true})
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
