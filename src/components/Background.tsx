'use client'

import { useAppSelector } from '~/redux/hooks'

const Background = (props: any) => {
    const darkmode = useAppSelector((state) => state.ui.darkmode)
    const baseStyles = 'h-full w-full'

    return (
        <div
            className={`${darkmode ? 'dark bg-white dark:bg-black dark:text-white' : ''} ${baseStyles}`.trim()}
        >
            {props.children}
        </div>
    )
}

export default Background
