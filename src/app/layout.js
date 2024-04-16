import "@/styles/fontawesome/css/all.min.css";
import "@/styles/grid.css";
import "@/styles/style.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "MANICE",
  description: "Next.js Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
