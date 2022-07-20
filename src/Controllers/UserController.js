const User = require('../Models/User');

module.exports = {
  async createUser(req, res) {
    const { username, password, name, description, site } = req.body;
    try {

      const userAlreadyExists = await User.findOne({
        username
      })

      if(userAlreadyExists) {
        return res.status(400).send({ message: "User Already exists. Try another one!" })
      }

      const createdUser = await User.create({ username, password, name, description, site })
      console.log('ok');
      return res.status(200).send({
        message: 'User created succesfully',
        data: createdUser
      })
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async listUsers(req, res) {
    try {
      const allUsers = await User.find();
      return res.status(200).send({
        message: "All users Found",
        data: allUsers
      })
    } catch (err) {
      return res.status(400).send(err)
    }
  }

}
