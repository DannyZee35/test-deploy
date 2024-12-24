 'use client';

 export const columns = [
    { header: "Batch ID", key: "id" },
    { header: "Supplier", key: "name" },
    { header: "Inspected By", key: "email" },
    { header: "Total Qty", key: "email" },

    { header: "Type", key: "email" },
    { header: "Passed", key: "email" },
    

    {
      header: "Actions",
      accessor: (row) => (
        <button
          className="text-blue-500 hover:underline"
          onClick={() => alert(`Viewing ${row.name}`)}
        >
          View
        </button>
      ),
    },
  ];

  export const data = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];