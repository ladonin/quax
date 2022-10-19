import React from "react";
import { createRoot } from "react-dom/client";
import { Form } from "./components/Form";
import { QuaxProvider } from "./quax";
import { store } from "./store";
import { LastInputValue } from "./components/LastInputValue";
import { Phrases } from "./components/Phrases";

const root = createRoot(document.getElementById("root"));

const app = (
  <QuaxProvider store={store}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }}
    >
      <Form />
      <LastInputValue />
      <Phrases />
    </div>
  </QuaxProvider>
);

root.render(app);
