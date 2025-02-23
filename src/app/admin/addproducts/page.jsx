"use client";
import Dropzone from "./components/dropzone"; // Adjust path as needed
import { useState } from "react";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!productName || !description || !price || !category || images.length === 0) {
      alert("Please fill all fields and upload at least one image.");
      return;
    }

    const newProduct = {
      productName,
      description,
      price,
      category,
      images,
    };

    setProducts([...products, newProduct]);

    // Reset form fields
    setProductName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImages([]);
  };

  const handleFinalSubmit = () => {
    console.log("Final Products Submitted:", products);
    alert("Products submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Card Wrapper */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xxl">
        <h2 className="text-xl font-semibold mb-4">Add Cake Product</h2>

        <form onSubmit={handleAddProduct} className="space-y-1">
          <div>
            <label className="block font-medium">Cake Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border rounded w-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded w-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded w-full px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded w-full px-3 py-2"
              required
            >
              <option value="">Select Category</option>
              <option value="chocolate">Chocolate</option>
              <option value="vanilla">Vanilla</option>
              <option value="fruit">Fruit Cake</option>
            </select>
          </div>

          {/* Dropzone Component */}
          <Dropzone images={images} setImages={setImages} />

          {/* Add Product Button */}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
            Add Product
          </button>
        </form>
      </div>

      {/* Products Table Card */}
      {products.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-3xl">
          <h2 className="text-lg font-semibold">Added Products</h2>
          <table className="w-full border mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Cake Name</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-t text-center">
                  <td className="border px-4 py-2">{product.productName}</td>
                  <td className="border px-4 py-2">{product.description}</td>
                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2">
                    {product.images.length > 0 && (
                      <img
                        src={URL.createObjectURL(product.images[0])}
                        alt="Cake"
                        className="w-16 h-16 object-cover mx-auto"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Final Submit Button */}
          <button
            onClick={handleFinalSubmit}
            className="bg-blue-500 text-white px-6 py-2 mt-4 rounded w-full"
          >
            Submit All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
