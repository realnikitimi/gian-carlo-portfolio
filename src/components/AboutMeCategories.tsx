'use client'
import React, { useState } from 'react'
import * as Lib from '~/lib/_index'
import { Section } from './Section'
import { classesArrayToString } from '~/utils/classNames'

type LibType = 'musician' | 'web'

export default function AboutMeCategories() {
    const values = ['web', 'musician'] as LibType[]
    const [state, setState] = useState<Lib.SectionType>(Lib[values[0]])
    const activeButtonClasses = ['bg-green-syntexia', 'font-bold']
    const baseButtonClasses = [
        'capitalize',
        'p-2',
        'rounded-lg',
        'text-white-syntexia',
    ]

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.currentTarget as HTMLButtonElement
        button.parentElement?.querySelectorAll('button').forEach((btn) => {
            btn.classList.remove(...activeButtonClasses)
        })
        button.classList.add(...activeButtonClasses)
        setState(Lib[button.textContent as LibType] as Lib.SectionType)
    }

    return (
        <>
            <div className="flex w-full items-center justify-center gap-2">
                {values.map((meAsA, index) => {
                    const isFirstItem = index === 0
                    return (
                        <button
                            className={`${isFirstItem ? classesArrayToString(...activeButtonClasses) : ''} ${classesArrayToString(
                                ...baseButtonClasses
                            )}`}
                            key={meAsA}
                            onClick={handleClick}
                        >
                            {meAsA}
                        </button>
                    )
                })}
            </div>
            <Section {...state} />
        </>
    )
}
