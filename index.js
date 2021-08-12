const {ApolloServer} = require('apollo-server');
const mongoose =require('mongoose');
const { MONGO } = require('./config');

const Post =  require('./models/Post');
const typeDefs =require('./graphql/typeDefs');
const resolvers =require('./graphql/resolvers/index')



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) => ({req})
})

mongoose.connect(MONGO,{useNewUrlParser: true, useUnifiedTopology: true}).then(res=>{
    console.log('Database connected')
})

server.listen({port:5000}).then(
    res =>{
        console.log(`Server Running at ${res.url}`)
    }
)
