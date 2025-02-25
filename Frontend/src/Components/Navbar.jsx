import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl, post } from "../services/Endpoint";
import { removeUser } from "../redux/AuthSlice";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [islogin, setIslogin] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      const request = await post("/auth/logout");
      const response = request.data;
      if (request.status == 200) {
        navigate("/login");
        dispatch(removeUser());
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar d-flex justify-content-between bg-gray-900  align-items-center p-3">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 className="mx-5 text-white fs-2 fw-bold">The Code Journal</h1>
      </Link>
      <div
        className="ml-2  d-flex w-5 align-items-center p-3"
        style={{
          marginLeft: "-298px",
          border: "1px solid white",
          borderRadius: "35px",
        }}
      >
        <Link to={"#latest"} style={{ textDecoration: "none" }}>
          <h1 className="mx-2 text-white fs-5 ">Posts</h1>
        </Link>
        <Link to={"#latest"} style={{ textDecoration: "none" }}>
          <h1 className="mx-2 text-white fs-5 ">contact</h1>
        </Link>
        <Link to={"#latest"} style={{ textDecoration: "none" }}>
          <h1 className="mx-2 text-white fs-5 ">privacy</h1>
        </Link>
      </div>
      <div className="d-flex align-items-center" style={{ marginRight: "29px" }}>
        {!user ? (
          <Link to={"/login"}>
            <button className="btn_sign mx-3">Sign in</button>
          </Link>
        ) : (
          <div className="dropdown">
            <div
              className="avatar-container pointer rounded-circle overflow-hidden bg-info"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            >
              <img
                className="img-fluid h-100 w-100"
                src={`${BaseUrl}/images/${user.profile}`}
                alt="Profile"
                style={{ objectFit: "cover" }}
              />
            </div>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              {/* <li><span className='text-bold fs-4 dropdown-item'>{user && user.FullName}</span></li> */}
              {user.role == "admin" ? (
                <li>
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link className="dropdown-item" to={`/profile/${user._id}`}>
                  Profile
                </Link>
              </li>
              <li>
                <a
                  className="dropdown-item "
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
