import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link to={destination} className=" back-button-link">
        <BiLeftArrowAlt className="back-button-arrow" />
      </Link>
    </div>
  );
};

export default BackButton;
