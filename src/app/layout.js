import localFont from "next/font/local";
import "./globals.css";
import Navebar from "./component/Navebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="ml-[60px] mr-[60px] bg-gray-200">
        <Navebar />
        {children}
      </body>
    </html>
  );
}
