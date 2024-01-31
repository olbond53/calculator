import React from 'react';

const Buttons = ({
  resetValue,
  setNumbers,
  setOperators,
  setDecimal,
  setEvaluation,
}) => {
  return (
    <div id="btns">
      <button
        type="button"
        id="clear"
        value="AC"
        className="col-6-ac"
        onClick={resetValue}
      >
        AC
      </button>
      <button id="divide" value="/" onClick={setOperators}>
        /
      </button>
      <button id="multiply" value="*" onClick={setOperators}>
        *
      </button>
      <button id="seven" value="7" onClick={setNumbers}>
        7
      </button>
      <button id="eight" value="8" onClick={setNumbers}>
        8
      </button>
      <button id="nine" value="9" onClick={setNumbers}>
        9
      </button>
      <button id="subtract" value="-" onClick={setOperators}>
        -
      </button>
      <button id="four" value="4" onClick={setNumbers}>
        4
      </button>
      <button id="five" value="5" onClick={setNumbers}>
        5
      </button>
      <button id="six" value="6" onClick={setNumbers}>
        6
      </button>
      <button id="add" value="+" onClick={setOperators}>
        +
      </button>

      <button id="one" value="1" onClick={setNumbers}>
        1
      </button>
      <button id="two" value="2" onClick={setNumbers}>
        2
      </button>
      <button id="three" value="3" onClick={setNumbers}>
        3
      </button>
      <button
        id="equals"
        value="="
        className="row-6-equals"
        onClick={setEvaluation}
      >
        =
      </button>
      <button id="zero" value="0" className="col-6-zero" onClick={setNumbers}>
        0
      </button>
      <button id="decimal" value="." onClick={setDecimal}>
        .
      </button>
    </div>
  );
};

export default Buttons;
