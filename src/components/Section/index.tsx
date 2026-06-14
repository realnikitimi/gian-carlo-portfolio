import type { SectionType } from '~/lib/_index'

import { useRef } from 'react'

import SectionItem from '~/components/Section/SectionItem'

const Section = (props: SectionType) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const { sectionTitle, sectionItems, isWavy } = props

    function handleMouseEnter(e: React.MouseEvent<HTMLButtonElement>) {
        const button: HTMLButtonElement = e.currentTarget
        const buttonName =
            (button.childNodes[0] as HTMLImageElement).getAttribute('alt') ??
            'imageAltName'
        const spanClasses =
            'absolute bg-black/90 text-[.5rem] inset-0 flex items-center justify-center rounded-full text-white dark:text-green-syntexia'
        const span = Object.assign(document.createElement('span'), {
            className: spanClasses,
            textContent: buttonName,
        })

        button.setAttribute('aria-expanded', 'true')
        button.appendChild(span)
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
        const button: HTMLButtonElement = e.currentTarget
        const spanElements = button.querySelectorAll('span')

        button.removeAttribute('aria-expanded')
        spanElements.forEach((span) => span.remove())
    }

    return (
        <section
            className={`${isWavy ? 'w-full' : ''} absolute top-1/2 left-1/2 h-124 -translate-1/2`.trim()}
        >
            <div className={`${isWavy ? 'wavy pb-4' : ''}`.trim()}>
                <div className="mx-auto max-w-3xl p-4">
                    <div className="w-full">
                        <h2
                            className={`${isWavy ? 'translate-x-full text-end' : 'translate-x-0'} text-green-syntexia w-1/2 text-3xl font-bold transition-all duration-300 ease-in-out`.trim()}
                        >
                            {sectionTitle}
                        </h2>
                    </div>
                    {sectionItems.map(({ title, value }) => (
                        <SectionItem
                            ref={buttonRef}
                            key={title}
                            title={title}
                            value={value}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section
