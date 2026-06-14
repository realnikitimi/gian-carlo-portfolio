'use client'

import Image from 'next/image'

import { DIMENSION } from '~/utils/images'

const LandingPage = () => {
    return (
        <section className="dark:text-white-syntexia -mt-32 bg-transparent duration-300 ease-in-out">
            <div className="after:from-violet-syntexia after:to-violet-syntexia dark:bg-blue-syntexia/80 dark:after:from-violet-syntexia dark:after:to-green-syntexia isolate grid translate-y-16 grid-cols-2 bg-slate-300/80 py-20 duration-300 ease-in-out after:absolute after:inset-0 after:-z-20 after:-skew-y-6 after:bg-linear-to-tr">
                <div className="flex flex-col gap-6 self-end p-8">
                    <h1 className="dark:text-green-syntexia w-max text-2xl font-bold text-slate-300 duration-300 ease-in-out sm:text-3xl lg:text-5xl">
                        Full-Stack Developer
                    </h1>
                    <p className="text-white-syntexia text-sm select-none sm:text-base">
                        {`Hello there! My name is `}
                        <span className="dark:text-green-syntexia text-sm font-semibold text-slate-300 duration-300 ease-in-out select-text sm:text-base">
                            Gian Carlo Carranza
                        </span>
                        <span>{`, based in the Philippines. 📍`}</span>
                    </p>
                </div>
                <div className="border-green-syntexia dark:border-blue-syntexia/80 self-center justify-self-center overflow-hidden rounded-full border-4 transition-colors duration-300 ease-in-out select-none">
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
        </section>
    )
}

export default LandingPage
