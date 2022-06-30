import React from "react";
import { NavBar } from "./Navbar";
import image5 from "../images/premium-plus.jpg";
export const Dashboard = ({
  user,
  data,
  cancelBooking,
  updateUserData,
  setupdatedpassword,
  setupdatedphoneno,
  setupdatedname,
  setupdatedusername,
}) => {
  const { contact, customer_name, username, customer_id } = user;

  return (
    <>
      <NavBar />
      <div className="container-dashboard row ">
        <div className="container fixed text-start mt-5 mx-5">
          <h3>ID : {customer_id}</h3>
          <h3>Name : {customer_name}</h3>
          <h3>User-Name : {username}</h3>
          <h3>Contact Number : {contact}</h3>
          <button
            type="button"
            class="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            // onClick={(e) => updateUserData(e)}
          >
            Edit Data
          </button>

          <h1 className="text-center my-5">My Bookings</h1>
          <div className="container row">
            <h6>
              <table class="table table-dark table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Booking_ID</th>
                    <th scope="col">Room_No.</th>
                    <th scope="col">Booking_Date</th>
                    <th scope="col">Check-In Date</th>
                    <th scope="col">Check-Out Date</th>
                    <th scope="col">Cancel Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x) => {
                    return (
                      <tr className="sticky-top table-warning ">
                        <th scope="row"> {x.booking_id} </th>
                        <td> {x.room_no} </td>
                        <td>
                          {" "}
                          {x.booking_date
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}{" "}
                        </td>
                        <td>
                          {" "}
                          {x.checkin
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}{" "}
                        </td>
                        <td>
                          {" "}
                          {x.checkout
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}{" "}
                        </td>
                        <td>
                          {" "}
                          <button
                            type="button"
                            class="btn btn-outline-dark"
                            value={x.booking_id}
                            onClick={(e) => cancelBooking(e)}
                          >
                            X
                          </button>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </h6>
          </div>
        </div>
      </div>
      <img src={image5} className="img-fluid w-100" alt="" />
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Enter the Details :-
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="mb-3">
                Please Logout and Login again with your updated credentials to
                see the updated Changes ..............
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="User-Name"
                  onChange={(e) => setupdatedusername(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  onChange={(e) => setupdatedname(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  onChange={(e) => setupdatedpassword(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="tel"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  onChange={(e) => setupdatedphoneno(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => updateUserData(e)}
                data-bs-dismiss="modal"
              >
                Update Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
