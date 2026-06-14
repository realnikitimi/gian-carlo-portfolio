'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Loading } from '~/components'

type ProjectItem = {
    title: string
    imageSrc?: string
    description: string
    stacks: string[]
    status: 'completed' | 'ongoing'
}
type InitialState = {
    item: number
    items: ProjectItem[]
}

const initialState: InitialState = {
    item: 1,
    items: [
        {
            title: 'Real Syntexia',
            imageSrc: '/real-syntexia/preview-1.webp',
            description:
                'Song request gathering for Real Syntexia Piano arrangements',
            stacks: [
                'react-router(framework-mode)',
                'vite',
                'mongodb',
                'spotify-api',
                'redux',
                'redis',
                'zod',
                'uploadthing',
                'typescript',
            ],
            status: 'ongoing',
        },
    ],
}

const Projects = () => {
    const [state, setState] = useState(initialState)

    function handleProjectNavigation(
        e: React.MouseEvent<HTMLButtonElement>,
        navigation: 'prev' | 'next'
    ) {
        const result = navigation === 'next' ? 1 : -1
        setState((p) => ({
            ...p,
            item:
                p.item + result > p.items.length
                    ? p.item
                    : p.item + result < 0
                      ? 1
                      : p.item + result,
        }))
    }

    return (
        <section className="overflow-x-hidden">
            <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${(state.item - 1) * 100}%)` }}
            >
                <RealSyntexia items={state.items} />
            </div>
            {/* <ProjectController
                handleProjectNavigation={handleProjectNavigation}
                isNextDisabled={state.item === state.items.length}
                isPrevDisabled={state.item === 1}
            /> */}
            <Loading />
        </section>
    )
}

// type ProjectControllerProps = {
//     handleProjectNavigation: (
//         e: React.MouseEvent<HTMLButtonElement>,
//         navigation: 'prev' | 'next'
//     ) => void
//     isNextDisabled: boolean
//     isPrevDisabled: boolean
// }

// const ProjectController = (props: ProjectControllerProps) => {
//     const { handleProjectNavigation, isNextDisabled, isPrevDisabled } = props
//     return (
//         <>
//             <button
//                 type="button"
//                 disabled={isPrevDisabled}
//                 onClick={(e) => handleProjectNavigation(e, 'prev')}
//                 className="bg-green-syntexia fixed top-1/2 left-16 translate-y-1/2 cursor-pointer rounded-full p-4 text-xl text-white disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-400"
//             >
//                 👈
//             </button>
//             <button
//                 type="button"
//                 disabled={isNextDisabled}
//                 onClick={(e) => handleProjectNavigation(e, 'next')}
//                 className="bg-green-syntexia fixed top-1/2 right-16 translate-y-1/2 cursor-pointer rounded-full p-4 text-xl text-white disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-400"
//             >
//                 👉
//             </button>
//         </>
//     )
// }

type RealSyntexiaProps = {
    items: ProjectItem[]
}

const RealSyntexia = (props: RealSyntexiaProps) => {
    const { items } = props
    return (
        <section className="flex">
            {items.map(({ title, imageSrc, stacks, description, status }) => (
                <div key={crypto.randomUUID()} className="w-screen shrink p-4">
                    <div className="dark:bg-violet-syntexia/5 bg-violet-syntexia/90 dark:border-blue-syntexia/5 rounded-xl border-2 border-transparent p-4 transition-colors duration-300 ease-in-out">
                        <h2 className="bg-green-syntexia/90 dark:bg-white-syntexia/50 w-max rounded-xl p-2 font-black text-white transition-colors duration-300 ease-in-out dark:text-black">
                            {title}
                        </h2>
                        <div className="mx-auto h-auto w-max p-2">
                            <Link
                                href="https://real-syntexia.vercel.app"
                                target="_blank"
                                passHref
                            >
                                <Image
                                    alt="preview"
                                    src={imageSrc ?? '/favicon.ico'}
                                    width="720"
                                    height="600"
                                    className="bg-green-syntexia/90 dark:bg-white-syntexia/50 rounded-xl object-contain object-center p-4 px-8 transition-colors duration-300 ease-in-out"
                                />
                            </Link>
                        </div>
                        <p className="text-white-syntexia flex flex-col p-8 font-bold">
                            {description}
                            <span className="font-bold text-yellow-600 capitalize">
                                {status}
                            </span>
                        </p>
                        <div>
                            <h3 className="bg-green-syntexia/90 dark:bg-white-syntexia/50 rounded-xl p-2 text-sm font-black text-white transition-colors duration-300 ease-in-out dark:text-black">
                                Built using:
                            </h3>
                            <ul className="text-green-syntexia grid grid-cols-2 gap-6 p-2 text-center font-semibold sm:grid-cols-3 md:grid-cols-6">
                                {stacks.map((language) => (
                                    <li key={language}>{language}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects
