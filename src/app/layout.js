import localFont from "next/font/local";
import "./globals.css";
import Navebar from "./component/Navebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:ml-[60px] lg:mr-[60px] md:ml-0 md:mr-0 bg-gray-200">
        <Navebar />
        {children}
      </body>
    </html>
  );
}
