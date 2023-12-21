import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${_id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="show-book">
      <BackButton />
      <h1>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="item-container">
            <span className="item-title"></span>
            <img src={book.img} />
          </div>
          <div className="item-container">
            <span className="item-title">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="item-container">
            <span className="item-title">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="item-container">
            <span className="item-title">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="item-container">
            <span className="item-title">Year:</span>
            <span>{book.year}</span>
          </div>
          <div className="item-container">
            <span className="item-title">Created Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="item-container">
            <span className="item-title">Last Updated:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
