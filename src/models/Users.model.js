import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    // identification_number: { type: Number, required: true, unique: true },
    // age: { type: Number, required: true, unique: true },
    // email: { type: String, required: true, trim: true, unique: true },
    // phone: { type: Number },
    // password: { type: String, required: true, trim: true },
    // role: { type: String, required: true, trim: true, default: "user" },
    // token: { type: String, trim: true },
    // hasChildren: [{ type: Schema.Types.ObjectId, ref: "users" }],
    // collegue: [{ type: Schema.Types.ObjectId, ref: "collegues" }],
    // subjects: [{ type: Schema.Types.ObjectId, ref: "subjects" }],
    // course: { type: Schema.Types.ObjectId, ref: "courses" },
    // status: { type: String, required: true, trim: true, default: "active" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("Users", userSchema);
