import React from "react";
import "../App.css";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

function StorageDashboard() {
  return (
    <Layout title="Storage Dashboard">
      <Link to="/fieldRunStorage" className="bg-[#5D1214] text-white px-6 py-4 rounded-[15px] text-lg font-semibold 
      flex-1 text-center hover:bg-[#390B0EFF] transition-all duration-300"> Field Run Storage </Link>
      <Link to="/cleanStorage" className="bg-[#5D1214] text-white px-6 py-4 rounded-[15px] text-lg font-semibold 
      flex-1 text-center hover:bg-[#390B0EFF] transition-all duration-300"> Clean Storage </Link>
      <Link to="/screeningStorage" className="bg-[#5D1214] text-white px-6 py-4 rounded-[15px] text-lg font-semibold 
      flex-1 text-center hover:bg-[#390B0EFF] transition-all duration-300"> Screening Storage </Link>
    </Layout>
  );
}

export default StorageDashboard;
