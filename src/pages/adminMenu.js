import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import Layout from "../components/layout";

const buttonStyle="bg-[#5D1214] text-white px-6 py-6 rounded-[15px] text-lg font-semibold text-center hover:bg-[#3D5147] transition-all duration-300"

function adminMenu() {
  return (
    <Layout title="Admin Menu">
      <div className="grid grid-cols-4 gap-8">
        <Link to="/newFieldRun" className={buttonStyle}> New Field Run </Link>

        <Link to="/transfer" className={buttonStyle}> Transfer </Link>

        <Link to="/addNewItems" className={buttonStyle}> Add New Items </Link>

        <Link to="/deleteItems" className={buttonStyle}> Delete Items </Link>

        <Link to="/jobs" className={buttonStyle}> Jobs </Link>

        <Link to="/updateLocation" className={buttonStyle}> Update Location </Link>

        <Link to="/createJob" className={buttonStyle}> Create Job </Link>

        <Link to="/inProcess" className={buttonStyle}> In Process </Link>

        <Link to="/storageDashboard" className={buttonStyle}> Storage Dashboard </Link>

        <Link to="/sale" className={buttonStyle}> Sale </Link>

        <Link to="/search" className={buttonStyle}> Search </Link>

      </div>
    </Layout>
  );
};
export default adminMenu;
