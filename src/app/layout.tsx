import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Madhunisha Bala - Data Analyst & ML Engineer',
  description: 'Portfolio showcasing projects, work experience, and expertise in data analysis and machine learning',
  openGraph: {
    type: 'website',
    url: 'https://yourportfolio.com',
    title: 'Madhunisha Bala - Portfolio',
    description: 'Data Analyst & ML Engineer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}