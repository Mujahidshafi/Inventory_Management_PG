import React from "react";
import "../App.css";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

function storageDashboard() {
  return (
      <Layout title="Storage Dashboard">
        <div className= "grid grid-cols-3 gap-20">
        <Link to="/fieldRunStorage" className="bg-[#5D1214] text-white px-6 py-6 rounded-[15px] text-lg font-semibold 
         text-center hover:bg-[#390B0EFF] transition-all duration-300"> Field Run Storage </Link>
        <Link to="/cleanStorage" className="bg-[#5D1214] text-white px-6 py-6 rounded-[15px] text-lg font-semibold 
         text-center hover:bg-[#390B0EFF] transition-all duration-300"> Clean Storage </Link>
        <Link to="/screeningStorage" className="bg-[#5D1214] text-white px-6 py-6 rounded-[15px] text-lg font-semibold 
         text-center hover:bg-[#390B0EFF] transition-all duration-300"> Screening Storage </Link>
         </div>
      </Layout>
  );
}

export default storageDashboard;
