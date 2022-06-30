import React, { useState } from "react";

import { NavBar } from "./Navbar";
import image1 from "../images/royal.jpg";
import image2 from "../images/premium-plus.jpg";
import image4 from "../images/premium.jpg";
import image3 from "../images/single-ac.jpg";
import image5 from "../images/double-non-ac.jpg";
import image from "../images/book.jpg";

export const Booking = ({ room, bookingRoom, setcheckin, setcheckout }) => {
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
                        class="btn btn-outline-warning col-6"
                        value={x.room_no}
                        onClick={(e) => bookingRoom(e)}
                      >
                        Book Now
                      </button>
                      <h6 className="col-6 mt-2">{`Rs. ${x.room_price}`}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
