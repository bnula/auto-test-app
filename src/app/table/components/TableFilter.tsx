import { FC } from 'react';

interface TableFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterRole: string;
  setFilterRole: (role: string) => void;
}

const TableFilter: FC<TableFilterProps> = ({ 
    searchTerm, 
    setSearchTerm, 
    filterRole, 
    setFilterRole 
  }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search by Name or Email
            </label>
            <input
              type="text"
              id="search"
              data-testid="search-input"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border text-gray-700"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-40">
            <label htmlFor="role-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Role
            </label>
            <select
              id="role-filter"
              data-testid="role-filter"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border text-gray-700"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              type="button"
              data-testid="clear-filters"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
              onClick={() => {
                setSearchTerm('');
                setFilterRole('');
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TableFilter;