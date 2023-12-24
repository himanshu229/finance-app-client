import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import NextIntlProvider from "../../helper/NextIntlProvider";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance",
  description: "Finance application",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../translation/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlProvider
          locale={locale}
          messages={messages}
          timeZone="Asia/Kolkata"
          now={new Date()}
        >
          <StoreProvider>{children}</StoreProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
