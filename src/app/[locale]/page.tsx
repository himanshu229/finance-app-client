"use client"
import { Button, Container } from '@mui/material'
import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function Home() {
   const t = useTranslations("lang");
  return <Container>{t.rich("app_welcome_title")}</Container>;
}
