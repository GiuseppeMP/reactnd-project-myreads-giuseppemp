import React from "react";
import ReactDOM from "react-dom";
import BookSearch from "BookSearch";

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookSearch />, div);
});