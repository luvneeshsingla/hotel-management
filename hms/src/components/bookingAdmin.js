import React, { useState } from "react";

import { NavBar } from "./Navbar";
import image1 from "../images/royal.jpg";
import image2 from "../images/premium-plus.jpg";
import image4 from "../images/premium.jpg";
import image3 from "../images/single-ac.jpg";
import image5 from "../images/double-non-ac.jpg";
import image from "../images/book.jpg";

export const BookingAdmin = ({
  room,
  bookingRoom,
  setcheckin,
  setcheckout,
  setroomType,
  setroomPrice,
  setroomNo,
  updateRoomData,
}) => {
  const [search, setsearch] = useState("");
  const [searchPrice, setsearchPrice] = useState("");

  return (
    <>
      <NavBar />
      <img src={image} alt="" className="w-100 h-90 booking-image" />

      <div className="container-booking">
        <div className="row sticky-top">
          <form class=" col-3 sticky-top mb-5">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search By Class"
              aria-label="Search"
              onChange={(e) => setsearch(e.target.value)}
            />
          </form>
          <form class=" mt-1 col-3 sticky-top mb-5">
            <h6>
              {`Rs.  ${searchPrice}`}
              <input
                type="range"
                name="price"
                min="0"
                max="10000"
                className="mx-3 "
                onChange={(e) => setsearchPrice(e.target.value)}
              ></input>
            </h6>
          </form>

          <form class=" col-3 sticky-top mb-5">
            <h6>
              {`From  `}
              <input
                class="form-control me-2"
                type="date"
                placeholder="Select Check-in Date"
                onChange={(e) => setcheckin(e.target.value)}
              />
            </h6>
          </form>

          <form class=" col-3 sticky-top ">
            <h6>
              {`To  `}
              <input
                class="form-control me-2"
                type="date"
                placeholder="Select Check-in Date"
                onChange={(e) => setcheckout(e.target.value)}
              />
            </h6>
          </form>
        </div>

        <div className="row container mx-auto me-5 ">
          <div className="my-5"></div>
          {room
            .filter((val) => {
              return (
                (search === "" ||
                  val.room_type.toLowerCase().includes(search.toLowerCase())) &&
                (searchPrice === "" ||
                  parseInt(val.room_price) <= parseInt(searchPrice))
              );
            })
            .map((x) => {
              let i;
              if (x.room_type === "Royal_suite") i = image1;
              else if (x.room_type === "Luxury_suite") i = image2;
              else if (x.room_type === "Deluxe_suite") i = image3;
              else if (x.room_type === "Super Deluxe_suite") i = image4;
              else {
                i = image5;
              }

              return (
                <div
                  class="card col-4 mx-1 g-3 sticky-top "
                  style={{ width: "18rem" }}
                >
                  <img src={i} class="card-img-fluid pt-1" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{`Room No. ${x.room_no}`}</h5>
                    <h6 class="card-text">{x.room_type}</h6>

                    <div className="row">
                      <button
                        type="button"
                        class="btn btn-outline-warning col-5"
                        value={x.room_no}
                        onClick={(e) => bookingRoom(e)}
                      >
                        Book Now
                      </button>
                      <h5 className="col-5 mt-2">{`Rs. ${x.room_price}`}</h5>
                      <button
                        type="button"
                        class="btn btn-outline-warning col-2"
                        ata-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Edit The room Details"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        value={x.room_no}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* //88888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
      {/* //88888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
      {/* //88888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}
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
              
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Room No."
                  onChange={(e) => setroomNo(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Room Class"
                  onChange={(e) => setroomType(e.target.value)}
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Room Price"
                  onChange={(e) => setroomPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => updateRoomData(e)}
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
