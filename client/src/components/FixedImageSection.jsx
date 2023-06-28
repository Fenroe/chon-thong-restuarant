export const FixedImageSection = ({ extraClassName, isLink, headingText, linkUrl }) => {
    return (
        <section className={`image-wrapper ${extraClassName}`}>
            {isLink ?
            <div className="image-wrapper-heading heading-link">
                <a href={linkUrl}>{headingText}</a>
            </div>
            :
            <div className="image-wrapper-heading">
                <h1>{headingText}</h1>
            </div>
            }
        </section>
    )
}
