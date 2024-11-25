import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav";

{/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

*/}

export const metadata = {
  title: "Vimerzion",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className={` relative m-0 px-16 pt-16 pb-36 w-full h-full min-h-screen `}>
        {children}
      </body>
    </html>
  );
}
