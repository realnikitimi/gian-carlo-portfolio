'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { setTheme } from '~/redux/reducers/uiReducer'
import { DIMENSION } from '~/utils/images'
import { ROUTE_PREFIX, ROUTES } from '~/utils/routes'

const Header = () => {
    const darkmode = useAppSelector((state) => state.ui.darkmode)
    const dispatch = useAppDispatch()

    const handleThemeButton = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        const input: HTMLInputElement = e.currentTarget
        const ariaCheckedName = 'aria-checked'
        const ariaChecked = input.getAttribute(ariaCheckedName)
        const span = input.parentElement?.lastElementChild

        dispatch(setTheme(`${!darkmode}`))
        if (ariaChecked === 'true') {
            span?.setAttribute(ariaCheckedName, 'false')
            return input.setAttribute(ariaCheckedName, 'false')
        }
        span?.setAttribute(ariaCheckedName, 'true')
        input.setAttribute(ariaCheckedName, 'true')
    }

    return (
        <header className="fixed inset-x-0 z-10 flex items-center justify-between p-6 duration-300 ease-in-out">
            <section className="flex h-10 w-10 items-center gap-1">
                <Image
                    draggable={false}
                    alt="Syntexia Logo"
                    src="/SyntexiaLogo.svg"
                    sizes={`${DIMENSION.icon}x${DIMENSION.icon}`}
                    height={DIMENSION.icon}
                    width={DIMENSION.icon}
                />
            </section>
            <section className="flex items-center justify-center gap-10 capitalize">
                {ROUTES.map((route) => {
                    return (
                        <Link key={route} href={route} passHref>
                            <p>
                                {route === ROUTE_PREFIX
                                    ? 'home'
                                    : route
                                          .replace(/_/, ' ')
                                          .replace(ROUTE_PREFIX, '')}
                            </p>
                        </Link>
                    )
                })}
            </section>
            <section className="flex items-center gap-10">
                <div className="relative h-8 w-12">
                    <input
                        type="checkbox"
                        aria-checked={darkmode}
                        className="border-blue-syntexia bg-blue-syntexia absolute z-1 h-full w-full rounded-xl border-2 p-2 text-white capitalize opacity-0"
                        onClick={handleThemeButton}
                    />
                    <span
                        aria-checked={darkmode}
                        className="aria-checked:bg-green-syntexia aria-checked:before:animate-color-spin absolute -z-1 h-full w-full cursor-pointer rounded-full bg-slate-300 shadow-sm duration-300 ease-in-out before:absolute before:inset-y-0 before:z-10 before:w-8 before:rounded-full before:bg-white before:duration-300 before:ease-in-out aria-checked:before:translate-x-6"
                    />
                </div>
                <p>Portfolio</p>
            </section>
        </header>
    )
}

export default Header
