"use client";
import { useRouter } from '@/navigation';
import { Container } from '@mui/material';
import React from 'react'

export default function Login() {
  const navigate = useRouter()
  return <Container>
  <button onClick={()=>navigate.push("/")}>{"back"}</button>
  </Container>;
}