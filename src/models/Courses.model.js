import { Schema, model } from "mongoose";

const coursesSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    collegues: [{ type: Schema.Types.ObjectId, ref: "collegues" }],
    subjects: [{ type: Schema.Types.ObjectId, ref: "subjects" }],
    students: [{ type: Schema.Types.ObjectId, ref: "users" }],
    teachers: [{ type: Schema.Types.ObjectId, ref: "users" }],
    status: { type: String, required: true, trim: true, default: "active" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Courses", coursesSchema);
