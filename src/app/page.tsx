'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Background, Header, Loading } from '~/components'
import GalaxyThree from '~/components/GalaxyThree'
import { DIMENSION } from '~/utils/images'

const Main = () => {
    return (
        <main>
            <div className="grid bg-white duration-300 ease-in-out dark:bg-black dark:text-white">
                <GalaxyThree>
                    <div className="after:from-violet-syntexia after:to-violet-syntexia dark:bg-blue-syntexia/80 dark:after:from-violet-syntexia dark:after:to-green-syntexia isolate grid translate-y-16 grid-cols-2 bg-slate-300/80 py-20 duration-300 ease-in-out after:absolute after:inset-0 after:-z-20 after:-skew-y-6 after:bg-linear-to-tr">
                        <div className="flex flex-col gap-6 self-end p-8">
                            <h1 className="dark:text-green-syntexia w-max text-2xl font-bold text-slate-300 duration-300 ease-in-out sm:text-3xl lg:text-5xl">
                                Full-Stack Developer
                            </h1>
                            <p className="text-sm text-slate-300 sm:text-base dark:text-white">
                                Hello there! My name is
                                <span className="dark:text-green-syntexia text-sm font-semibold text-slate-300 duration-300 ease-in-out sm:text-base">
                                    {` Gian Carlo Carranza, `}
                                </span>
                                A passionate Developer based in the Philippines.
                                📍
                            </p>
                        </div>
                        <div className="relative self-center justify-self-center overflow-hidden rounded-full border-4 border-black">
                            <Image
                                priority
                                draggable={false}
                                src="/avatar.jpg"
                                alt="avatar"
                                sizes={`${DIMENSION.image * 2}x${DIMENSION.image * 2}`}
                                width={DIMENSION.image * 2}
                                height={DIMENSION.image * 2}
                            />
                        </div>
                    </div>
                </GalaxyThree>
            </div>
        </main>
    )
}

const MyApp = () => {
    const observer = useRef<IntersectionObserver>(null)
    const [num] = useState(1)

    const DynamicFooter = dynamic(() => import('~/components/Footer'), {
        loading: () => <Loading />,
    })

    useEffect(() => {
        let unsub = true
        function initializeObserver() {
            observer.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const classList = [
                            'opacity-100',
                            'blur-none',
                            'translate-x-0',
                        ]
                        if (entry.isIntersecting)
                            return classList.forEach((className) =>
                                entry.target.classList.add(className)
                            )
                        classList.forEach((className) =>
                            entry.target.classList.remove(className)
                        )
                    })
                },
                {
                    root: document.querySelector('#scrollArea'),
                    rootMargin: '0px',
                    threshold: 0.4,
                }
            )
            const hiddenElements = document.querySelectorAll('section')
            hiddenElements.forEach((el) => observer.current?.observe(el))
        }
        if (unsub) {
            initializeObserver()
        }
        return () => {
            unsub = false
        }
    }, [num])

    return (
        <Background>
            <Header />
            <Main />
            <DynamicFooter />
        </Background>
    )
}

export default MyApp
