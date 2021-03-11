const Table = require('../models/Table');

const resolvers = {

	Query: {
		currencys() {
			return Table.find()
		},
	}
};

module.exports = resolvers;