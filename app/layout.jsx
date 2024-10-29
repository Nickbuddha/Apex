import { Montserrat} from "next/font/google";
import { Mitr } from "next/font/google";
import { Lato } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-bebas',
});


const mitr = Mitr({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-mitr', // 
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700'], 
  variable: '--font-lato', // 
});

export const metadata = {
  title: "Apex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebas.variable} ${lato.variable} ${mitr.variable}`}>{children}</body>
    </html>
  );
}