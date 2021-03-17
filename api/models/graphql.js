const {gql} = require('apollo-server-express');

const typeDef = gql`
  
    type Table {
        id: String
        vehicle: String
        driver: String
        device: String
        location: String
        totalODO: String
    }
    type Query {
        getTables: [Table]
				removeTables(id: String): String
    }
`;

module.exports = typeDef;
