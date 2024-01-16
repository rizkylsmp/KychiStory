import { Baloo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const baloo = Baloo_2({ subsets: ["latin"] });

export const metadata = {
  title: "Kychi Story",
  description: "Website Novel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baloo.className} bg-color-secondary`}
        suppressHydrationWarning={true}
      >
        {/* NAVIGATION BAR */}
        <Navbar />

        {/* PAGES */}
        {children}
      </body>
    </html>
  );
}
