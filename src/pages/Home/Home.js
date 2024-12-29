import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarOutlined,
  BookOutlined,
  FileTextOutlined,
  PlusOutlined, // Icon for Create Service
  AppstoreOutlined, // Icon for My Services
} from '@ant-design/icons'; // Import Ant Design icons

const Home = () => {
  const options = [
    {
      text: 'Create Event',
      route: '/create-event',
      tileColor: 'bg-[#bae6fd]',
      icon: <CalendarOutlined style={{ fontSize: '2.5rem', color: '#4CAF50' }} />, // Calendar icon
    },
    {
      text: 'Book Service',
      route: '/our-services',
      tileColor: 'bg-[#7dd3fc]',
      icon: <BookOutlined style={{ fontSize: '2.5rem', color: '#FF9800' }} />, // Book icon
    },
    {
      text: 'Review Events',
      route: '/review-events',
      tileColor: 'bg-[#38bdf8]',
      icon: <FileTextOutlined style={{ fontSize: '2.5rem', color: '#2196F3' }} />, // File/Text icon
    },
    {
      text: 'Create Service',
      route: '/create-service',
      tileColor: 'bg-[#60a5fa]',
      icon: <PlusOutlined style={{ fontSize: '2.5rem', color: '#4CAF50' }} />, // Plus icon
    },
    {
      text: 'My Services',
      route: '/my-services',
      tileColor: 'bg-[#9333ea]',
      icon: <AppstoreOutlined style={{ fontSize: '2.5rem', color: '#FF5722' }} />, // App Store icon
    },
  ];

  const userName = 'Oneeb';

  return (
    <div className="p-5 bg-color-primary min-h-screen">
      {/* Hero Section */}
      <header className="bg-color-dark text-white p-10 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome, {userName}!</h1>
        <p className="text-lg mt-2">Explore and manage your events with ease.</p>
      </header>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {options.map((option) => (
          <Link
            key={option.text}
            to={option.route}
            className={`rounded-lg shadow-md p-5 text-center min-h-[200px] flex flex-col items-center justify-center border border-gray-200 hover:shadow-lg hover:bg-gray-50 transition-transform transform hover:scale-105 no-underline text-inherit ${option.tileColor}`}
          >
            {option.icon} {/* Display the corresponding icon */}
            <span className="text-xl font-semibold text-gray-700 mt-4">{option.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
