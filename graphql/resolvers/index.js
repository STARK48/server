const postResolvers = require('./postResolvers');
const userResolvers =require('./userResolvers');
const commentResolvers =require('./commentResolvers')

module.exports ={ 
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
      },
    Query:{
        ...postResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation
    }
}