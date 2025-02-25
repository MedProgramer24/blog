import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/Endpoint";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/AuthSlice";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post("/auth/login", value);
      const response = request.data;
      if (request.status === 200) {
        dispatch(setUser(response.user));
        navigate("/");
        toast.success(response.message);
      }
    } catch (error) {
      console.error("Login error", error);
      toast.error(
        error.response?.data?.message || "An unexpected error occurred."
      );
    }
  };

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center bg-black text-white">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <Link to="/" className="mb-4 text-white text-decoration-none">
            <h1 className="fw-bold">The Code Journal</h1>
          </Link>
          <div
            className="card shadow-lg border-0 p-4"
            style={{
              maxWidth: "400px",
              backgroundColor: "#1e1e1e",
              borderRadius: "15px",
            }}
          >
            <div className="card-body">
              <h2 className="fw-bold text-center mb-4">Sign in</h2>
              <form onSubmit={handleSubmit} style={{marginTop:"0",display:"block"}}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control bg-dark text-white border-secondary"
                    id="email"
                    placeholder="name@example.com"
                    required
                    value={value.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={value.password}
                    className="form-control bg-dark text-white border-secondary"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 mt-3"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  Sign in
                </button>
              </form>
              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
