import Users from "../../models/Users.model.js";
import Boom from "@hapi/boom";

class ClassUsers {
  static async create(data) {
    let newUser = new Users({
      ...data,
      password: await Users.encryptPassword(data.password),
    });
    await newUser.save();

    return {
      status: 200,
      message: "Creado con exito",
      newUser,
    };
  }

  static async getAll(user) {
    const users = await Users.find();
    return users;
  }

  static async getById(id) {
    const userId = await Users.findById(id);
    userId.password = undefined;
    return userId;
  }

  static async getByToken(token) {
    let user = await Users.findOne({ token: token });
    if (!user) {
      throw Boom.notFound("Error");
    } else {
      return user;
    }
  }
}

export { ClassUsers };
