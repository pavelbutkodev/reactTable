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
        currencys: [Table]
    }
`;

module.exports = typeDef;
