import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google",
  description:
    "Search the world's information, including webpages, images, videos and more. Goggel.in has many special features to help you find exactly what you're looking for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          ></script>
        )}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
