import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'Generated by create next app',
  icons: [
    {
      media: "(prefers-color-schema: light)",
      url:"/logo.svg",
      href: "/logo.svg"
    },
    {
      media: "(prefers-color-schema: dark)",
      url:"/logo.svg",
      href: "/logo.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey='jotion-theme-2'
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
