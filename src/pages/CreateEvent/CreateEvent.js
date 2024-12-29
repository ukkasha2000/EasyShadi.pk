import React, { useState } from 'react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventDate: '',
    eventCity: '',
    eventVenue: '',
    eventType: '',
    guestCount: '',
    eventSetting: '',
    budget: '',
  });

  const eventTypes = [
    'Birthday',
    'Wedding',
    'Engagement',
    'Mehendi',
    'Nikkah',
    'Aqeeqah',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Create Your Event</h1>
          <p className="text-gray-600 mt-2">
            Fill in the details below to plan your perfect event.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block text-gray-700 font-medium mb-1">
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              id="eventDate"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Event City */}
          <div>
            <label htmlFor="eventCity" className="block text-gray-700 font-medium mb-1">
              Event City
            </label>
            <input
              type="text"
              name="eventCity"
              id="eventCity"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter the city"
              value={formData.eventCity}
              onChange={handleChange}
              required
            />
          </div>

          {/* Event Venue */}
          <div>
            <label htmlFor="eventVenue" className="block text-gray-700 font-medium mb-1">
              Event Venue
            </label>
            <input
              type="text"
              name="eventVenue"
              id="eventVenue"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter the venue"
              value={formData.eventVenue}
              onChange={handleChange}
              required
            />
          </div>

          {/* Event Type */}
          <div>
            <label htmlFor="eventType" className="block text-gray-700 font-medium mb-1">
              Event Type
            </label>
            <select
              name="eventType"
              id="eventType"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Event Type
              </option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Guest Count */}
          <div>
            <label htmlFor="guestCount" className="block text-gray-700 font-medium mb-1">
              Guest Count
            </label>
            <input
              type="number"
              name="guestCount"
              id="guestCount"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter the number of guests"
              value={formData.guestCount}
              onChange={handleChange}
              required
            />
          </div>

          {/* Event Setting */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Event Setting</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-gray-600">
                <input
                  type="radio"
                  name="eventSetting"
                  value="Outdoor"
                  checked={formData.eventSetting === 'Outdoor'}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Outdoor
              </label>
              <label className="flex items-center text-gray-600">
                <input
                  type="radio"
                  name="eventSetting"
                  value="Indoor"
                  checked={formData.eventSetting === 'Indoor'}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Indoor
              </label>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-gray-700 font-medium mb-1">
              Budget
            </label>
            <input
              type="number"
              name="budget"
              id="budget"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Enter your budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
