import { FixedImageSection, Review, TextSection } from '../components'
import { reviews } from '../data'

export const Home = () => {
    return (
        <main>
            <FixedImageSection
            extraClassName="home-image-1"
            headingText="Local Thai Cuisine"/>
            <TextSection>
                <img src="/logo.jpg" alt="Chon Thong Thai Ravintola Kouvola" className="text-group-icon"/>
                <h1>Order From Home</h1>
                <p>You can order from our restuarant over the phone to pick up and enjoy from the comfort of your own home.</p>
                <a href="">Click here to learn more</a>
            </TextSection>
            <FixedImageSection
            extraClassName="home-image-2"
            isLink
            headingText="See Our Menu"/>
            <TextSection>
                <div className="menu-preview-images-wrapper">
                    <img src="/food1.jpg" alt="Starter" className="menu-preview-image" />
                    <img src="/food3.jpg" alt="Main" className="menu-preview-image" />
                    <img src="/food11.jpg" alt="Dessert" className="menu-preview-image" />
                </div>
                <h1>Reviews</h1>
                <div className="reviews-wrapper">
                    {reviews.map((review) =>
                    <Review
                    key={`review${review.id}`}
                    rating={review.rating}
                    text={review.text}/>)}
                </div>
            </TextSection>
            <FixedImageSection
            extraClassName="home-image-3"
            isLink
            headingText="Plan Your Visit"/>
        </main>
    )
}
