export default function AddDeliveryPartner() {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6  max-w-2xxl">
        <h2 className="text-xl font-bold mb-4 text-center">Add Delivery Partner</h2>
        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 text-sm">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Username</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Enter username" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Phone Number</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Enter phone number" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded text-sm" placeholder="Enter password" />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded text-sm">Add Partner</button>
          </div>
        </form>
      </div>
    );
  }
  