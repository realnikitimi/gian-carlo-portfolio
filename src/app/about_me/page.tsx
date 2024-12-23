import type { Metadata } from 'next'

import { Background, Header } from '~/components'
import AboutMeCategories from '~/components/AboutMeCategories'
import GalaxyThree from '~/components/GalaxyThree'
import { TITLE } from '~/utils/constants'

export const metadata: Metadata = {
    title: `${TITLE} - About me`,
    description: 'Know more about the Developer behind these amazing website!',
}

export default function AboutMe() {
    return (
        <Background>
            <Header />
            <GalaxyThree>
                <AboutMeCategories />
            </GalaxyThree>
        </Background>
    )
}
