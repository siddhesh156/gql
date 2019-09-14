const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin request
app.use(cors());

//connect to mlab
mongoose.connect('mongodb+srv://shaun:shaun1234@gpl-sid-2ew5y.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
schema,
graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for request on port 4000');
});