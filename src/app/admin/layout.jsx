
export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar */}
        <Topbar />
        
        {/* Page Content */}
        <main className="flex-1 p-1 overflow-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

// Sidebar Component
export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-2"><a href="add-delivery-partner" className="text-gray-700">Delivery Partner</a></li>
          <li className="mb-2"><a href="addproducts" className="text-gray-700">Add Cake</a></li>
          <li className="mb-2"><a href="products" className="text-gray-700">View Cakes</a></li>
          <li className="mb-2"><a href="configure-order" className="text-gray-700">Configure Order</a></li>
        </ul>
      </nav>
    </aside>
  );
}

// Topbar Component
export function Topbar() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Cake Shop Admin</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
    </header>
  );
}
