import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { userSchema } from "../schemas/UserSchema";

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);