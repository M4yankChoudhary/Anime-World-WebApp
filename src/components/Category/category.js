import { useState, useEffect } from "react";
import "./category.css";
import React from "react";
function Category() {
  // declare routes here
  const [count, setCount] = useState();
  useEffect(() => {
    // const id = setInterval(() => {
    //   setCount((count) => count + 1); // This effect depends on the `count` state
    // }, 1000);
    // return () => clearInterval(id);
  }, []);
  
  return (
    <div className="CategoryConatiner">
      <h1>Hello from category</h1>
    </div>
  );
}

export default Category;
