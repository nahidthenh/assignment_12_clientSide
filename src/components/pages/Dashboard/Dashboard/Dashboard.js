import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import MyOrder from "../../MyOrder/MyOrder";
import Pay from "../../Pay/Pay";
import ReviewItem from "../../ReviewItem/ReviewItem";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row m-0 p-0">
          <div className="col-md-3">
            <div className="dashboard px-5">
              <h5 className="text-center py-3">Dashboard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to={`${url}/BookingList`}>
                <li className="dashboard-menu mt-5">Booking list</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list</li>

                {isAdmin && (
                  <Link to={`${url}/addService`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )}
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageAllOrder`}>
                  <li className="dashboard-menu">Manage All Orders</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/review`}>
                <ReviewItem></ReviewItem>
              </Route>
              <Route exact path={`${path}/manageAllOrder`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddProduct></AddProduct>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>

              <Route exact path={`${path}/manageProduct`}>
                <ManageProducts></ManageProducts>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
