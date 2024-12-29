import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const options = [
    {
      text: 'Create Event',
      route: '/create-event',
    },
    {
      text: 'Book Service',
      route: '/our-services',
    },
    {
      text: 'Review Events',
      route: '/review-events',
    },
  ];

  const userName = 'Oneeb';

  return (
    <div className="p-5 bg-[#fdfcf9] min-h-screen">
      <h2 className="text-xl font-bold mb-4">Welcome {userName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {options.map((option) => (
          <Link
            key={option.text}
            to={option.route}
            className="bg-gray-200 p-5 text-center min-h-[200px] flex flex-col items-end justify-end hover:bg-gray-300 transition-colors text-inherit no-underline"
          >
            {option.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
