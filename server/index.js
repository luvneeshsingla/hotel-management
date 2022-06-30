const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "clashclans",
  database: "hotemanagementsystem",
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const phoneno = req.body.phoneno;
  const food = req.body.food;
  console.log(username, password, food);

  db.query(
    "INSERT INTO userlogin (customer_name,pasword,contact,username,fav_food) VALUES (?,?,?,?,?);",
    [name, password, phoneno, username, food],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.usernamelog;
  const password = req.body.passwordlog;

  db.query(
    "SELECT * FROM userlogin WHERE username = ? AND pasword = ? ",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      console.log(result);
      if (result.length) {
        console.log("A");
        res.send(result);
      } else {
        console.log("B");
        res.send({ message: "Wrong username / password" });
      }
    }
  );
});

app.post("/loginFood", (req, res) => {
  const username = req.body.usernamelog;
  const food = req.body.food;

  db.query(
    "SELECT * FROM userlogin WHERE username = ? AND fav_food = ? ",
    [username, food],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      console.log(result);
      if (result.length) {
        console.log("A");
        res.send(result);
      } else {
        console.log("B");
        res.send({ message: "Wrong username / password" });
      }
    }
  );
});

app.post("/getUserData", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM userlogin WHERE username = ? AND pasword = ? ",
    [username, password],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});
app.post("/getRoomData", (req, res) => {
  db.query("SELECT * FROM rooms ", [], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.post("/validateRoom", (req, res) => {
  const room_no = req.body.room_no;
  const checkin = req.body.checkin;
  const checkout = req.body.checkout;

  db.query(
    "SELECT * FROM booking WHERE room_no = ? AND (checkout >= ?); ",
    [room_no, checkin],
    (err, result) => {
      console.log("F");
      if (err) {
        res.send({ err: err });
      }
      console.log(result);
      if (result.length === 0) {
        res.send(result);
      } else {
        res.send({ message: "Room Booked Already" });
      }
    }
  );
});

app.post("/bookRoom", (req, res) => {
  const room_no = req.body.room_no;
  const customer_id = req.body.customer_id;
  const checkin = req.body.checkin;
  const checkout = req.body.checkout;
  const booking_date = new Date();
  console.log(booking_date);
  db.query(
    "INSERT INTO booking (room_no,customer_id,booking_date,checkin,checkout) VALUES (?,?,?,?,?);",
    [room_no, customer_id, booking_date, checkin, checkout],
    (err, result) => {
      console.log("book data added");
      console.log(err);
      res.send(result);
    }
  );
});

app.post("/getUserBookingData", (req, res) => {
  console.log("N");
  const customer_id = req.body.customer_id;
  console.log(customer_id);
  db.query(
    "SELECT * FROM booking WHERE customer_id=? ",
    [customer_id],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.post("/cancelBook", (req, res) => {
  const booking_id = req.body.booking_id;
  console.log("O");
  console.log(booking_id);
  db.query(
    "DELETE FROM booking WHERE booking_id=? ",
    [booking_id],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.post("/updateUserData", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const customer_name = req.body.customer_name;
  const phoneno = req.body.phoneno;
  const customer_id = req.body.customer_id;
  console.log(username);
  db.query(
    "UPDATE userlogin SET customer_name=? ,pasword = ?,contact=?,username=? WHERE customer_id=?",
    [customer_name, password, phoneno, username, customer_id],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.post("/updateRoomData", (req, res) => {
  const room_no = req.body.room_no;
  const room_type = req.body.room_type;
  const room_price = req.body.room_price;
  console.log(room_no);
  console.log(room_type);
  db.query(
    "UPDATE rooms SET room_type=? ,room_price = ? WHERE room_no=?",
    [room_type, room_price, room_no],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log(`server running`);
});
