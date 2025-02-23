"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

export default function CustomCakeForm({ selectedCake, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cakeSize: "",
    cakeFlavor: "",
    frosting: "",
    description: "",
    referencePhoto: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form or show success message
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Custom {selectedCake.name} Order</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="address">Delivery Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="cakeSize">Cake Size</Label>
              <select
                id="cakeSize"
                name="cakeSize"
                value={formData.cakeSize}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Size</option>
                <option value="6inch">6 inch</option>
                <option value="8inch">8 inch</option>
                <option value="10inch">10 inch</option>
                <option value="12inch">12 inch</option>
              </select>
            </div>
            <div>
              <Label htmlFor="cakeFlavor">Cake Flavor</Label>
              <select
                id="cakeFlavor"
                name="cakeFlavor"
                value={formData.cakeFlavor}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Flavor</option>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="redVelvet">Red Velvet</option>
                <option value="lemon">Lemon</option>
                <option value="marble">Marble</option>
              </select>
            </div>
            <div>
              <Label htmlFor="frosting">Frosting</Label>
              <select
                id="frosting"
                name="frosting"
                value={formData.frosting}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Frosting</option>
                <option value="buttercream">Buttercream</option>
                <option value="creamCheese">Cream Cheese</option>
                <option value="fondant">Fondant</option>
                <option value="ganache">Chocolate Ganache</option>
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="description">Cake Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your dream cake..."
              required
            />
          </div>
          <div>
            <Label htmlFor="referencePhoto">Reference Photo</Label>
            <Input id="referencePhoto" name="referencePhoto" type="file" onChange={handleChange} accept="image/*" />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            Submit Custom Cake Order
          </Button>
        </form>
      </div>
    </div>
  )
}

