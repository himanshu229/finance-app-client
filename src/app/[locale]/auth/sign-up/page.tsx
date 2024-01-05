"use client";

import dynamic from "next/dynamic";
const SingupPage = dynamic(() => import("@/pages/authentication/sign-up"));

const Singup = () => {
  return (
    <SingupPage/>
  )
}

export default Singup