"use client";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, appStore } from "@/store/store";
import Loading from "./loading";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
