const express = require("express");

const app = express();

const dbconfig = require('/home/biodun/hotel-booking/db.jsx')
const roomsRoute = require('/home/biodun/hotel-booking/routes/roomsRoute.jsx')
const userRoute = require('/home/biodun/hotel-booking/routes/userRoute.jsx')
const bookingRoute = require('/home/biodun/hotel-booking/routes/bookingRoute.jsx')
app.use(express.json())
app.use('/api/rooms', roomsRoute)
app.use('/api/user', userRoute)
app.use('/api/bookings', bookingRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))