import Image from 'next/image'
import { forwardRef } from 'react'

import type { SectionType } from '~/lib/_index'
import { processDevIconToUrl, type DevIconType } from '~/lib/devIcons'
import { DIMENSION } from '~/utils/images'

type SectionItemProps = {
    title: string
    value: SectionType['sectionItems'][number]['value']
    handleMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const SectionItem = forwardRef<HTMLButtonElement, SectionItemProps>(
    (props, buttonRef) => {
        const { title, value, handleMouseEnter, handleMouseLeave } = props
        const isIcon = Object.keys(value[0]).includes('type')
        const iconStyles =
            'w-fit overflow-hidden rounded-full hover:scale-105 dark:bg-white/80'
        const otherStyles = 'w-fit'

        return (
            <div>
                <h6 className="bg-blue-syntexia/80 text-white-syntexia dark:text-violet-syntexia my-4 rounded-xl p-4 font-semibold shadow-sm transition-colors duration-300 ease-in-out md:min-w-184 dark:bg-white/80">
                    {`${title}: `}
                </h6>
                <ul
                    className={`${
                        isIcon ? 'grid-cols-6 gap-8 lg:grid-cols-10' : ''
                    } grid`}
                >
                    {value
                        .sort((a, b) => (a.name < b.name ? -1 : 1))
                        .map((props, index: number) => {
                            const iconUrl = processDevIconToUrl(
                                props as DevIconType
                            )
                            const keyLength = Object.keys(props).length
                            const isKeysGreaterThanOne = keyLength > 1
                            return (
                                <li
                                    className={
                                        isKeysGreaterThanOne
                                            ? iconStyles
                                            : otherStyles
                                    }
                                    key={index}
                                >
                                    {isKeysGreaterThanOne ? (
                                        <button
                                            ref={buttonRef}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            className="relative h-12 w-12 p-2"
                                        >
                                            <Image
                                                src={iconUrl}
                                                alt={props.name}
                                                sizes={`${DIMENSION.icon}x${DIMENSION.icon}`}
                                                width={DIMENSION.icon}
                                                height={DIMENSION.icon}
                                            />
                                        </button>
                                    ) : (
                                        <p className="text-slate-300 dark:text-white/80">
                                            {props.name}
                                        </p>
                                    )}
                                </li>
                            )
                        })}
                </ul>
            </div>
        )
    }
)

export default SectionItem
