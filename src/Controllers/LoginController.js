const User = require('../Models/User');

module.exports = {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const userAlreadyExists = await User.findOne({ username })
      
      if (!userAlreadyExists) {
        return res.status(400).send({
          message: "User does not match!!"
        })
      }

      const validPassword = await User.findOne({ password }).where({ username })

      if (!validPassword) {
        return res.status(400).send({ message: "Invalid Password"})
      }

      const loggedIn = validPassword;

      return res.status(200).send({
        message: "Tudo certo!",
        data: loggedIn
      })

    } catch (err) {
      return res.status(400).send(err);
    }
  }
}