import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const font = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PictoBooks - Libros personalizados para niños",
  description:
    "Crea libros personalizados donde los niños son los protagonistas de sus propias historias",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
