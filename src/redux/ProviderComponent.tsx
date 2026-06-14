'use client'

// import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

import store from '~/redux/store'
import { useAppDispatch } from '~/redux/hooks'
import { getUI, initializeStarPositions } from '~/redux/reducers/uiReducer'
import { RANDOM_POSITION, STAR_QUANTITIES } from '~/utils/threejsContants'
import { Background, GalaxyThree, Header } from '~/components'

type RootLayoutProps = {
    children: React.ReactNode
}

function ProviderComponent(props: RootLayoutProps) {
    return (
        <Provider store={store}>
            <App {...props} />
            {/* <Analytics /> */}
        </Provider>
    )
}

const App = ({ children }: RootLayoutProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(
            initializeStarPositions({
                position: RANDOM_POSITION,
                quantity: STAR_QUANTITIES,
            })
        )
        dispatch(getUI())
    }, [dispatch])

    return (
        <>
            <GalaxyThree />
            <Header />
            <Background>{children}</Background>
        </>
    )
}

export default ProviderComponent
