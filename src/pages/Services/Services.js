import React, { useState } from "react";
import {
  EnvironmentOutlined,
  CameraOutlined,
  GiftOutlined,
  SolutionOutlined,
  CoffeeOutlined,
  CarOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import vendors from "../../data/vendors.json";
import { Button, Input, Tabs } from "antd";
import { VendorCard } from "../../components";
const { Search } = Input;

const Services = () => {
  // State to track the active tab
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="container mx-auto p-8 bg-color-primary text-center">
      <h1 className="text-3xl font-bold text-center mb-4 text-primary">
        Discover The Best Vendors
      </h1>
      <p className="text-center text-primary">
        Discover our curated collection of premier event specialists and
        vendors—from exceptional photographers and visionary wedding planners to
        gourmet caterers, and every essential service to make your big day
        unforgettable.
      </p>

      <Search
        placeholder="Search vendors..."
        className="mb-8 w-2/4"
        size="large"
        enterButton={
          <Button style={{ backgroundColor: "#b18d17", color: "white" }}>
            Search
          </Button>
        }
      />

      <Tabs
        activeKey={activeKey} // Set the active tab
        onChange={handleTabChange} // Handle tab change
        centered
        className="mb-8 text-primary font-bold"
        tabBarStyle={{ color: "#b18d17" }}
        items={[
          {
            label: (
              <span>
                <EnvironmentOutlined /> Wedding Venue
              </span>
            ),
            key: "1",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Trending Venues
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {vendors.map((vendor, index) => (
                    <VendorCard key={index} {...vendor} />
                  ))}
                </div>
              </>
            ),
          },
          {
            label: (
              <span>
                <CameraOutlined /> Photographer
              </span>
            ),
            key: "2",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Best Photographers
                </h2>
                <h2 className="text-2xl font-semibold mb-8 text-primary">
                  NO DATA FOUND
                </h2>
              </>
            ),
          },
          {
            label: (
              <span>
                <GiftOutlined /> Videographer
              </span>
            ),
            key: "3",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Best Videographers
                </h2>
                <h2 className="text-2xl font-semibold mb-8 text-primary">
                  NO DATA FOUND
                </h2>
              </>
            ),
          },
          {
            label: (
              <span>
                <CoffeeOutlined /> Caterer
              </span>
            ),
            key: "4",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Top Caters
                </h2>
                <h2 className="text-2xl font-semibold mb-8 text-primary">
                  NO DATA FOUND
                </h2>
              </>
            ),
          },
          {
            label: (
              <span>
                <SolutionOutlined /> Event Planner
              </span>
            ),
            key: "5",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Trending Planners
                </h2>
                <h2 className="text-2xl font-semibold mb-8 text-primary">
                  NO DATA FOUND
                </h2>
              </>
            ),
          },
          {
            label: (
              <span>
                <CarOutlined /> Rentals
              </span>
            ),
            key: "6",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Best Rentals
                </h2>
                <h2 className="text-2xl font-semibold mb-8 text-primary">
                  NO DATA FOUND
                </h2>
              </>
            ),
          },
          {
            label: (
              <span>
                <CustomerServiceOutlined /> Entertainment
              </span>
            ),
            key: "7",
            children: (
              <>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Trending Entertainers
                </h2>
                <h2 className="text-2xl font-semibold mb-8 text-primary">
                  NO DATA FOUND
                </h2>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Services;
