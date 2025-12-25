import { useParams } from "react-router-dom";
import { useSocket } from "../hooks/useSocket";
import { useCoAgent } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { useDocumentActions } from "../copilot/actions";

export default function Room() {
  const { roomId } = useParams();
  const { document, updateDocument } = useSocket(roomId);

  const { state, setState } = useCoAgent({
    name: "hivemind-agent",
    initialState: {
      document: "",
    },
  });

  useDocumentActions(updateDocument);


  // keep AI state in sync with document
  if (state.document !== document) {
    setState({ document });
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CopilotSidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Room: {roomId}</h2>

        <textarea
          value={document}
          onChange={(e) => updateDocument(e.target.value)}
          rows={15}
          style={{ width: "100%", fontSize: "16px" }}
        />
      </div>
    </div>
  );
}
