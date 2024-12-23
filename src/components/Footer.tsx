'use client'
import Image from 'next/image'
import Link from 'next/link'
import { DEV_ICON_BASE_URL } from '~/lib/devIcons'
import { DIMENSION } from '~/utils/images'

type SocialDetailType = {
    href: string
    src?: string
    alt: string
    delay?: string
}

const Footer = () => {
    const social: SocialDetailType[] = [
        {
            href: 'https://www.facebook.com/SyntexiaNikiTimi',
            alt: 'facebook',
        },
        {
            href: 'https://github.com/nikitimi',
            alt: 'github',
        },
        {
            href: 'https://www.youtube.com/@realsyntexia',
            src: 'https://www.youtube.com/s/desktop/5766dddc/img/favicon_96x96.png',
            alt: 'youtube',
        },
        {
            href: 'https://www.linkedin.com/in/giancarlo-carranza/',
            alt: 'linkedin',
        },
    ]

    return (
        <footer className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-2 p-4 text-white">
            <div className="flex flex-col flex-wrap gap-2">
                <nav className="flex flex-wrap items-center justify-center gap-4 rounded-lg bg-white-syntexia/50 px-4 py-2">
                    {social
                        .sort((a, b) => (a.alt >= b.alt ? 1 : -1))
                        .map(({ href, src, ...rest }, I: number) => (
                            <Link key={I} href={href} passHref>
                                <div className="-p-2 h-full w-full rounded-full duration-300 ease-in-out hover:scale-150 hover:rounded-full hover:bg-white-syntexia">
                                    {/* eslint-disable-next-line */}
                                    <Image
                                        {...rest}
                                        src={
                                            src === undefined
                                                ? `${DEV_ICON_BASE_URL}${rest.alt}/${rest.alt}-original.svg`
                                                : src
                                        }
                                        sizes={`${DIMENSION.icon}x${DIMENSION.icon}`}
                                        width={DIMENSION.icon}
                                        height={DIMENSION.icon}
                                    />
                                </div>
                            </Link>
                        ))}
                </nav>
            </div>
            {/* <div>
                <Link
                    className="text-start underline"
                    href="mailto:carranzagcarlo@gmail.com"
                    passHref
                >
                    Contact Me
                </Link>
            </div> */}
        </footer>
    )
}

export default Footer
