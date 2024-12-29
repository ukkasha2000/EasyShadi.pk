import React, { useState } from 'react';
import { Tabs, Input, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState('guestCount');
  const [isSignInModalVisible, setSignInModalVisible] = useState(false);
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);

  const handleTabChange = (key) => {
    setSelectedTab(key);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <div className="bg-white bg-opacity-80 p-8 rounded shadow-md max-w-md">
        <h1 className="text-4xl font-bold mb-4">How would you like to start planning?</h1>
        <p className="text-sm mb-6">Simple. Organized. Stress-free.</p>

        {/* Tabs */}
        <Tabs
          defaultActiveKey="guestCount"
          onChange={handleTabChange}
          centered
          tabBarStyle={{
            fontWeight: 'bold',
          }}
          items={[
            {
              label: 'Guest Count',
              key: 'guestCount',
            },
            {
              label: 'Event Date',
              key: 'eventDate',
            },
            {
              label: 'Wedding Budget',
              key: 'weddingBudget',
            },
          ]}
        />

        {/* Dynamic Input Section */}
        <div className="mt-6">
          {selectedTab === 'guestCount' && (
            <Input
              type="number"
              placeholder="Enter guest count"
              className="w-full"
              style={{ marginBottom: '16px' }}
            />
          )}
          {selectedTab === 'eventDate' && (
            <Input
              type="date"
              placeholder="Select event date"
              className="w-full"
              style={{ marginBottom: '16px' }}
            />
          )}
          {selectedTab === 'weddingBudget' && (
            <Input
              type="number"
              placeholder="Enter budget"
              className="w-full"
              style={{ marginBottom: '16px' }}
            />
          )}
        </div>

        {/* Call-to-Action Button */}
        <Button
          type="primary"
          size="large"
          block
          style={{ backgroundColor: '#000', borderColor: '#000', marginBottom: '16px' }}
        >
          Start Planning
        </Button>
        <div>
        <div className='flex justify-center gap-1 items-center'>
            <p>Already have an account?</p><Link key="sign-in" to="/signin" className='no-underline text-inherit font-bold'>Sign in</Link>
        </div>
        <div className='flex justify-center gap-1 items-center'>
            <p>Are you a vendor?</p><Link key="sign-up" to="/signup" className='no-underline text-inherit font-bold'>Create Account</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
