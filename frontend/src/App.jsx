import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete/:_id" element={<DeleteBook />} />
      <Route path="/books/edit/:_id" element={<EditBook />} />
      <Route path="/books/info/:_id" element={<ShowBook />} />
    </Routes>
  );
};

export default App;
