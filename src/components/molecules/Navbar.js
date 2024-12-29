import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Drawer, Button, Image, Dropdown } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Dropdown Menu Items for User
  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-color-dark p-2">
      <div className="mx-[5%] flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="no-underline">
            <Image
              src="assets/images/LogoWithoutName.png"
              width={70}
              preview={false}
              alt="EasyShadi.pk"
            />
            <span className="text-secondary">&nbsp; EasyShadi.pk</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 ">
          <Link to="/home" className="text-white hover:text-gray-400 no-underline">
            Home
          </Link>
          <Link
            to="/our-services"
            className="text-white hover:text-gray-400 no-underline"
          >
            Our Services
          </Link>
          <Link
            to="/aboutus"
            className="text-white hover:text-gray-400 no-underline"
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-white hover:text-gray-400 no-underline"
          >
            Contact Us
          </Link>

          {/* User Dropdown */}
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <UserOutlined className="cursor-pointer text-white hover:text-gray-400" />
          </Dropdown>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ backgroundColor: "#b18d17", borderColor: "#b18d17" }}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={closeDrawer}
        visible={drawerVisible}
        width={250}
      >
        <Menu mode="vertical" theme="light">
          <Menu.Item key="home">
            <Link to="/" onClick={closeDrawer}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="our-services">
            <Link to="/our-services" onClick={closeDrawer}>
              Our Services
            </Link>
          </Menu.Item>
          <Menu.Item key="aboutus">
            <Link to="/aboutus" onClick={closeDrawer}>
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item key="contactus">
            <Link to="/contactus" onClick={closeDrawer}>
              Contact Us
            </Link>
          </Menu.Item>
          <Menu.Item key="signin">
            <Link to="/signin" onClick={closeDrawer}>
              Sign In
            </Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="profile">
            <Link to="/profile" onClick={closeDrawer}>
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Link to="/logout" onClick={closeDrawer}>
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
