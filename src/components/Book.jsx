import React, { useState } from "react";
import isbn from "node-isbn";
import { Icon } from "semantic-ui-react";

import BookView from "./BookView";

function Book() {
  const [isbnNo, setBarcode] = useState("");
  const [error, setError] = useState("");
  const [book, setbookDetails] = useState(null);

  const handleChangeBarcode = ({ target }) => {
    setBarcode(target.value);
    setError(null);
    setbookDetails(null);
  };

  const fetchBook = async () => {
    try {
      const stringIsbn = isbnNo.toString();
      if (stringIsbn.length !== 13) {
        setError("ISBN no must be 13 digit");
        return;
      }

      const book = await isbn.resolve(isbnNo);
      setbookDetails(book);
    } catch (error) {
      setError("Book not fond");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <Icon name="book" size="massive" className="text-gray-700 w-64" />
      <div className="my-6 flex flex-col items-center">
        <div className="ui action left icon input">
          <input
            type="number"
            placeholder="Search..."
            value={isbnNo}
            onChange={(e) => handleChangeBarcode(e)}
          />
          <i aria-hidden="true" className="barcode icon"></i>
          <button className="ui button" onClick={fetchBook}>
            Search
          </button>
        </div>
        {error && <div className="ui pointing label">{error}</div>}
      </div>
      {book && <BookView book={book} />}
    </div>
  );
}

export default Book;
