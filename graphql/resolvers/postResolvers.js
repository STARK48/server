const Post =require('../../models/Post');
const checkAuth = require('../../util/check-auth');
const {AuthenticationError} =require('apollo-server')

module.exports = {
    Query:{
        async getPosts(){
            try {
                const posts = await Post.find().populate("postBy").populate('comments.postBy');
                console.log(posts);
                return posts;
            } catch (err) {
                throw  new Error(err);
            }
        }
    },
    Mutation:{
        async createPost(_,{body},context){
            const user = await checkAuth(context);
            //console.log(user);
            const newPost = new Post({
                body,
                postBy:user.id,                
                createdAt: new Date().toISOString()
            })
            const post = await newPost.save();
            const postNew = await Post.findById(post.id).populate("postBy").populate('comments.postedBy');
            console.log(post);
            console.log(postNew);
            return postNew;
            
        },

        async deletePost(_, { postId }, context) {
            const user = checkAuth(context);
        
            try {
              const post = await Post.findById(postId);
              console.log(user.id);
              console.log(post.postBy);
              if (user.id == post.postBy) {
                //await post.delete();
                return 'Post deleted successfully';
              } else {
                throw new AuthenticationError('Action not allowed');
              }
            } catch (err) {
              throw new Error(err);
            }
          },


          async likePost(_, { postId }, context) {
            const user = checkAuth(context);
        
            const post = await Post.findById(postId);
            if (post) {
              if (post.likes.find((like) => like.user == user.id)) {
                // Post already likes, unlike it
                post.likes = post.likes.filter((like) => like.user != user.id);
              } else {
                // Not liked, like post
                post.likes.push({
                  user:user.id,
                  createdAt: new Date().toISOString()
                });
              }
        
              await post.save();
              const postNew = await Post.findById(post.id).populate('likes.user');
              return postNew;
            } else throw new UserInputError('Post not found');
          }
    }
}