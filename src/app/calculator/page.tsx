"use client"

import { useState } from 'react';
import Calculator from './components/Calculator';

export default function CalculatorPage() {
  const [result, setResult] = useState<string>('0');
  const [expression, setExpression] = useState<string>('');

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6" id="page-header">Simple Calculator</h1>
      <Calculator 
        result={result}
        expression={expression}
        setResult={setResult}
        setExpression={setExpression}
      />
    </div>
  )
}