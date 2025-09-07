import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import { Provider } from "@/components/ui/provider.tsx";
import { messages as enMessages } from "@/locales/en/messages";
import { messages as jaMessages } from "@/locales/ja/messages";

i18n.load({
  en: enMessages,
  ja: jaMessages,
});
i18n.activate("en");

// biome-ignore lint/style/noNonNullAssertion: index.html is guaranteed to have an element with id "root"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </Provider>
  </StrictMode>,
);
