import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <BallTriangle
      height={70}
      width={70}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
};

export default Spinner;
