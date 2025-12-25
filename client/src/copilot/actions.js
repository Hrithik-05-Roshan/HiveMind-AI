import { useCopilotAction } from "@copilotkit/react-core";

export function useDocumentActions(updateDocument) {
  useCopilotAction({
    name: "refine_document",
    description: "Improve clarity and structure of the document",
    parameters: [],
    handler: async ({ state }) => {
      updateDocument(state.document);
    },
  });
}
