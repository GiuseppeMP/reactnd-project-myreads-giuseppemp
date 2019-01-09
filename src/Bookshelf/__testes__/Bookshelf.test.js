import React from "react";
import ReactDOM from "react-dom";
import Bookshelf from "Bookshelf";

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Bookshelf
      valor="etc"
      nome="etc"
      livros={[]}
      onChangeLivros={() => console.log("")}
    />,
    div
  );
});