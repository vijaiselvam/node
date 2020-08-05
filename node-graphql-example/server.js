var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        message: String
    }
`);

var root = {
    message: () => 'Hello World!'
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express graphql server running on server localhost:4000/graphql'));
