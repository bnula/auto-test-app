"use client";

import { useState } from "react";
import UserForm from "./components/UserForm"; // Assuming this component exists

export default function FormPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userData, setUserData] = useState<Record<string, string>>({});

  const handleFormSubmit = (data: Record<string, string>) => {
    setUserData(data);
    setFormSubmitted(true);
  };

  return (
    // Added p-6 for padding around the content
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6" data-testid="page-header">
        User Registration Form
      </h1>

      {formSubmitted ? (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
          data-testid="success-message"
        >
          <div className="flex">
            <div>
              <p className="font-bold">Form submitted successfully!</p>
              <p className="text-sm">The following data was submitted:</p>
              <ul className="mt-2 list-disc pl-5">
                {Object.entries(userData).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold">{key}: </span>
                    {value}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                data-testid="new-form-button"
              >
                Fill New Form
              </button>
            </div>
          </div>
        </div>
      ) : (
        <UserForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
