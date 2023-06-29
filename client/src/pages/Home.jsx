import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FixedImageSection, Review, TextSection } from '../components'
import { reviews } from '../data'

export const Home = () => {
    return (
        <main>
            <FixedImageSection
            extraClassName="home-image-1"
            headingText="Local Thai Cuisine"
            showIcons
            />
            <TextSection id="order">
                <img src="/logo.jpg" alt="Chon Thong Thai Ravintola Kouvola" className="text-group-icon"/>
                <h1>Order From Home</h1>
                <p>We offer a takeaway service so you can enjoy your food in the comfort of your home. You can order in person, over the phone, or online through our partnership with Wolt.</p>
                <div className="links-wrapper">
                    <a href="tel:+358413179819">Call Us Directly</a>
                    <a href="https://wolt.com/en/fin/kouvola/restaurant/thai-ravintola-chon-thong">Order Through Wolt</a>
                </div>
            </TextSection>
            <FixedImageSection
            extraClassName="about-image-1"
            headingText="About Us"
            id="about"/>
            <TextSection id="about">
                <h1>Who We Are</h1>
                <p>The restaurant was opened in November 2019. Our restaurant serves a hearty Thai buffet from 11:00 a.m. to 3:00 p.m. on weekdays, and our A La Carte menu offers tasty Thai flavors. There is also a wide selection of excellent Asian beers and other Asian drinks, as well as quality wines! Welcome to enjoy the tasty flavors! We also enable private events.</p>
                <div className="images-grid-wrapper">
                    <img src="/tables.jpg" alt="Restuarant Interior" className="image" />
                    <img src="/corner-decor.jpg" alt="Restuarant Interior" className="image" />
                    <img src="/tables-2.jpg" alt="Restuarant Interior" className="image" />
                </div>
            </TextSection>
            <FixedImageSection
            extraClassName="home-image-2"
            isLink
            headingText="See Our Menu"
            linkUrl="/menu"/>
            <TextSection id="reviews">
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
            headingText="Plan Your Visit"
            id="contact"/>
            <TextSection id="contact">
                <div className="info-wrapper">
                    <div className="info-row">
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
                    <div className="info-row">
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
                    <div className="info-row">
                        <div className="info-row-image">
                            <img src="/drinks.jpg" alt="" />
                        </div>
                        <div className="info-text">
                            <h2>Contact</h2>
                            <div
                            className={`social-media-icons`}>
                                <a href="mailto:thairavintolachonthong@gmail.com" className="icon">
                                    <AiOutlineMail />
                                </a>
                                <a href="tel:+358413179819" className="icon">
                                    <AiOutlinePhone />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="iframe-wrapper">
                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Salpaussel%C3%A4nkatu%2028%20B%20Kouvola%2045100+(Chon%20Thong%20Thai%20Ravintola)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
                    </iframe>
                </div>
            </TextSection>
            <FixedImageSection
            showIcons
            extraClassName="home-image-1"/>
        </main>
    )
}
