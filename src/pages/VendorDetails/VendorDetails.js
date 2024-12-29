import React from "react";
import { Link } from "react-router-dom";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const VendorDetails = () => {
  const vendor = {
    id: 101,
    name: "John's Photography",
    services: [
      {
        id: 1,
        name: "Wedding Photography",
        category: "Photography",
        rating: 4.5,
        image: "https://via.placeholder.com/150/92c952",
      },
      {
        id: 2,
        name: "Event Photography",
        category: "Photography",
        rating: 4,
        image: "https://via.placeholder.com/150/771796",
      },
    ],
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <StarFilled key={`full-${i}`} style={{ color: "#FFD700", fontSize: "1rem" }} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOutlined key={`empty-${i}`} style={{ color: "#E0E0E0", fontSize: "1rem" }} />
        ))}
      </>
    );
  };

  return (
    <div className="p-5 bg-[#fdfcf9] min-h-screen">
      <header className="bg-color-dark text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">{vendor.name}</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vendor.services.map((service) => (
          <Link
            to={`/service-details/${service.id}`}
            key={service.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800">{service.name}</h2>
            <p className="text-sm text-gray-600">{service.category}</p>
            <div className="mt-2">{renderStars(service.rating)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VendorDetails;
