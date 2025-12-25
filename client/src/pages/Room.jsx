import { useParams } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";

export default function Room() {
  const { roomId } = useParams();
  const { document, updateDocument } = useSocket(roomId);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Room: {roomId}</h2>

      <textarea
        value={document}
        onChange={(e) => updateDocument(e.target.value)}
        rows={15}
        style={{ width: "100%", fontSize: "16px" }}
        placeholder="Start planning together..."
      />
    </div>
  );
}
