"use client"

import { useRouter } from '@/navigation';
import { Button, Container } from '@mui/material'
import { useTranslations } from 'next-intl';
// import { useRouter } from 'next/navigation';

export default function Home() {
  const navigate = useRouter()
   const t = useTranslations("lang");

  return <Container>
  <button onClick={()=>navigate.push("/auth/login")}>{t.rich("app_welcome_title")}</button>
  <button onClick={()=>navigate.replace("/auth/login", {locale:"hi"})}>{"change Language"}</button>
  </Container>;
}
