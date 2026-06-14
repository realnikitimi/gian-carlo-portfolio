'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '~/redux/hooks'
import { setTheme } from '~/redux/reducers/uiReducer'
import { DIMENSION } from '~/utils/images'
import { ROUTE_PREFIX, ROUTES } from '~/utils/routes'

const Header = () => {
    const isDarkMode = useAppSelector((state) => state.ui.darkmode)
    const dispatch = useAppDispatch()
    const pathname = usePathname()

    const handleThemeButton = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        const input: HTMLInputElement = e.currentTarget
        const ariaCheckedName = 'aria-checked'
        const ariaChecked = input.getAttribute(ariaCheckedName)
        const span = input.parentElement?.lastElementChild

        dispatch(setTheme(`${!isDarkMode}`))
        if (ariaChecked === 'true') {
            span?.setAttribute(ariaCheckedName, 'false')
            return input.setAttribute(ariaCheckedName, 'false')
        }
        span?.setAttribute(ariaCheckedName, 'true')
        input.setAttribute(ariaCheckedName, 'true')
    }

    function handleLinkStyle(isSelected: boolean): string {
        const baseStyles = 'transition-colors duration-300 ease-in-out w-24'
        const isSelectedBaseStyles = 'font-black'
        const isSelectedStyles = `data-[selected="true"]:text-green-syntexia ${isSelectedBaseStyles}`
        const isSelectedDarkStyles = `data-[selected="true"]:text-green-syntexia ${isSelectedBaseStyles}`
        const notSelectedStyles = 'text-black'
        const notSelectedDarkStyles = 'text-white'

        if (isSelected && isDarkMode)
            return `${isSelectedDarkStyles} ${baseStyles}`
        if (isSelected && !isDarkMode)
            return `${isSelectedStyles} ${baseStyles}`
        if (!isSelected && isDarkMode)
            return `${notSelectedDarkStyles} ${baseStyles}`
        return `${notSelectedStyles} ${baseStyles}`
    }

    return (
        <header className="fixed inset-x-0 z-1">
            <section className="absolute top-16 left-16">
                <Image
                    draggable={false}
                    alt="Syntexia Logo"
                    src="/SyntexiaLogo.svg"
                    sizes={`${DIMENSION.icon}x${DIMENSION.icon}`}
                    height={DIMENSION.icon}
                    width={DIMENSION.icon}
                />
            </section>
            <section className="absolute top-18 left-1/2 -translate-x-1/2">
                <ul className="flex items-center justify-center gap-24 capitalize">
                    {ROUTES.map((route) => {
                        const isSelected = pathname === route
                        return (
                            <li
                                key={route}
                                data-selected={isSelected}
                                className={handleLinkStyle(isSelected).trim()}
                            >
                                <Link href={route} passHref>
                                    {route === ROUTE_PREFIX
                                        ? 'home'
                                        : route
                                              .replace(/_/, ' ')
                                              .replace(ROUTE_PREFIX, '')}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="absolute top-18 right-16">
                <div className="relative h-8 w-14">
                    <input
                        type="checkbox"
                        aria-checked={isDarkMode}
                        className="border-blue-syntexia bg-blue-syntexia absolute z-1 h-full w-full rounded-xl border-2 p-2 text-white capitalize opacity-0"
                        onClick={handleThemeButton}
                    />
                    <span
                        aria-checked={isDarkMode}
                        className="aria-checked:bg-green-syntexia aria-checked:before:animate-color-spin absolute -z-1 h-full w-full cursor-pointer rounded-full bg-slate-300 shadow-sm duration-300 ease-in-out before:absolute before:inset-y-0 before:z-10 before:w-8 before:rounded-full before:bg-white before:duration-300 before:ease-in-out aria-checked:before:translate-x-6"
                    />
                </div>
            </section>
        </header>
    )
}

export default Header
