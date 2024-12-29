import React, { useState } from 'react';

const CreateService = () => {
  const [formData, setFormData] = useState({
    serviceImage: null,
    description: '',
    category: '',
    price: '',
  });

  const categories = ['Catering', 'Photography', 'Decoration', 'Music', 'Venue'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, serviceImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Service Form Submitted:', formData);
    // You can implement the logic to upload this data to your backend.
  };

  return (
    <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create Your Service</h1>
          <p className="text-gray-600 mt-2">
            Provide details about the service you want to offer.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Image */}
          <div>
            <label htmlFor="serviceImage" className="block text-gray-700 font-medium mb-1">
              Service Image
            </label>
            <input
              type="file"
              name="serviceImage"
              id="serviceImage"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter a description of your service"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter the price in USD"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition"
          >
            Create Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
