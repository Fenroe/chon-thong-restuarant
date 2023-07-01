import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { useIntersectionObserver } from "../hooks"

export const InfoRow = ({ mode }) => {
    const { ref, visible } = useIntersectionObserver()

    if (mode === "address") {
        return (
            <div ref={ref} className={`info-row ${visible ? "visible" : "hidden"}`}>
                <div className="info-row-image">
                    <img src="/shelves.jpg" alt="" />
                </div>
                <div className="info-text">
                    <h2>Address</h2>
                    <span>Salpausselänkatu 28 B</span>
                    <span>Kouvola</span>
                    <span>45100</span>
                </div>
            </div>
        )
    }

    if (mode === "hours") {
        return (
            <div ref={ref} className={`info-row ${visible ? "visible" : "hidden"}`}>
                <div className="info-row-image">
                    <img src="/front-of-store.jpg" alt="" />
                </div>
                <div className="info-text">
                    <h2>Hours</h2>
                    <h3>Monday - Thursday</h3>
                    <span>11.00 - 19.00</span>
                    <h3>Friday & Saturday</h3>
                    <span>11.00 - 20.00</span>
                    <h3>Sunday</h3>
                    <span>CLOSED</span>
                </div>
            </div>
        )
    }

    if (mode === "contact") {
        return (
            <div ref={ref} className={`info-row ${visible ? "visible" : "hidden"}`}>
                <div className="info-row-image">
                    <img src="/drinks.jpg" alt="" />
                </div>
                <div className="info-text">
                    <h2>Contact</h2>
                    <div
                    className={`social-media-icons`}>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:thairavintolachonthong@gmail.com"
                        className="icon">
                            <AiOutlineMail />
                        </a>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="tel:+358413179819"
                        className="icon">
                            <AiOutlinePhone />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>InfoRow</div>
    )
}
