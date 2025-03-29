import React from "react";
import "../App.css";
import Layout from "../components/layout"; 
import Button from "../components/button";
import { Link } from "react-router-dom";

function employeeMenu() {
    return (
      <Layout title="Employee Menu">
        <div class = "flex flex-wrap justify-center items-center w-[100%] h-[100%]"> 
            <div class = "grid grid-cols-2 gap-8">

              <Link to="/newFieldRun">
                <Button
                label = "New Field Run"
                color = "red"
                className = "min-w-[160px] h-16"
                />
            </Link>

            <Link to="/transfer">
              <Button
              label = "Transfer"
              color = "red"
              className = "min-w-[160px] h-16"
              />
            </Link>

            <Link to="/jobs">
              <Button
              label = "Jobs"
              color = "red"
              className = "min-w-[160px] h-16"
              />
            </Link>

            <Link to="/updateLocation">
              <Button
              label = "Update Location"
              color = "red"
              className = "min-w-[160px] h-16"
              />
            </Link>
            </div>
        </div>
      </Layout>
    );
  }

export default employeeMenu;