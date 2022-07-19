const Post = require('../Models/Post');

module.exports = {
  async createPost(req, res)  {
    const { picture, description } = req.body;

    const { user } = req.headers;

    try {
      const newPost = await Post.create({
        picture,
        description,
        user
      });
      
      return res.status(200).send({
        message: "Post created successfully!!",
        data: newPost
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async listAllPosts(req, res) {
    try {
      const allPosts = await Post.find().populate('user');

      return res.status(200).send({
        message: "All Posts",
        data: allPosts
      })

    } catch (err) {
      res.status(400).send(err)
    }

  },

  async editPost(req, res) {
    const { id } = req.params;
    const { description } = req.body;
    const { user_id } = req.headers;

    try {

      const postEdit = await Post.findByIdAndUpdate(id, { description }, {new: true}).populate('user').where({ user: user_id });

      if (!postEdit) {
        return res.status(400).send({
          message: "Not allowed to execute this action!"
        })
      }

      return res.status(200).send({
        message: "Successfully Update this post!",
        data: postEdit
      })

    } catch (err) {
      return res.status(400).send(err)
    }
  },

  async deletePost(req, res) {
    const { id } = req.params;
    const { user_id } = req.headers;

    try {
      const deletedPost = await Post.findByIdAndDelete(id).populate('user').where({ user: user_id });

      if (!deletedPost) {
        return res.status(400).send({
          message: "Not Allowed to execute this action!!"
        })
      }

      console.log(deletedPost.user.username)

      return res.status(200).send({
        message: "Post deletado!!",
        data: deletedPost
      })
    } catch (err) {
      return res.status(400).send(err)
    }
  }

}