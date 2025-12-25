const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const rooms = new Map();

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("join_room", (roomId) => {
    console.log(`➡️ ${socket.id} joined room ${roomId}`);
    socket.join(roomId);

    if (!rooms.has(roomId)) {
      rooms.set(roomId, "");
    }

    socket.emit("sync_document", rooms.get(roomId));
  });

  socket.on("document_update", ({ roomId, content }) => {
    console.log(`✏️ Update in room ${roomId}`);
    rooms.set(roomId, content);

    // broadcast to ALL users in room
    io.to(roomId).emit("sync_document", content);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Hivemind AI Socket Server is running");
});


const PORT = 5000;

server.listen(PORT, () => {
  console.log(`🚀 Socket server running on http://localhost:${PORT}`);
});
