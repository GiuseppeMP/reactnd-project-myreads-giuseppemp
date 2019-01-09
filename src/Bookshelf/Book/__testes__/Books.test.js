import React from "react";
import ReactDOM from "react-dom";
import Book from "Bookshelf/Book";
import Faker from "faker";

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Book
      nome="etc"
      capa={Faker.image.imageUrl()}
      titulo="titulo"
      autores="autores"
      livros={[]}
      estantes={[]}
      estante="none"
      onChangeLivros={() => console.log("")}
    />,
    div
  );
});
