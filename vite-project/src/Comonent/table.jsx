function Table() {
  return <>
  <div className="p-4">
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">madadali</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">madadalimemon90@gmial.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {/* password would not normally be displayed */}
                ••••••••
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded">Delete</button>
              </td>
            </tr>
            
          </tbody>
        </table>
    </div>
  </div>
  </>;
}
export default Table;
