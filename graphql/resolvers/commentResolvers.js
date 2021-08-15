const { AuthenticationError, UserInputError } = require('apollo-server');
const Post = require('../../models/Post');
const checkAuth =require('../../util/check-auth');


module.exports = {
    Mutation :{
        async createComment(_,{postId,body },context){
            const user = checkAuth(context);

            if (body.trim() === '') {
                throw new UserInputError('Empty comment', {
                  errors: {
                    body: 'Comment body must not empty'
                  }
                });
              }

            const post = await Post.findById(postId);

            if (post) {      
                console.log(post)  
                post.comments.unshift({
                body,                
                postBy:user.id,
                createdAt: new Date().toISOString()
                });
                await post.save();
                const postNew = await Post.findById(postId).populate("postBy").populate('comments.postBy');
                return postNew;
            } else throw new UserInputError('Post not found');

            
        },

        async deleteComment(_, { postId, commentId }, context) {
            const user = checkAuth(context);
            console.log(user.userName +'ity ilay bandy');
      
            const post = await Post.findById(postId);
      
            if (post) {
              const commentIndex = post.comments.findIndex((c) => c.id === commentId);
              console.log(commentIndex +'  ity ilay commentIndex');
              if (post.comments[commentIndex].userName === user.userName) {
                post.comments.splice(commentIndex, 1);
                await post.save();
                return post;
              } else {
                throw new AuthenticationError('Action not allowed');
              }
            } else {
              throw new UserInputError('Post not found');
            }
          }
    }
}