import React from "react";
import Search from "Bookshelf/Book/Search";
import PropTypes from "prop-types";

//Proxy Component para composição de Book/Search e Bookshelf/Book.
function BookSearch(props) {
  return <Search {...props} />;
}
// @param carregando

BookSearch.propTypes = { carregando: PropTypes.func };

export default BookSearch;
