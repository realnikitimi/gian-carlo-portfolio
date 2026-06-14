const Loading = () => {
    return (
        <section
            className="flex flex-wrap items-center justify-center gap-2"
            aria-description="loading component"
        >
            <div className="flex flex-col text-center">
                <p className="text-yellow-300">⚠ Men at work ⚠</p>
                <p className="text-black transition-colors duration-300 ease-in-out dark:text-white">
                    Upgrades coming soon
                </p>
            </div>
            <LoadingDot />
            <LoadingDot delay="delay-2" />
            <LoadingDot delay="delay-3" />
        </section>
    )
}

type Delay = 'delay-2' | 'delay-3'
type LoadingDotProps = {
    delay?: Delay
}
const LoadingDot = (props: LoadingDotProps) => (
    <p
        className={`${props.delay ?? 'delay-1'} animate-loading text-black transition-colors duration-300 ease-in-out select-none dark:text-white`.trim()}
    >
        .
    </p>
)

export default Loading
