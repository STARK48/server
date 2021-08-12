const postResolvers = require('./postResolvers');
const userResolvers =require('./userResolvers');
const commentResolvers =require('./commentResolvers')

module.exports ={
    Query:{
        ...postResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation
    }
}