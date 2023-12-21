import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BooksCard from "../components/BooksCard";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <div className="header">
        <h1>Books</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="header-icon" />
        </Link>
      </div>
      {loading ? <Spinner /> : <BooksCard books={books} />}
    </div>
  );
};

export default Home;
