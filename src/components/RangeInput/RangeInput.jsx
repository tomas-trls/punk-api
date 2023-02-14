import React from "react";
import "./RangeInput.scss";

const RangeInput = ({ labels, value, min, max, handleInput }) => {
  return (
    <>
      {labels.map((label, index) => {
        return (
          <div className="range" key={index + 1}>
            <label htmlFor="range" className="range__label">
              {label}: {value}
            </label>
            <input
              type="range"
              name="range"
              id="range"
              className="range__input"
              min={min}
              max={max}
              value={value}
              onChange={handleInput}
            />
          </div>
        );
      })}
    </>
  );
};

export default RangeInput;
