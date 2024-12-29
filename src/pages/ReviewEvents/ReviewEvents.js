import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarOutlined, StarFilled } from '@ant-design/icons'; // Import Ant Design icons

const ReviewEvents = () => {
  const [ratings, setRatings] = useState({});

  const events = [
    {
      id: 1,
      date: '2024-01-15',
      venue: 'Grand Ballroom, City Center',
      type: 'Wedding',
      route: '/event-details/1',
    },
    {
      id: 2,
      date: '2024-02-20',
      venue: 'Sunset Garden, Riverside',
      type: 'Birthday',
      route: '/event-details/2',
    },
    {
      id: 3,
      date: '2023-12-10',
      venue: 'Royal Hall, Downtown',
      type: 'Reception',
      route: '/event-details/3',
    },
  ];

  const handleRating = (eventId, rating) => {
    setRatings({ ...ratings, [eventId]: rating });
  };

  const getEventStatus = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    return eventDate >= today ? 'Upcoming' : 'Done';
  };

  const getStatusBadge = (status) => {
    const badgeColor = status === 'Upcoming' ? 'bg-green-500' : 'bg-gray-500';
    const badgeText = status === 'Upcoming' ? 'Upcoming' : 'Done';
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
      <header className="bg-color-dark text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">My Events</h1>
        <p className="text-lg mt-2">Review and rate your past events.</p>
      </header>

      {/* Events List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => {
          const status = getEventStatus(event.date);
          return (
            <Link
              key={event.id}
              to={event.route}
              className="bg-white rounded-lg shadow-md p-5 text-center min-h-[200px] flex flex-col justify-between relative border border-gray-200 hover:shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              {getStatusBadge(status)}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{event.type}</h2>
                <p className="text-gray-600 mt-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  <strong>Venue:</strong> {event.venue}
                </p>
              </div>

              {/* Rating Section */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent triggering the link on click
                      handleRating(event.id, star);
                    }}
                    className="cursor-pointer"
                  >
                    {ratings[event.id] >= star ? (
                      <StarFilled style={{ color: '#FFD700', fontSize: '1.5rem' }} />
                    ) : (
                      <StarOutlined style={{ color: '#FFD700', fontSize: '1.5rem' }} />
                    )}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewEvents;
