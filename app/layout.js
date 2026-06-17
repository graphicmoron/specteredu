import { Poppins } from "next/font/google";
import GSAPPlugins from "@/components/GSAPPlugins";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from './../components/Footer';

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const whatsappHref =
  "https://wa.me/995592143783?text=hi%20i%20want%20to%20know%20about%20collges";

export const metadata = {
  title: "Specteredu",
  description: "Specteredu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GSAPPlugins />
        <Navbar />
        {children}
        <Footer />
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
        >
          <svg aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16.02 4C9.4 4 4.03 9.37 4.03 15.99c0 2.11.55 4.18 1.61 6L4 28l6.16-1.61a11.9 11.9 0 0 0 5.86 1.51h.01C22.64 27.9 28 22.53 28 15.91 28 9.34 22.63 4 16.02 4Zm0 21.88h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.65.96.98-3.56-.23-.37a9.94 9.94 0 1 1 8.31 4.56Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
