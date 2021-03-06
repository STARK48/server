const {gql} = require('apollo-server');

module.exports = gql`
type User{
    id:ID!,
    userName:String!,
    password:String!,
    email:String!,
    isOperator:Boolean!,
    token:String!,
    createdAt:String!,
}
input RegisterInput{
    userName:String!,
    password:String!,
    email:String!,
    confirmPassword:String!,
    isOperator:Boolean!,    
}
type Comment {
    id:ID!
    body:String!,    
    postBy:User!,
    createdAt:String!,
}
type Likes {
    id:ID!
    user:User!,   
    createdAt:String!
}
type Post{
    id:ID!,
    body:String!,
    postBy:User!,
    comments:[Comment]!, 
    likes:[Likes]!, 
    createdAt:String!,
    likeCount:Int!,
    commentCount:Int!
    
     
}
type Query {
    getPosts:[Post]
}
type Mutation {
    register(registerInput:RegisterInput):User!,
    login(email:String,password:String):User!,
    createPost(body:String):Post!,
    deletePost(postId:ID!):String!,
    createComment(postId:String!,body:String!):Post!,
    deleteComment(postId:String!,commentId:String!):Post!,
    likePost(postId:String!):Post!

}
`;