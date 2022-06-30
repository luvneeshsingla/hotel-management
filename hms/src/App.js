import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Register } from "./components/register";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./components/home";
import { Booking } from "./components/booking";
import { BookingAdmin } from "./components/bookingAdmin";
import { Dashboard } from "./components/dashboard";
import { Error } from "./components/Error";

function App() {
  const [username, setusername] = useState("");
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [Fusername, setFusername] = useState("");
  const [Fpassword, setFpassword] = useState("");
  const [usernamelog, setusernamelog] = useState("");
  const [passwordlog, setpasswordlog] = useState("");
  const [loginValid, setloginValid] = useState("");
  const [name, setname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [user, setuser] = useState({});
  const [room, setroom] = useState([]);
  const [checkin, setcheckin] = useState(null);
  const [data, setdata] = useState([]);
  const [checkout, setcheckout] = useState(null);
  const [newBooking, setnewBooking] = useState(0);
  const [updatedpassword, setupdatedpassword] = useState("");
  const [updatedusername, setupdatedusername] = useState("");
  const [updatedname, setupdatedname] = useState("");
  const [updatedphoneno, setupdatedphoneno] = useState("");
  const [roomType, setroomType] = useState("");
  const [roomPrice, setroomPrice] = useState("");
  const [roomNo, setroomNo] = useState("");
  const [food, setfood] = useState("");

  const navigate = useNavigate();

  //******************************************************** */
  //******************************************************** */
  //******************************************************** */

  //******************************************************** */
  //******************************************************** */

  const register = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      password === "" ||
      name === "" ||
      phoneno === "" ||
      food === ""
    ) {
      alert("Please Completely Fill the Information .....");
      return;
    }

    Axios.post("http://localhost:3001/register", {
      username: username,
      password: password,
      name: name,
      phoneno: phoneno,
      food: food,
    }).then((response) => {
      //   console.log(response);
      alert("Registration Successfull , login withyour credentials ......... ");
      setFusername(username);
      setFpassword(password);
      setid(response.data.customer_id);
      setuser(response.data);
    });
    Axios.post("http://localhost:3001/getUserData", {
      username: Fusername,
      password: Fpassword,
    }).then((response) => {
      console.log("D");
      console.log(response.data[0]);
      setuser(response.data[0]);
    });
    Axios.post("http://localhost:3001/getRoomData", {}).then((response) => {
      console.log(response);
      setroom(response.data);
    });
  };
  useEffect(() => {
    if (Fusername === "") {
      navigate("/");
    }
  }, [Fusername, navigate]);
  //********************************************************* */
  //********************************************************* */
  //********************************************************* */
  //******************************************************** */
  //******************************************************** */
  //******************************************************** */
  const login = (e) => {
    e.preventDefault();
    if (usernamelog === "" || passwordlog === "") {
      alert("Please completely fill the Information ....");
      return;
    }
    console.log(new Date().toLocaleDateString());
    console.log(usernamelog);
    console.log(passwordlog);
    Axios.post("http://localhost:3001/login", {
      usernamelog: usernamelog,
      passwordlog: passwordlog,
    }).then((response) => {
      //   console.log(response);
      if (response.data.message) {
        setloginValid(response.data.message);
      } else {
        setFusername(usernamelog);
        setFpassword(passwordlog);
        setid(parseInt(response.data[0].customer_id));
        console.log("user value changed");
        setuser(response.data[0]);
        navigate("home");
      }
      Axios.post("http://localhost:3001/getRoomData", {}).then((response) => {
        console.log(response);
        setroom(response.data);
      });
    });
  };

  const loginAdmin = (e) => {
    e.preventDefault();

    if (passwordlog === "") {
      alert("Please completely fill the Information ....");
      return;
    }
    Axios.post("http://localhost:3001/login", {
      usernamelog: "Admin",
      passwordlog: passwordlog,
    }).then((response) => {
      //   console.log(response);
      if (response.data.message) {
        alert(response.data.message);
      } else {
        setFusername("Admin");
        setFpassword(passwordlog);
        setid(parseInt(response.data[0].customer_id));
        console.log("user value changed");
        setuser(response.data[0]);
        navigate("home");
      }
      Axios.post("http://localhost:3001/getRoomData", {}).then((response) => {
        console.log(response);
        setroom(response.data);
      });
    });
  };

  const loginFood = (e) => {
    e.preventDefault();

    if (usernamelog === "" || food === "") {
      alert("Please completely fill the Information ....");
      return;
    }
    Axios.post("http://localhost:3001/loginFood", {
      usernamelog: usernamelog,
      food: food,
    }).then((response) => {
      //   console.log(response);
      if (response.data.message) {
        alert(response.data.message);
      } else {
        setFusername(usernamelog);
        setid(parseInt(response.data[0].customer_id));
        setuser(response.data[0]);
        navigate("home");
      }
      Axios.post("http://localhost:3001/getRoomData", {}).then((response) => {
        console.log(response);
        setroom(response.data);
      });
    });
  };
  //******************************************************** */
  //******************************************************** */
  //******************************************************** */
  //******************************************************** */
  const bookingRoom = (e) => {
    e.preventDefault();
    if (checkin === null || checkout === null) {
      alert("Please Specify Date of arrival and departure !!!!!!!!!!");
      return;
    }
    console.log(new Date(checkin).toLocaleDateString());
    console.log(new Date().toLocaleDateString());
    console.log(
      new Date(checkin).toLocaleDateString() < new Date().toLocaleDateString()
    );
    if (
      new Date(checkin).toISOString().slice(0, 10) >
        new Date(checkout).toISOString().slice(0, 10) ||
      new Date(checkin).toISOString().slice(0, 10) <
        new Date().toISOString().slice(0, 10)
    ) {
      alert("Please enter enter valid arrival and departure dates !!!!!!!!!!");
      return;
    }
    Axios.post("http://localhost:3001/validateRoom", {
      room_no: parseInt(e.target.value),
      checkin: checkin,
      checkout: checkout,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        console.log(`id is ${id}`);
        Axios.post("http://localhost:3001/bookRoom", {
          room_no: parseInt(e.target.value),
          checkin: checkin,
          checkout: checkout,
          customer_id: id,
        }).then((response) => {
          //   console.log(response);
          alert("Room Booked Successfully");
          setnewBooking(parseInt(newBooking ^ 1));
        });
      } else {
        alert("Room Already Booked for the specified date");
      }
    });
  };
  //********************************************************** */
  //********************************************************** */
  const cancelBooking = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    Axios.post("http://localhost:3001/cancelBook", {
      booking_id: parseInt(e.target.value),
    }).then((response) => {
      console.log(response);
      setnewBooking(parseInt(newBooking ^ 1));
    });
  };
  //********************************************************** */
  //********************************************************** */

  useEffect(() => {
    Axios.post(`http://localhost:3001/getUserBookingData`, {
      customer_id: parseInt(id),
    }).then((response) => {
      console.log(response.data);
      setdata(response.data);
    });
    Axios.post("http://localhost:3001/getUserData", {
      username: Fusername,
      password: Fpassword,
    }).then((response) => {
      console.log("D");
      console.log(response.data[0]);
      setuser(response.data[0]);
    });
    Axios.post("http://localhost:3001/getRoomData", {}).then((response) => {
      console.log(response);
      setroom(response.data);
    });
  }, [id, newBooking, Fusername, Fpassword]);
  //********************************************************** */
  //********************************************************** */
  const updateUserData = (e) => {
    e.preventDefault();
    if (
      updatedname === "" ||
      updatedpassword === "" ||
      updatedusername === "" ||
      updatedphoneno === ""
    ) {
      alert("Please completely fill the information ......");
      return;
    }
    Axios.post(`http://localhost:3001/updateUserData`, {
      customer_id: parseInt(id),
      username: updatedusername,
      password: updatedpassword,
      customer_name: updatedname,
      phoneno: updatedphoneno,
    }).then((response) => {
      console.log(response.data);
      setFpassword(updatedpassword);
      setFusername(updatedusername);
      setnewBooking(parseInt(newBooking ^ 1));
    });
  };

  const updateRoomData = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:3001/updateRoomData`, {
      customer_id: parseInt(id),
      room_no: roomNo,
      room_type: roomType,
      room_price: roomPrice,
    }).then((response) => {
      console.log(response.data);

      setnewBooking(parseInt(newBooking ^ 1));
    });
  };

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Register
                register={register}
                setname={setname}
                setphoneno={setphoneno}
                setpassword={setpassword}
                setusername={setusername}
                login={login}
                setpasswordlog={setpasswordlog}
                setusernamelog={setusernamelog}
                loginValid={loginValid}
                loginAdmin={loginAdmin}
                loginFood={loginFood}
                setfood={setfood}
              />
            }
          ></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route
            path="/booking"
            element={
              Fusername !== "Admin" ? (
                <Booking
                  room={room}
                  setcheckin={setcheckin}
                  setcheckout={setcheckout}
                  bookingRoom={bookingRoom}
                />
              ) : (
                <BookingAdmin
                  room={room}
                  setcheckin={setcheckin}
                  setcheckout={setcheckout}
                  bookingRoom={bookingRoom}
                  setroomType={setroomType}
                  setroomPrice={setroomPrice}
                  setroomNo={setroomNo}
                  updateRoomData={updateRoomData}
                />
              )
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <Dashboard
                user={user}
                data={data}
                cancelBooking={cancelBooking}
                setupdatedpassword={setupdatedpassword}
                setupdatedphoneno={setupdatedphoneno}
                setupdatedname={setupdatedname}
                setupdatedusername={setupdatedusername}
                updateUserData={updateUserData}
              />
            }
          ></Route>
          <Route path="*d" element={<Error />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
