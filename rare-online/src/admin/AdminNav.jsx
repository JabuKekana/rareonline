import React from "react";
import { Container, Row } from "reactstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/admin-nav.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase-config"; 
import { signOut } from "firebase/auth";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>Rare Online</h2>
              </div>

              <div className="search__box">
                <input type="text" placeholder="Search..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notifications-3-line"></i>
                </span>
                <NavLink to="/dashboard/add-products" className="settings-icon">
                  <i className="ri-settings-2-line"></i>
                </NavLink>
                <NavLink to="/home" className="settings-icon" onClick={handleLogout}>
                <i className="ri-home-line"></i>
                </NavLink>
                <img
                  src={currentUser && currentUser.photoURL}
                  alt="dashboardPicture"
                />
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
