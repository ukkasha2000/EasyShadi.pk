import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const ServiceForCustomer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    guests: "",
    query: "",
    date: "",
  });

  const serviceDetails = {
    id: 1,
    name: "Wedding Photography",
    image: "https://via.placeholder.com/600x400/92c952", // Dummy image
    category: "Photography",
    engagements: 12,
    rating: 4.5,
    vendor: {
      id: 101,
      name: "John's Photography",
    },
    customerComments: [
      {
        id: 1,
        name: "John Doe",
        comment: "The service was amazing and the photos turned out beautifully!",
        date: "2023-11-20",
        rating: 5,
      },
      {
        id: 2,
        name: "Jane Smith",
        comment: "Very professional and timely. Highly recommend!",
        date: "2023-12-01",
        rating: 4,
      },
    ],
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <StarFilled key={`full-${i}`} style={{ color: "#FFD700", fontSize: "1.5rem" }} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOutlined key={`empty-${i}`} style={{ color: "#E0E0E0", fontSize: "1.5rem" }} />
        ))}
      </>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", formData);
    setIsModalVisible(false); // Close the modal
  };

  return (
    <div className="p-5 bg-[#fdfcf9] min-h-screen">
      {/* Header */}
      <header className="bg-color-dark text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">{serviceDetails.name}</h1>
        <p className="text-lg mt-2">{serviceDetails.category}</p>
      </header>

      {/* Vendor Profile */}
      <div className="text-center mb-8">
        <Link
          to={`/vendor-details/${serviceDetails.vendor.id}`}
          className="text-2xl font-bold text-blue-500 hover:underline no-underline"
        >
          {serviceDetails.vendor.name}
        </Link>
      </div>

      {/* Service Details */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image and Ratings */}
          <div>
            <img
              src={serviceDetails.image}
              alt={serviceDetails.name}
              className="w-full rounded-md mb-4"
            />
          </div>

          {/* Engagement and Rating */}
          <div className="space-y-4">
          <div>
              <h2 className="font-bold text-gray-800 text-3xl">Engagements</h2>
              <p className="text-gray-600 text-4xl">{serviceDetails.engagements} times</p>
            </div>
            <div className="flex items-center">
              {renderStars(serviceDetails.rating)}
              <span className="text-gray-600 ml-2">({serviceDetails.rating}/5)</span>
            </div>
            <button
              onClick={() => setIsModalVisible(true)}
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Customer Comments */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Comments</h2>
          <div className="space-y-4">
            {serviceDetails.customerComments.map((comment) => (
              <div key={comment.id} className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-800">{comment.name}</h3>
                  <div className="flex">{renderStars(comment.rating)}</div>
                </div>
                <p className="text-gray-600 mt-2">{comment.comment}</p>
                <span className="text-gray-400 text-sm">{comment.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="Request a Quote"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-gray-700 font-medium mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.guests}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="query" className="block text-gray-700 font-medium mb-1">
              Ask a Question
            </label>
            <textarea
              id="query"
              name="query"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.query}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Submit Quote Request
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ServiceForCustomer;
