import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App.tsx";
import { Provider } from "@/components/ui/provider.tsx";

// biome-ignore lint/style/noNonNullAssertion: index.html is guaranteed to have an element with id "root"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
