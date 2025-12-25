import { Routes, Route, Link } from "react-router-dom";
import Room from "./pages/Room";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
}

function Home() {
  const roomId = crypto.randomUUID().slice(0, 6);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Hivemind AI</h1>
      <Link to={`/room/${roomId}`}>
        Create Room
      </Link>
    </div>
  );
}
