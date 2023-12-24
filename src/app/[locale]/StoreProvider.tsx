"use client";
import { makeStore } from "@/store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={makeStore()}>{children}</Provider>;
}
