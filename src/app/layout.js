import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <head>
        <title>Bils บิลใบเสร็จแจ้งชำระค่าโฆษณา</title>
        <meta name="title" content="Bils บิลใบเสร็จแจ้งชำระค่าโฆษณา" />
        <meta name="description" content="บิลใบเสร็จแจ้งชำระค่าบริการค่าโฆษณา" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bil.myad-dev.com/" />
        <meta property="og:title" content="Bils บิลใบเสร็จแจ้งชำระค่าโฆษณา" />
        <meta property="og:description" content="Bils บิลใบเสร็จแจ้งชำระค่าบริการค่าโฆษณา" />
        <meta property="og:image" content="https://bil.myad-dev.com/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bil.myad-dev.com/" />
        <meta property="twitter:title" content="Bils บิลใบเสร็จแจ้งชำระค่าโฆษณา" />
        <meta property="twitter:description" content="Bils บิลใบเสร็จแจ้งชำระค่าบริการค่าโฆษณา" />
        <meta property="twitter:image" content="https://bil.myad-dev.com/logo.png" />
        <link rel="shortcut icon" href="https://bil.myad-dev.com/logo.png" type="image/x-icon" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

