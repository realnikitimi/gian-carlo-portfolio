'use client'

import { useAppSelector } from '~/redux/hooks'

const Background = (props: any) => {
    const darkmode = useAppSelector((state) => state.ui.darkmode)
    const baseStyles = 'absolute -translate-y-1/2 top-1/2 w-full bg-transparent'

    return (
        <main className={`${darkmode ? 'dark' : ''} ${baseStyles}`.trim()}>
            {props.children}
        </main>
    )
}

export default Background
