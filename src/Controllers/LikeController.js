const User = require('../Models/User');
const Post = require('../Models/Post');

module.exports = {
  async likePost(req, res) {

    const { id } = req.params;
    const { user_id } = req.headers;

    try {
      const likePost = await Post.findById(id);


      if (!likePost.likes.includes(user_id)) {
        likePost.likes.push(user_id)
        await likePost.save()
      } else {
        likePost.likes.pull(user_id)
        await likePost.save()
      }

      return res.status(200).send({
        message: "Post found!!",
        post: likePost
      });
    } catch (err) {
      return res.status(400).send({
        message: "Post not Found!",
        err
      });
    }
  },

  async deslikePost(req, res) {
    const { id } = req.params;
    const { user_id } = req.headers;
    try {
      const post = Post.findById(id);

    } catch (err) {
      return res.status(400).send({
        message: "Post not Found",
        err
      })
    }
  }
};