import Link from "next/link"; // Import Link for Next.js navigation

export default function Home() {
  return (
    // Added p-6 for padding around the content
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6" data-testid="page-header">
        Selenium Testing Practice App
      </h1>
      <p className="mb-4 text-gray-200"> {/* Added text color */}
        This application is designed to help you practice automated testing with
        Selenium. Explore the different sections below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1: Table */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"> {/* Added hover effect */}
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Data Table</h2>
          <p className="text-gray-600 mb-4">
            Practice with table elements, filtering, and sorting data.
          </p>
          {/* Use Link component for internal navigation */}
          <Link
            href="/table"
            className="text-blue-500 hover:text-blue-700 font-medium" // Enhanced link styling
          >
            Go to Table Page →
          </Link>
        </div>
        {/* Card 2: Calculator */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"> {/* Added hover effect */}
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Calculator</h2>
          <p className="text-gray-600 mb-4">
            Practice with button clicks, input handling, and result
            verification.
          </p>
          {/* Use Link component for internal navigation */}
          <Link
            href="/calculator"
            className="text-blue-500 hover:text-blue-700 font-medium" // Enhanced link styling
          >
            Go to Calculator →
          </Link>
        </div>
        {/* Card 3: Form */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"> {/* Added hover effect */}
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Form Validation</h2>
          <p className="text-gray-600 mb-4">
            Practice with form inputs, validation logic, and submission
            handling.
          </p>
          {/* Use Link component for internal navigation */}
          <Link
            href="/form"
            className="text-blue-500 hover:text-blue-700 font-medium" // Enhanced link styling
          >
            Go to Form →
          </Link>
        </div>
      </div>
    </div>
  );
}
