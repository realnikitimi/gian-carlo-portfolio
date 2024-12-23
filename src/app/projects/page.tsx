import type { Metadata } from 'next'

import { Background, Header, Loading } from '~/components'
import GalaxyThree from '~/components/GalaxyThree'
import { TITLE } from '~/utils/constants'

export const metadata: Metadata = {
    title: `${TITLE} - Projects`,
    description: "Here are the various projects I've crafted.",
}

export default async function Projects() {
    return (
        <Background>
            <Header />
            <GalaxyThree>
                <Loading />
            </GalaxyThree>
        </Background>
    )
}
