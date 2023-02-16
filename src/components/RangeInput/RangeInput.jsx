import React from "react";
import "./RangeInput.scss";

const RangeInput = ({
  valueABV,
  valueYears,
  valuePh,
  handleRangeByABV,
  handleRangeByYears,
  handleRangeByPh,
}) => {
  return (
    <>
      <div className="range">
        <label htmlFor="range" className="range__label">
          ABV {">"} {valueABV}%
        </label>
        <input
          type="range"
          name="range"
          id="range"
          className="range__input"
          min={0}
          max={15}
          value={valueABV}
          onChange={handleRangeByABV}
        />
      </div>
      <div className="range">
        <label htmlFor="range" className="range__label">
          Years {"<"} {valueYears}
        </label>
        <input
          type="range"
          name="range"
          id="range"
          className="range__input"
          min={2008}
          max={2023}
          value={valueYears}
          onChange={handleRangeByYears}
        />
      </div>
      <div className="range">
        <label htmlFor="range" className="range__label">
          Acidity {"<"} {valuePh}%
        </label>
        <input
          type="range"
          name="range"
          id="range"
          className="range__input"
          min={4.0}
          max={5.0}
          step={0.1}
          value={valuePh}
          onChange={handleRangeByPh}
        />
      </div>
    </>
  );
};

export default RangeInput;
