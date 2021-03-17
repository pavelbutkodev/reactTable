const Table = require('../models/Table');

const resolvers = {
	Query: {
		getTables() {
			return Table.find()
		},
	},
	Mutation: {
		removeTables: async (id) => {
			console.log('removeTables')
			console.log('========>Table ', Table );
			// const sdfsdf = await Table.deleteOne({
			// 	id,
			// })
			console.log('========>id',id);
			console.log('========>sdfsdf',sdfsdf);
			return id
		},
	}
};

module.exports = resolvers;