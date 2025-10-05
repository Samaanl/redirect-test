import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "G.O.G.G.E.L - Gateway Of Global Growth, Education & Learning",
  description:
    "Your gateway to global growth through education and learning. Discover blogs, tools, guides, and motivational content for entrepreneurs and lifelong learners.",
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
