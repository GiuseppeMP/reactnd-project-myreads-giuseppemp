import React from "react";
import ReactDOM from "react-dom";
import Search from "Bookshelf/Book/Search";

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Search livros={[]} estantes={[]} onChangeLivros={() => console.log("")} />,
    div
  );
});
