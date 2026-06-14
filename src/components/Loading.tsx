const Loading = () => {
    return (
        <section
            className="flex flex-wrap items-center justify-center gap-2"
            aria-description="loading component"
        >
            <p className="flex flex-col text-center">
                <span className="text-yellow-300">⚠ Men at work ⚠</span>
                Upgrades coming soon
            </p>
            <p className="animate-loading delay-1">.</p>
            <p className="animate-loading delay-2">.</p>
            <p className="animate-loading delay-3">.</p>
        </section>
    )
}

export default Loading
