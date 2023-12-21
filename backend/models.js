import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    viewLink: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
