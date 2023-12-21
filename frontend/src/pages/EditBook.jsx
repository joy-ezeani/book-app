import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [img, setImg] = useState("");
  const [viewLink, setViewLink] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${_id}`)
      .then((res) => {
        setImg(res.data.img);
        setViewLink(res.data.viewLink);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setYear(res.data.year);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error occured. Please check console", {
          variant: "error",
        });
        console.log(err);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      img,
      viewLink,
      title,
      author,
      year,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${_id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Succesfully", { variant: "success" });
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
      <h1>Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="form-container">
        <div className="form-box">
          <label className="label">View Link</label>
          <input
            type="text"
            value={viewLink}
            onChange={(e) => setViewLink(e.target.value)}
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
        <button className="create-button" onClick={handleEditBook}>
          Edit Book
        </button>
      </div>
    </div>
  );
};

export default EditBook;
