import React from "react";
import Navbar from "../../components/navbar/navbar";
import Navbar2 from "../../components/navbar2/navbar2";
import Leftbar from "../../components/leftbar/leftbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="row">
        <div className="col-3">
          <Leftbar />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
