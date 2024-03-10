import React from "react";
import List from "./List";

const Body = () => {
  return (
    <div className={`w-full  p-3  bg-light`}>
      <div className="flex flex-wrap">
        <List />
      </div>
    </div>
  );
};

export default Body;
