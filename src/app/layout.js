import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "src/components/layouts/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک | یاس املاک",
  description: "سایت خرید فروش املاک",
  icons: { icon: './favicon.ico' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
