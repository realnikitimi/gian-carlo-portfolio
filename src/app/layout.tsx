import type { Metadata } from 'next'

import ProviderComponent from '~/redux/ProviderComponent'
import '~/app/globals.css'

type RootLayoutProps = { children: React.ReactNode }

const metadata: Metadata = {
    title: 'Gian Carlo | Dev',
    description: 'Welcome to my Personalized Web Portfolio!',
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>
                <ProviderComponent>{children}</ProviderComponent>
            </body>
        </html>
    )
}

export { metadata }
export type { RootLayoutProps }
export default RootLayout
