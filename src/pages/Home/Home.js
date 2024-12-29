import React from 'react';

const Home = () => {
  const options = [{
    text: 'Create Event',
    route: '',
  },
  {
    text: 'Book Service',
    route: '',
  },
  {
    text: 'Review Activities',
    route: '',
  }];
  const userName = 'Oneeb';
  return (
    <div className="p-5">
    <h2 className="text-xl font-bold mb-4">Welcome {userName}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {options.map((option) => {
        return <div className="bg-gray-200 p-5 text-center min-h-[200px] flex flex-col items-end justify-end">{option.text}</div>
      })}
    </div>
  </div>
  )
}

export default Home;

