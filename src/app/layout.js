import localFont from "next/font/local";
import "../styles/global.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

export const metadata = {
  title: "Daniel Olofsson",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body style={{
          margin: "0px",
          minHeight: "100vh",
          backgroundImage: 'url("http://localhost:3000/images/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}>
      <header><Navbar/></header>
        {children}
        <footer className={"test"}>
        <Footer/>
      </footer>
      </body>
      
    </html>
  );
}
