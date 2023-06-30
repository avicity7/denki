import './globals.css'
import { Providers } from './providers'
import { Public_Sans, IBM_Plex_Serif } from 'next/font/google'

const PlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap', variable: '--font-plex-serif'})
const PublicSans = Public_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-public-sans' })

export const metadata = {
  title: 'denki',
  description: 'Monitoring your electrical usage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${PublicSans.variable} ${PlexSerif.variable}`}>
      <body>
        <Providers>
          {children}  
        </Providers>
      </body>
    </html>
  )
}
