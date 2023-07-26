const userController = require("../controllers/user");
const followController = require("../controllers/follow");
const publicationController = require("../controllers/publication");
const commentController = require("../controllers/comment");
const LikeControoler = require("../controllers/like");
const { GraphQLUpload } = require("graphql-upload");

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    // User
    getUser: (_, { id, username }) => userController.getUser(id, username),
    search: (_, { search }) => userController.search(search),

    //Follow
    isFollow: (_, { username }, ctx) =>
      followController.isFollow(username, ctx),
    getFollowers: (_, { username }) => followController.getFollowers(username),
    getFolloweds: (_, { username }) => followController.getFolloweds(username),
    getNotFolloweds: (_, {}, ctx) => followController.getNotFolloweds(ctx),

    // publication
    getPublications: (_, { username }) =>
      publicationController.getPublications(username),
    getPublicationsFlloweds: (_, {}, ctx) =>
      publicationController.getPublicationsFlloweds(ctx),

    // Comment
    getComments: (_, { idPublication }) =>
      commentController.getComments(idPublication),

    // Like
    isLike: (_, { idPublication }, ctx) =>
      LikeControoler.isLike(idPublication, ctx),
    countLike: (_, { idPublication }) =>
      LikeControoler.countLike(idPublication),
  },
  Mutation: {
    // User
    register: (_, { input }) => userController.register(input),
    login: (_, { input }) => userController.login(input),
    updateAvatar: (_, { file }, ctx) => userController.updateAvatar(file, ctx),
    deleteAvatar: (_, {}, ctx) => userController.deleteAvatar(ctx),
    updateUser: (_, { input }, ctx) => userController.updateUser(input, ctx),

    // Follow
    follow: (_, { username }, ctx) => followController.follow(username, ctx),
    unFollow: (_, { username }, ctx) =>
      followController.unFollow(username, ctx),

    // Publication
    publish: (_, { file }, ctx) => publicationController.publish(file, ctx),

    // Comment
    addcomment: (_, { input }, ctx) => commentController.addcomment(input, ctx),

    // Like
    addLike: (_, { idPublication }, ctx) =>
      LikeControoler.addLike(idPublication, ctx),
    deleteLike: (_, { idPublication }, ctx) =>
      LikeControoler.deleteLike(idPublication, ctx),
  },
};

module.exports = resolvers;
