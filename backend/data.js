const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema({
	todo_description: {
		type: String
	},
	todo_responsible: {
		type: String
	},
	todo_priority: {
		type: String
	},
	todo_completed: {
		type: Boolean
	}
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Data', DataSchema);
