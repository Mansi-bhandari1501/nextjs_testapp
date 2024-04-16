import JWT from "jsonwebtoken";
import { userModel } from "../model/user.model.js";
import { comparePassword, hash_password } from "../helper/auth.helper.js";


const register = async (req) => {
  console.log("service data", req.body)
  try {
    const { name,email, password,role } = req.body;
    console.log(req.body.data)

    if (!name) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "name is required",
      });
    }

    if (!email) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "email is required",
      });
    }

    if (!password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "password is required",
      });
    }

    const existingUser = await userModel.findOne({ email:email });

    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "User Already exists",
      });
    }
    if (!role) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "role is required",
      });
    }

    const hashed_password = await hash_password(password);

    const user = await userModel.create({ name,email, password: hashed_password,role });

    return user ;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (payload) => {
  try {
    const { email, password } = payload.body;
    console.log("serviceeeeeeeeeeeeeeeeeeeee",email, password);
    if (!email || !password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Email or Password is missing",
      });
    }

    const user = await userModel.findOne({ email });
    // console.log(user);
    if (!user) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: `Email is not registered`,
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      throw Object.assign(new Error(), {
        name: "UNAUTHORIZED",
        message: `Password is not correct`,
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    
    return { user, token };
  } catch (error) {
    throw error;
  }
};



export const userService = {
  login,
  register,
};