"use client";
import { useState } from "react";

const ProductsPage = () => {
  // Static array of products
  const products = [
    {
      productName: "Chocolate Cake",
      description: "Rich and creamy chocolate delight.",
      price: 25,
      category: "Chocolate",
      image: "/images/chocolate-cake.jpg", // Replace with actual image path
    },
    {
      productName: "Vanilla Cake",
      description: "Classic vanilla cake with buttercream frosting.",
      price: 20,
      category: "Vanilla",
      image: "/images/vanilla-cake.jpg",
    },
    {
      productName: "Strawberry Cake",
      description: "Fresh strawberry cake with whipped cream.",
      price: 22,
      category: "Fruit",
      image: "/images/strawberry-cake.jpg",
    },
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center min-h-screen p-3 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xxl">
        <h2 className="text-xl font-semibold mb-4 text-center">Products List</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        {/* Product List */}
        <div className="space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center border rounded-lg p-4 shadow bg-white"
              >
                <img
                  src={product.image}
                  alt={product.productName}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.productName}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="font-bold text-blue-600">${product.price}</p>
                  <p className="text-sm text-gray-500">Category: {product.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
