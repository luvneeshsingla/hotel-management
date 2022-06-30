import React from "react";
import { Link } from "react-router-dom";
import image from "../images/register.jpg";
export const Register = ({
  login,
  setusernamelog,
  setpasswordlog,
  register,
  setusername,
  setpassword,
  loginValid,
  setname,
  setphoneno,
  loginAdmin,
  setfood,
  loginFood,
}) => {
  return (
    <>
      <div className="container-register">
        <div className=" mx-auto register">
          <h1 className="text-center text-secondary mx-auto">Welcome !!!</h1>
          <h3 className="text-center text-dark mb-2">
            Dont't have an account , register below :
          </h3>
          <form class="row g-3">
            <div class="col-6">
              <input
                type="text"
                readonly
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="User-Name"
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
            <div class="col-6">
              <input
                type="password"
                class="form-control"
                id="inputPassword2"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <div class="col-6 ">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="First Name"
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div class="col-6 ">
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Enter your favourite food :"
                onChange={(e) => setfood(e.target.value)}
                required
              />
            </div>
            <div class="col-12 ">
              <input
                type="tel"
                class="form-control"
                id="inputPassword2"
                placeholder="Phone Number"
                onChange={(e) => setphoneno(e.target.value)}
                required
              />
            </div>
            <div class="col-12 ">
              <Link to="/home">
                <button
                  type="button"
                  class="btn btn-danger mb-2"
                  onClick={(e) => register(e)}
                >
                  Register
                </button>
              </Link>
            </div>
          </form>
          <h3 className="text-center text-dark mb-3 mt-5">
            Have an Account , Login below :
          </h3>
          <form class="row g-3">
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                id="inputPassword6"
                placeholder="User-Name"
                onChange={(e) => setusernamelog(e.target.value)}
                required
              />
            </div>
            <div class="col-5">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={(e) => setpasswordlog(e.target.value)}
                required
              />
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn btn-danger mb-3"
                onClick={(e) => login(e)}
              >
                Login
              </button>
            </div>
          </form>

          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Forgot Password ?
          </button>
          <form class="row g-3 ">
            <div class="col-12">
              <h3 className="text-center text-dark mt-3">
                Sign In as Administrator
              </h3>
            </div>
            <div class="col-5 text-start">
              <input
                type="text"
                class="form-control"
                id="input4"
                placeholder="Password"
                value={`Admin`}
                readOnly
              />
            </div>
            <div class="col-5 text-start">
              <input
                type="password"
                class="form-control"
                id="input3"
                placeholder="Password"
                onChange={(e) => setpasswordlog(e.target.value)}
                required
              />
            </div>
            <div class="col-2 text-start">
              <button
                type="button"
                class="btn btn-danger mb-3"
                onClick={(e) => loginAdmin(e)}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* *************************************************************************** */}
      {/* *************************************************************************** */}
      {/* *************************************************************************** */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mt-5">
          <div class="modal-content">
            <div class="modal-header">
              <div class="mb-3 row mx-auto">
                <input
                  type="text"
                  class="form-control col-12 "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Favourite Food"
                  onChange={(e) => setfood(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control col-12"
                  id="exampleInputEmai"
                  aria-describedby="emailHelp"
                  placeholder="User-Name"
                  onChange={(e) => setusernamelog(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => loginFood(e)}
                data-bs-dismiss="modal"
              >
                Update Changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* *************************************************************************** */}
        {/* *************************************************************************** */}
      </div>

      <img className="image-fluid w-100" src={image} alt="" />
    </>
  );
};
