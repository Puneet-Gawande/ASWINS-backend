const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');


const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/appointments', appointmentRoutes);


io.on('connection', socket => {
  console.log("New socket connected");

  socket.on('sendMessage', data => {
    io.emit('receiveMessage', data);
  });

  socket.on('disconnect', () => console.log("Socket disconnected"));
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server running on port ${process.env.PORT}');
  });
})
.catch((err) =>  console.error("MongoDB connected error:",err) );