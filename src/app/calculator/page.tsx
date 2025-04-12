"use client";

import { useState } from "react";
import Calculator from "./components/Calculator"; // Assuming this component exists

export default function CalculatorPage() {
  const [result, setResult] = useState<string>("0");
  const [expression, setExpression] = useState<string>("");

  return (
    // Added p-6 for padding around the content
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6" data-testid="page-header">
        Simple Calculator
      </h1>
      <Calculator
        result={result}
        expression={expression}
        setResult={setResult}
        setExpression={setExpression}
      />
    </div>
  );
}
