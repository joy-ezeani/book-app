import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BooksCard = ({ books }) => {
  return (
    <div className="card-container">
      {books.map((book, index) => (
        <div className="item-map" key={book._id}>
          <img src={book.img} className="item-img" />
          <h2 className="item-year">{book.year}</h2>
          <h2 className="item-id">Id:{book._id}</h2>
          <div className="item-box">
            <h2 className="item-title">
              <span className="item-id">Title:</span>
              {book.title}
            </h2>
          </div>
          <div className="item-box">
            <h2 className="item-title">
              <span className="item-id">Author:</span>
              {book.author}
            </h2>
          </div>
          <div className="icon-links">
            <Link to={`/books/info/${book._id}`}>
              <BsInfoCircle className=" icons" style={{ color: "blue" }} />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className=" icons" style={{ color: "brown" }} />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className=" icons" style={{ color: "red" }} />
            </Link>
            <Link to={book.viewLink}>
              <FaEye className=" icons" style={{ color: "green" }} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
