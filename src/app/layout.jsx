// These styles apply to every route in the application
import './globals.css'

export const metadata = {
  title: 'John Kimani M.',
  description: 'Software Developer Extraodinare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
