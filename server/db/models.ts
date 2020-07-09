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

export const Url = mongoose.model("Urls", urlSchema);
