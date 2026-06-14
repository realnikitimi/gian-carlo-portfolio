'use client'

import React, { useState } from 'react'
import { Footer } from '~/components'

import Section from '~/components/Section'

import * as Lib from '~/lib/_index'
import { classesArrayToString } from '~/utils/classNames'

type LibType = 'musician' | 'web'

const AboutMe = () => {
    const values = ['web', 'musician'] as LibType[]
    const [state, setState] = useState<Lib.SectionType>(Lib[values[0]])
    const activeButtonClasses = [
        'bg-green-syntexia',
        'font-bold',
        'text-white-syntexia',
    ]

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.currentTarget as HTMLButtonElement
        button.parentElement?.parentElement
            ?.querySelectorAll('button')
            .forEach((btn) => {
                btn.classList.remove(...activeButtonClasses)
            })
        button.classList.add(...activeButtonClasses)
        setState(Lib[button.textContent as LibType] as Lib.SectionType)
    }

    return (
        <section className="fixed inset-0">
            <AboutMeController
                handleClick={handleClick}
                activeButtonClasses={activeButtonClasses}
                aboutMeList={values}
            />
            <Section {...state} />
            <Footer />
        </section>
    )
}

type AboutMeControllerProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    activeButtonClasses: string[]
    aboutMeList: LibType[]
}

const AboutMeController = (props: AboutMeControllerProps) => {
    const { handleClick, activeButtonClasses, aboutMeList } = props
    const baseButtonClasses = [
        'capitalize',
        'p-2',
        'rounded-lg',
        'dark:text-white-syntexia',
        'text-black-syntexia',
        'w-32',
        'transition-colors',
        'duration-300',
        'ease-in-out',
        'cursor-pointer',
    ]
    return (
        <div
            className="absolute bottom-80 left-1/2 -translate-x-1/2"
            aria-description="about-me-controller"
        >
            <ul className="flex items-center justify-between gap-8">
                {aboutMeList.map((meAsA, index) => {
                    const isFirstItem = index === 0
                    return (
                        <li key={meAsA}>
                            <button
                                className={`${isFirstItem ? classesArrayToString(...activeButtonClasses) : ''} ${classesArrayToString(
                                    ...baseButtonClasses
                                )}`.trim()}
                                onClick={handleClick}
                            >
                                {meAsA}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AboutMe
