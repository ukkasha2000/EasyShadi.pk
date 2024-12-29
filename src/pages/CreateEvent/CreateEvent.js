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
    <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center">
      <div className="bg-white p-16 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tell Us A Little Bit About Your Event
        </h2>
        <p className="text-gray-600 mb-6">
          This will help us personalize your experience.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Event Date */}
          <input
            type="date"
            name="eventDate"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />

          {/* Event City */}
          <input
            type="text"
            name="eventCity"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            placeholder="Event City"
            value={formData.eventCity}
            onChange={handleChange}
            required
          />

          {/* Event Venue */}
          <input
            type="text"
            name="eventVenue"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            placeholder="Event Venue"
            value={formData.eventVenue}
            onChange={handleChange}
            required
          />

          {/* Event Type */}
          <select
            name="eventType"
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

          {/* Guest Count */}
          <input
            type="number"
            name="guestCount"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            placeholder="Guest Count"
            value={formData.guestCount}
            onChange={handleChange}
            required
          />

          {/* Outdoor/Indoor */}
          <div className="flex items-center justify-between">
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

          {/* Budget */}
          <input
            type="number"
            name="budget"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />

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
