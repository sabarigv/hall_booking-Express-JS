const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let rooms = [];
let bookings = [];
let bookedrooms = [];
let customerrooms = [];
let bookingdetails = [];

app.use(bodyParser.json());

//Rooms
app.post('/rooms', (req, res) => {
  const { Number_of_Seats_available , amenities, price_per_hour } = req.body;

  const room = {
    Number_of_Seats_available,
    amenities,
    price_per_hour
  };

  rooms.push(room);

  res.send('Room details added successfully');
});

app.get('/rooms', (req, res) => {
  res.send(rooms);
});

//Bookings
app.post('/bookings', (req, res) => {
  const { Customer_name, date, start_time, end_time, room_id } = req.body;

  const booking = {
    Customer_name,
    date,
    start_time,
    end_time,
    room_id
  };

  bookings.push(booking);

  res.send('Booking added successfully');
});

app.get('/bookings', (req, res) => {
  res.send(bookings);
});

//bookedrooms
app.post('/bookedrooms', (req, res) => {
    const { room_name , booked_status, Customer_name, date, start_time, end_time } = req.body;
  
    const bookedroom = {
        room_name,
        booked_status,
        Customer_name,
        date,
        start_time,
        end_time
    };
  
    bookedrooms.push(bookedroom);
  
    res.send('Booked rooms details added successfully');
  });
  
  app.get('/bookedrooms', (req, res) => {
    res.send(bookedrooms);
  });

  //customer Room
  app.post('/customerrooms', (req, res) => {
    const {  Customer_name, room_name, date, start_time, end_time } = req.body;
  
    const customerroom = {
        Customer_name,
        room_name,
        date,
        start_time,
        end_time
    };
  
    customerrooms.push(customerroom);
  
    res.send('Customer rooms details added successfully');
  });
  
  app.get('/customerrooms', (req, res) => {
    res.send(customerrooms);
  });

  //bookingdetails
  app.post('/bookingdetails', (req, res) => {
    const {  Customer_name, room_name, date, start_time, end_time, booking_id, booking_date, booking_status } = req.body;
  
    const bookingdetail = {
        Customer_name,
        room_name,
        date,
        start_time,
        end_time,
        booking_id,
        booking_date,
        booking_status
    };
  
    bookingdetails.push(bookingdetail);
  
    res.send('Booking details added successfully');
  });
  
  app.get('/bookingdetails', (req, res) => {
    res.send(bookingdetails);
  });

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
