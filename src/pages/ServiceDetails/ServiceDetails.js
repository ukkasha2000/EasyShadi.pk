import React, { useState } from 'react';
import { StarOutlined, StarFilled } from '@ant-design/icons'; // Import Ant Design icons

const ServiceDetails = () => {
  const serviceDetails = {
    id: 1,
    name: 'Wedding Photography',
    image: 'https://via.placeholder.com/600x400/92c952', // Dummy image
    category: 'Photography',
    rating: 4.5,
    customerComments: [
      {
        id: 1,
        name: 'John Doe',
        comment: 'The service was amazing and the photos turned out beautifully!',
        date: '2023-11-20',
        rating: 5,
      },
      {
        id: 2,
        name: 'Jane Smith',
        comment: 'Very professional and timely. Highly recommend!',
        date: '2023-12-01',
        rating: 4,
      },
      {
        id: 3,
        name: 'Sam Wilson',
        comment: 'Good service, but slightly delayed delivery.',
        date: '2023-12-05',
        rating: 3,
      },
    ],
    engagements: 12,
    quotation: '$2000',
    actualPaid: '$1800',
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <StarFilled key={`full-${i}`} style={{ color: '#FFD700', fontSize: '1.5rem' }} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOutlined key={`empty-${i}`} style={{ color: '#E0E0E0', fontSize: '1.5rem' }} />
        ))}
      </>
    );
  };

  return (
    <div className="p-5 bg-[#fdfcf9] min-h-screen">
      {/* Header */}
      <header className="bg-color-dark text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">{serviceDetails.name}</h1>
        <p className="text-lg mt-2">{serviceDetails.category}</p>
      </header>

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

          {/* Engagement and Payment Details */}
          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-gray-800 text-3xl">Engagements</h2>
              <p className="text-gray-600 text-4xl">{serviceDetails.engagements} times</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Quotation</h2>
              <p className="text-gray-600 text-4xl">{serviceDetails.quotation}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Actual Paid</h2>
              <p className="text-gray-600 text-4xl">{serviceDetails.actualPaid}</p>
            </div>
            <div className="flex items-center">
              {renderStars(serviceDetails.rating)}
              <span className="text-gray-600 ml-2">({serviceDetails.rating}/5)</span>
            </div>
          </div>
        </div>

        {/* Customer Comments */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Comments</h2>
          <div className="space-y-4">
            {serviceDetails.customerComments.map((comment) => (
              <div
                key={comment.id}
                className="border border-gray-300 rounded-lg p-4 bg-gray-50"
              >
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
    </div>
  );
};

export default ServiceDetails;
