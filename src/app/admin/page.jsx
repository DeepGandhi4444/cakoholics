// Staff Management Page
 export default function Page() {
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Manage Staff</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">Add Delivery Partner</button>
        <ul className="list-disc pl-6">
          <li>John Doe - Delivery Partner</li>
          <li>Jane Smith - Delivery Partner</li>
        </ul>
      </div>
    );
  }
  