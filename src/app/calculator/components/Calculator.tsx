import { FC } from 'react';

interface CalculatorProps {
  result: string;
  expression: string;
  setResult: (value: string) => void;
  setExpression: (value: string) => void;
}

const Calculator: FC<CalculatorProps> = ({ result, expression, setResult, setExpression }) => {
  
  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      // Clear
      setResult('0');
      setExpression('');
    } else if (value === '=') {
      // Calculate
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
        setExpression(evalResult.toString());
      } catch (error) {
        console.log(error);
        setResult('Error');
      }
    } else if (value === 'backspace') {
      // Delete last character
      if (expression.length > 0) {
        const newExpression = expression.slice(0, -1);
        setExpression(newExpression);
        if (newExpression === '') {
          setResult('0');
        }
      }
    } else {
      // Add to expression
      const newExpression = expression === '0' ? value : expression + value;
      setExpression(newExpression);
      setResult(newExpression);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="bg-gray-100 p-4 rounded mb-4">
        <div className="text-gray-500 text-sm h-6 text-gray-700" data-testid="calculator-expression">
          {expression}
        </div>
        <div className="text-right text-2xl font-bold text-gray-700" data-testid="calculator-result">
          {result}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleButtonClick('C')}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded text-gray-700"
          data-testid="clear-button"
        >
          C
        </button>
        <button
          onClick={() => handleButtonClick('(')}
          className="bg-gray-300 hover:bg-gray-400 p-2 rounded text-gray-700"
          data-testid="left-paren"
        >
          (
        </button>
        <button
          onClick={() => handleButtonClick(')')}
          className="bg-gray-300 hover:bg-gray-400 p-2 rounded text-gray-700"
          data-testid="right-paren"
        >
          )
        </button>
        <button
          onClick={() => handleButtonClick('backspace')}
          className="bg-gray-300 hover:bg-gray-400 p-2 rounded text-gray-700"
          data-testid="backspace"
        >
          ⌫
        </button>
        
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`${
              btn === '=' 
                ? 'bg-blue-500 hover:bg-blue-600 text-white ' 
                : ['/', '*', '-', '+'].includes(btn)
                  ? 'bg-orange-400 hover:bg-orange-500 text-white '
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            } p-2 rounded`}
            data-testid={`button-${btn === '.' ? 'decimal' : btn}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;