import { Roboto_Slab, Ovo } from "next/font/google";
import "./globals.css";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Lucas Hawthorne's Eportfolio",
  description: "Have a look at what I made",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto_slab.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
