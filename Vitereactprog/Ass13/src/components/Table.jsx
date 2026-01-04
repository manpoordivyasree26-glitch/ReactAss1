function Table() {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-gray-100 hover:bg-gray-200">
          <td className="border p-2">A</td>
          <td className="border p-2">Dev</td>
          <td className="border p-2">Active</td>
        </tr>
        <tr className="even:bg-gray-100 hover:bg-gray-200">
          <td className="border p-2">B</td>
          <td className="border p-2">Design</td>
          <td className="border p-2">Inactive</td>
        </tr>
        <tr className="even:bg-gray-100 hover:bg-gray-200">
          <td className="border p-2">C</td>
          <td className="border p-2">Test</td>
          <td className="border p-2">Active</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
