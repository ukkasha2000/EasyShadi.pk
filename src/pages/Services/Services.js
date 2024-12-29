import React from "react";
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
import { Input, Tabs } from "antd";
import { VendorCard } from "../../components";
const { Search } = Input;
const { TabPane } = Tabs;

const Services = () => {
  return (
    <div className="container mx-auto p-8 bg-color-primary">
      <h1 className="text-3xl font-bold text-center mb-4 text-primary">
        Discover The Best Vendors
      </h1>
      <p className="text-center text-primary">
        Discover our curated collection of premier event specialists and
        vendors—from exceptional photographers and visionary wedding planners to
        gourmet caterers, and every essential service to make your big day
        unforgettable.
      </p>

      <Tabs defaultActiveKey="1" centered className="mb-8">
        <TabPane
          tab={
            <span>
              <EnvironmentOutlined /> Wedding Venue
            </span>
          }
          key="1"
        />
        <TabPane
          tab={
            <span>
              <CameraOutlined /> Photographer
            </span>
          }
          key="2"
        />
        <TabPane
          tab={
            <span>
              <GiftOutlined /> Videographer
            </span>
          }
          key="3"
        />
        <TabPane
          tab={
            <span>
              <CoffeeOutlined /> Caterer
            </span>
          }
          key="4"
        />
        <TabPane
          tab={
            <span>
              <SolutionOutlined /> Event Planner
            </span>
          }
          key="5"
        />
        <TabPane
          tab={
            <span>
              <CarOutlined /> Rentals
            </span>
          }
          key="6"
        />
        <TabPane
          tab={
            <span>
              <CustomerServiceOutlined /> Entertainment
            </span>
          }
          key="7"
        />
      </Tabs>

      <Search
        placeholder="Search vendors..."
        className="mb-8"
        size="large"
        enterButton
      />

      <h2 className="text-2xl font-semibold mb-4">Trending Venues</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {vendors.map((vendor, index) => (
          <VendorCard key={index} {...vendor} />
        ))}
      </div>
    </div>
  );
};

export default Services;
