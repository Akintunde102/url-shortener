import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    protocol: {
      type: String,
      required: true,
    },
    creationTime: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Url = mongoose.model("Urls", urlSchema);
export const User = mongoose.model("Users", userSchema);

