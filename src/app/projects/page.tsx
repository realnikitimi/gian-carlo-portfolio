'use client'

import { Background, Header, Loading } from '~/components'
import GalaxyThree from '~/components/GalaxyThree'

const Projects = () => {
    return (
        <Background>
            <Header />
            <GalaxyThree>
                <Loading />
            </GalaxyThree>
        </Background>
    )
}

export default Projects
