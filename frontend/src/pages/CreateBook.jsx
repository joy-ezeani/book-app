import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [viewLink, setviewLink] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      viewLink,
      img,
      title,
      author,
      year,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Succesfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error occured. Please check console", {
          variant: "error",
        });
        console.log(err);
      });
  };

  return (
    <div className="create-book">
      <BackButton />
      <h1>Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="form-container">
        <div className="form-box">
          <label className="label">View Link</label>
          <input
            type="text"
            value={viewLink}
            onChange={(e) => setviewLink(e.target.value)}
            className="form-input"
          />
          <label className="label">Img Link</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="form-input"
          />
          <label className="label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
          <label className="label">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-input"
          />
          <label className="label">Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="form-input"
          />
        </div>
        <button className="create-button" onClick={handleSaveBook}>
          Create Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
