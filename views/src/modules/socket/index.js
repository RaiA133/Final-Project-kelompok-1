import { io } from "socket.io-client";

const socket = new io(import.meta.env.VITE_BACKEND_BASEURL, {
  autoConnect: false,
  withCredentials: true,
});

export default socket;