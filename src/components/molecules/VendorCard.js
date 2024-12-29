import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";

const VendorCard = ({ id, name, location, image }) => {
  return (
    <Link to={`/service-details/${id}`} className="no-underline">
      <Card
        cover={
          <img
            alt={name}
            src={image}
            className="rounded-t-lg object-cover h-48 w-full"
          />
        }
        actions={[<HeartOutlined key="like" />]}
        className="rounded-lg overflow-hidden shadow-lg w-full hover:shadow-xl transition-shadow"
      >
        <h3 className="font-bold text-lg text-primary">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      </Card>
    </Link>
  );
};

export default VendorCard;
