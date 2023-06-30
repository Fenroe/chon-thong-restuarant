import { useIntersectionObserver } from "../hooks"

export const StoreLocationIframe = () => {
    const { ref, visible } = useIntersectionObserver()

    return (
        <div ref={ref} className={`iframe-wrapper ${visible ? "visible" : "hidden"}`}>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Salpaussel%C3%A4nkatu%2028%20B%20Kouvola%2045100+(Chon%20Thong%20Thai%20Ravintola)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
            </iframe>
        </div>
    )
}
