const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema({
	id: {
		type: String,
	},
	vehicle: {
		type: String,
		default: ''
	},
	driver: {
		type: String,
		default: ''
	},
	device: {
		type: String,
		default: ''
	},
	location: {
		type: String,
		default: ''
	},
	totalODO: {
		type: String,
		default: ''
	},
})

module.exports = mongoose.model('table', tableSchema);