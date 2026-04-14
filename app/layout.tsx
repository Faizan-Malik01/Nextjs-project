import Footer from "@/Components/footer";
import "./globals.css";
import Navbar from "@/Components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer/>
        </body>
    </html>
  );
}
