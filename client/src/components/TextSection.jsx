export const TextSection = ({ children, id }) => {
    return (
        <section className="text-wrapper" id={id || ""}>
            <div className="text-inner-wrapper">
                {children}
            </div>
        </section>
    )
}
