const User = require('../Models/User');
const Post = require('../Models/Post');

module.exports = {
  async getProfile(req, res){
    const { id } = req.params;

    try {
      const userInfo = await User.findById(id);
      
      const userPosts = await Post.find({ user: id });
      
      return res.status(200).send({
        message: "User Found",
        data: userInfo,
        posts: userPosts
      })
    } catch (err) {
      return res.status(400).send({
        message: "User does not Exists"
      })
    }
  }
}