import React, { useState } from "react";

const CheckDigit = () => {
  const [input, setInput] = useState("");
  const [isbnNo, setIsbnNo] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    setError(null);
    setIsbnNo(null);
  };

  const findCheckDight = () => {
    const stringIsbn = input.toString();
    if (stringIsbn.length !== 12) {
      setError("ISBN no must be 12 digit to calculate check digit");
      return;
    }

    let positionWeightage = 3;
    let isbn = input;
    let sum = 0;

    while (isbn > 0) {
      const digit = isbn % 10;
      sum += digit * positionWeightage;
      positionWeightage = positionWeightage === 3 ? 1 : 3;
      isbn = Math.floor(isbn / 10);
    }

    let lastDigit = 10 - (sum % 10);
    lastDigit = lastDigit === 10 ? 0 : lastDigit;

    setIsbnNo(input * 10 + lastDigit);
  };

  return (
    <div className="flex flex-col justify-center items-center w-9/12 mx-auto my-10">
      <h1 className="text-center text-3xl font-semibold text-gray-800 py-6">
        ISBN13 Check Digit
      </h1>
      <div className="ui action input w-2/4">
        <input
          type="number"
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button className="ui button" onClick={findCheckDight}>
          Find
        </button>
      </div>
      {error && <div className="ui pointing label">{error}</div>}
      {isbnNo && (
        <div className="py-4 text-lg">
          ISBN13:{" "}
          <span className="font-bold text-xl text-gray-700">{isbnNo}</span>
        </div>
      )}
    </div>
  );
};

export default CheckDigit;
