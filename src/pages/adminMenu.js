import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import Layout from "../components/layout"; 

function adminMenu() {
  const menuButton = [
    { name:"New Field Run", path: "/NewFieldRun"},
    { name:"Transfer", path: "/Transfer"},
    { name:"Add New Items", path: "/AddNewItems"},
    { name:"Delete Items", path: "/DeleteItems"},
    { name:"Mill Job", path: "/MillJob"},
    { name:"Store", path: "/Store"},
    { name:"Create Mill Job", path: "/CreateMillJob"},
    { name:"In Process", path: "/In Process"},
    { name:"Storage Dashboard", path: "/StorageDashboard"},
    { name:"Sale", path: "/Sale"},
  ];
  return (
    <Layout title="Admin Menu">
      <div className="grid grid-cols-5 gap-8">
        {menuButton.map((button, index) => (
          <Link
            key={index}
            to={button.path}
            className="bg-[#5D1214] text-white px-6 py-4 rounded-[15px] text-lg font-semibold 
                       flex-1 text-center hover:bg-[#390B0EFF] transition-all duration-300"
          >
            {button.name}
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default adminMenu;
