const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173" });

let onlineUsers = []

io.on("connection", (socket) => {
  console.log("new connection", socket.id)

  // listen to a custom connection : pass socket.id
  socket.on("addNewUser", (userUniqueId) => {
    !onlineUsers.some(user => user?.userUniqueId === userUniqueId) && userUniqueId !== null &&
    onlineUsers.push({
      userUniqueId,
      socketId: socket.id
    });
    console.log("onlineUsers", onlineUsers)
    io.emit("getOnlineUsers", onlineUsers)
  });

  // add message dari message yg dikirim
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(user => user.userUniqueId === message.recipientUniqueId)
    if (user) {
      io.to(user.socketId).emit("getMessage", message)
    }
  })

  // logout / tab user lain di close = disconnect event = status online/offline terupdate secara realtime
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id) 
    io.emit("getOnlineUsers", onlineUsers)
  })

});

io.listen(5000);