import React, { useState } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons'; // Import Ant Design icons

const MyServices = () => {
  const [ratings] = useState({
    1: 4,
    2: 5,
    3: 3,
  });

  const services = [
    {
      id: 1,
      name: 'Wedding Photography',
      category: 'Photography',
      status: 'Offering',
      route: '/service-details/1',
      image: 'https://via.placeholder.com/150/92c952', // Dummy image from JSONPlaceholder
    },
    {
      id: 2,
      name: 'Catering Services',
      category: 'Catering',
      status: 'Offering',
      route: '/service-details/2',
      image: 'https://via.placeholder.com/150/771796', // Dummy image from JSONPlaceholder
    },
    {
      id: 3,
      name: 'Event Decorations',
      category: 'Decoration',
      status: 'Discontinued',
      route: '/service-details/3',
      image: 'https://via.placeholder.com/150/24f355', // Dummy image from JSONPlaceholder
    },
  ];

  const getStatusBadge = (status) => {
    const badgeColor = status === 'Offering' ? 'bg-green-500' : 'bg-gray-500';
    const badgeText = status;
    return (
      <span
        className={`${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full absolute top-4 right-4`}
      >
        {badgeText}
      </span>
    );
  };

  return (
    <div className="p-5 bg-[#fdfcf9] min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">My Services</h1>
        <p className="text-lg mt-2">Review the ratings and statuses of your services.</p>
      </header>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-5 text-center flex flex-col justify-between relative border border-gray-200 hover:shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            {getStatusBadge(service.status)}

            {/* Service Image */}
            <img
              src={service.image}
              alt={`${service.name} thumbnail`}
              className="w-full h-32 object-cover rounded-md mb-4"
            />

            <div>
              <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
              <p className="text-gray-600 mt-2">
                <strong>Category:</strong> {service.category}
              </p>
            </div>

            {/* Rating Section */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="cursor-pointer">
                  {ratings[service.id] >= star ? (
                    <StarFilled style={{ color: '#FFD700', fontSize: '1.5rem' }} />
                  ) : (
                    <StarOutlined style={{ color: '#FFD700', fontSize: '1.5rem' }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
