"use client";

import dynamic from "next/dynamic";
const LoginPage = dynamic(() => import("@/pages/authentication/login"));
export default function Login() {
  return <LoginPage />;
}
