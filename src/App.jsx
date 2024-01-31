import React from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './css/App.css';

const operators = /[+*/-]/;
const beginsWithOperators = /^[+/*]/;
const decimalOperator = /[.]/;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '0',
      expression: '',
      isEvaluated: false,
      resultValue: '',
    };
  }

  reset = () => {
    this.setState({
      inputValue: '0',
      expression: '',
      isEvaluated: false,
      resultValue: '',
    });
  };

  setLimit() {
    alert("You've reached the maximum acceptable length of the number!!!");
  }

  setEvaluation = () => {
    const { isEvaluated, expression } = this.state;
    if (!isEvaluated) {
      let expForEval = /[+*/-]$/.test(expression)
        ? expression.slice(0, -1)
        : expression;

      let result = Math.round(1000000000000 * eval(expForEval)) / 1000000000000;
      this.setState({
        inputValue: result.toString(),
        expression: `${expression} = ${result.toString()}`,
        isEvaluated: true,
        resultValue: result.toString(),
      });
    }
  };

  setNumbers = (e) => {
    const value = e.target.value;
    const { inputValue, expression, isEvaluated } = this.state;
    if (inputValue.length > 21) {
      this.setLimit();
    } else if (isEvaluated) {
      this.setState({
        isEvaluated: false,
        expression: value,
        inputValue: value,
        resultValue: '',
      });
    } else if (inputValue === '0' || inputValue === '-') {
      this.setState({
        inputValue: value,
        expression: inputValue === '-' ? expression + value : value,
      });
    } else {
      this.setState({
        inputValue: operators.test(inputValue) ? value : inputValue + value,
        expression:
          beginsWithOperators.test(expression) && expression.length === 1
            ? value
            : expression + value,
      });
    }
  };

  setOperators = (e) => {
    let value = e.target.value;
    const { inputValue, expression, isEvaluated, resultValue } = this.state;
    if (inputValue.length >= 21) {
      this.setLimit();
    } else if (isEvaluated) {
      this.setState({
        isEvaluated: false,
        expression: resultValue + value,
        inputValue: value,
      });
    } else if (/\d[*+/-]-{1}/.test(expression)) {
      this.setState({
        inputValue: value,
        expression: expression.slice(0, -2) + value,
      });
    } else if (/\d[*+/-]$/.test(expression)) {
      this.setState({
        inputValue: value,
        expression:
          value === '-' ? expression + value : expression.slice(0, -1) + value,
      });
    } else {
      this.setState({
        inputValue: value,
        expression: /\d$/.test(expression) ? expression + value : value,
      });
    }
  };

  setDecimal = (e) => {
    let value = e.target.value;
    const { inputValue, expression, isEvaluated } = this.state;
    if (inputValue.length >= 21) {
      this.setLimit();
    } else if (isEvaluated) {
      this.setState({
        isEvaluated: false,
        expression: '0.',
        inputValue: '0.',
        resultValue: '',
      });
    } else if (inputValue === '0') {
      this.setState({
        inputValue: inputValue + value,
        expression: expression.length > 1 ? expression + value : '0.',
      });
    } else if (decimalOperator.test(inputValue)) {
      this.setState({
        inputValue: inputValue,
        expression: expression,
      });
    } else if (beginsWithOperators.test(expression)) {
      this.setState({
        inputValue: '0.',
        expression: '0.',
      });
    } else {
      this.setState({
        inputValue: inputValue + value,
        expression: expression + value,
      });
    }
  };

  render() {
    return (
      <div id="calculator">
        <Display
          inputValue={this.state.inputValue}
          expression={this.state.expression}
        />
        <Buttons
          resetValue={this.reset}
          setNumbers={this.setNumbers}
          setOperators={this.setOperators}
          setDecimal={this.setDecimal}
          setEvaluation={this.setEvaluation}
        />
      </div>
    );
  }
}

export default App;
