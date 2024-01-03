"use client";
import { useRouter } from "@/navigation";
import { Box } from "@mui/material";
import React from "react";

export default function Login() {
  const navigate = useRouter();
  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue  text-white">
      <Box className="border-2 bg-white w-1/2 h-96 rounded-xl md:flex gap-4 p-6">
        <Box className="text-black w-24">Hello</Box>
        <Box className="text-black">hello</Box>
      </Box>
    </Box>
  );
}
