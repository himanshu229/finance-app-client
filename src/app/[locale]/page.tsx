"use client"

import { useRouter } from '@/navigation';
import { Container } from '@mui/material';

export default function Home() {
  const navigate = useRouter()

  return <Container>
  <button onClick={()=>navigate.push("/auth/login")}>LoginPage</button>
  <button onClick={()=>navigate.replace("/auth/login", {locale:"hi"})}>{"change Language"}</button>
  </Container>;
}
