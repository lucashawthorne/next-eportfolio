import { Roboto, Ovo } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import the CSS manually
config.autoAddCss = false; // tell FontAwesome to skip adding CSS automatically
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Lucas Hawthorne's Portfolio",
  description: "Have a look at what I made",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${roboto.className} ${ovo.className} antialiased leading-8 overflow-x-hidden
        dark:bg-darkTheme dark:text-white`}
      >
        {children}

        {/* --- PLAUSIBLE ANALYTICS --- */}
        <Script
          async
          src="https://plausible.io/js/pa-C6AAFWBPUT7J4NyTJnCRT.js"
        />

        <Script id="plausible-init">
          {`
            (window.plausible =
              window.plausible ||
              function () {
                (plausible.q = plausible.q || []).push(arguments);
              }),
              (plausible.init =
                plausible.init ||
                function (i) {
                  plausible.o = i || {};
                });
            plausible.init();
          `}
        </Script>
      </body>
    </html>
  );
}
