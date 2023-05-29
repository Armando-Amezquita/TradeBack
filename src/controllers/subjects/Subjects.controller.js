import Subjects from "../../models/Subjects.model.js";
import Boom from "@hapi/boom";

class ClassSubjects {
  static async create(data) {
    let newUser = new Users({
      ...data,
      password: await Subjects.encryptPassword(data.password),
    });
    await newUser.save();

    return {
      status: 200,
      message: "Creado con exito",
      newUser,
    };
  }

  static async getAll(user) {
    const Subjects = await Subjects.find();
    return Subjects;
  }

  static async getById(id) {
    const userId = await Subjects.findById(id);
    userId.password = undefined;
    return userId;
  }

  static async getByToken(token) {
    let user = await Subjects.findOne({ token: token });
    if (!user) {
      throw Boom.notFound("Error");
    } else {
      return user;
    }
  }
}

export { ClassSubjects };
