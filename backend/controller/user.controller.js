
const {errorHandler} = require('../lib/utils.js')
const {userService} = require('../service/index.js');

exports.registerController = async (req, res) => {
  try {
    console.log(req.body)
    const response = await userService.register(req);
    console.log(response)

    return res.status(201).send({
      success: true,
      message: 'User Register Successfully',
      user: response.user
    });
  } catch (error) {
    errorHandler(res, error);
  }
}

// POST LOGIN
exports.loginController = async (req, res) => {
  try {
    console.log('user')

    const response = await userService.login(req);

    console.log('user', response.user)
    return res.status(200).send({
      success: true,
      message: "login successfully",
      user: response.user,
      token: response.token,
    });
  } catch (error) {
    console.log(error)
    errorHandler(res, error);
  }
}

// export default {
//   loginController,
//   registerController,

// }