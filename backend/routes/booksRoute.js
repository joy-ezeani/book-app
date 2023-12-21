import express from "express";
import { Book } from "../models.js";

const router = express.Router();

// creating new book
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.viewLink ||
      !req.body.img ||
      !req.body.title ||
      !req.body.author ||
      !req.body.year
    ) {
      return res.status(400).send({
        message:
          "Input all required field:img, view-link, title, author and year",
      });
    } else {
      const newBook = {
        viewLink: req.body.viewLink,
        img: req.body.img,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
      };
      const book = await Book.create(newBook);

      return res.status(201).send(book);
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//fiding all books

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//finding book by id
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const book = await Book.findById({ _id });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//updating a book
router.put("/:_id", async (req, res) => {
  try {
    if (
      !req.body.viewLink ||
      !req.body.img ||
      !req.body.title ||
      !req.body.author ||
      !req.body.year
    ) {
      return res
        .status(400)
        .send({ message: "Input all required field: title, author and year" });
    } else {
      const { _id } = req.params;
      const result = await Book.findByIdAndUpdate(_id, req.body);
      if (!result) {
        return res.status(404).send({ message: "Book not found" });
      } else {
        return res.status(200).json("Updated Successfully!");
      }
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//deleting a book
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Book.findByIdAndDelete(_id);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    } else {
      return res.status(200).json("Deleted Successfully!");
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
