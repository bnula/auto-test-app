import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Selenium Practice
          </Link>
        </div>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0">
          <Link href="/table" className="block md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-300" data-testid="nav-table">
            Table
          </Link>
          <Link href="/calculator" className="block md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-300" data-testid="nav-calculator">
            Calculator
          </Link>
          <Link href="/form" className="block md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-300" data-testid="nav-form">
            Form
          </Link>
        </div>
      </div>
    </nav>
  )
}