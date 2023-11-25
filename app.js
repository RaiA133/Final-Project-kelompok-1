require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');
const routers = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 8050;
const cors = require('cors');

// socket.io
const { Server } = require("socket.io");
const httpServer = require("http").createServer(app);
const io = new Server(httpServer);

app.use(cors({
  origin: 'http://localhost:5173',
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  optionsSuccessStatus: 200,
}));

app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware Socket.IO
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api/v1/', routers);
app.use('/profile/picture', express.static(path.join(__dirname, 'assets/img/users')));
app.use('/post/picture', express.static(path.join(__dirname, 'assets/img/user_postingan')));

if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(port, () => {
    console.log(`\n\tListening on http://localhost:${port}\n`);
  });
}

module.exports = app;
