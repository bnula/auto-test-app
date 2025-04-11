export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6" data-testid="page-header">Selenium Testing Practice App</h1>
      <p className="mb-4">
        This application is designed to help you practice automated testing with Selenium.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Data Table</h2>
          <p className="text-gray-600 mb-4">Practice with table elements, filtering, and sorting.</p>
          <a href="/table" className="text-blue-500 hover:underline">Go to Table Page →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Calculator</h2>
          <p className="text-gray-600 mb-4">Practice with button clicks and result verification.</p>
          <a href="/calculator" className="text-blue-500 hover:underline">Go to Calculator →</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Form Validation</h2>
          <p className="text-gray-600 mb-4">Practice with form inputs, validation, and submission.</p>
          <a href="/form" className="text-blue-500 hover:underline">Go to Form →</a>
        </div>
      </div>
    </div>
  )
}