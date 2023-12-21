import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${_id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Succesfully", { variant: "success" });
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
    <div className="delete-book">
      <BackButton />
      <h1>Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="delete-book-container">
        <h3 className="delete-question">
          Are you sure you want to delete this book?
        </h3>
        <button onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  );
};

export default DeleteBook;
