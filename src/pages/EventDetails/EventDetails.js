import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({
    date: "2024-01-15",
    guests: 150,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const [quotations, setQuotations] = useState([
    {
      id: 1,
      vendor: "John's Photography",
      service: "Wedding Photography",
      quote: "$2000",
      status: "Pending",
      newQuote: "", // Field for entering a new quote
    },
    {
      id: 2,
      vendor: "Elite Catering",
      service: "Catering Service",
      quote: "$3500",
      status: "Negotiating",
      newQuote: "", // Field for entering a new quote
    },
  ]);

  const services = [
    {
      id: 1,
      name: "The Victoria Banquet",
      location: "Shahrah-e-Faisal, Karachi",
      image: "https://i.ytimg.com/vi/9C1MNbB0I90/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "The Mansion Marquee",
      location: "Shahrah-e-Faisal, Karachi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3VdnVqrRXOAa7Bb5942EhqWoFRqueA1nxw&s",
    },
    {
      id: 3,
      name: "The Venue",
      location: "Gulistan-e-Johar, Karachi",
      image: "https://i.ytimg.com/vi/u7L_0xA1IiA/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "Crystal Banquet",
      location: "North Nazimabad, Karachi",
      image: "http://www.venuebazaar.pk/Admin/Gallery_Hall/39/1-min.jpg",
    },
  ];

  const handleEventDetailsChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleEventDetailsSubmit = (e) => {
    e.preventDefault();
    console.log("Event Details Updated:", eventDetails);
    // Logic to save updated event details (e.g., API call).
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleNewQuoteChange = (id, value) => {
    setQuotations((prevQuotations) =>
      prevQuotations.map((quote) =>
        quote.id === id ? { ...quote, newQuote: value } : quote
      )
    );
  };

  const handleNegotiate = (id) => {
    const selectedQuote = quotations.find((quote) => quote.id === id);
    console.log(`Negotiating new quote for ID: ${id}`, selectedQuote.newQuote);
    // Logic to send the new quote price to the backend
  };

  const handleFinalize = (id) => {
    console.log(`Finalized quote for ID: ${id}`);
    // Logic to finalize the quotation
  };

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery) ||
      service.location.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-5 bg-[#fdfcf9] min-h-screen">
      <header className="bg-color-dark text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">Event Details</h1>
      </header>

      {/* Event Details Modification */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Modify Event Details</h2>
        <form onSubmit={handleEventDetailsSubmit} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={eventDetails.date}
              onChange={handleEventDetailsChange}
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
              placeholder="Enter number of guests"
              value={eventDetails.guests}
              onChange={handleEventDetailsChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit Changes
          </button>
        </form>
      </div>

      {/* Quotation Replies */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quotation Replies</h2>
        <div className="space-y-4">
          {quotations.map((quote) => (
            <div key={quote.id} className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">{quote.vendor}</h3>
              <p className="text-gray-600">{quote.service}</p>
              <p className="text-gray-600 font-semibold">Quote: {quote.quote}</p>
              <p className="text-gray-500">Status: {quote.status}</p>
              <div className="flex space-x-4 mt-4">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 flex-grow focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter new quote price"
                  value={quote.newQuote}
                  onChange={(e) => handleNewQuoteChange(quote.id, e.target.value)}
                />
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                  onClick={() => handleNegotiate(quote.id)}
                >
                  Negotiate
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  onClick={() => handleFinalize(quote.id)}
                >
                  Finalize
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Service Suggestions */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Suggestions</h2>
        <input
          type="text"
          className="w-[400px] border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search services by name or location"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Link
              to={`/service-details/${service.id}`}
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
