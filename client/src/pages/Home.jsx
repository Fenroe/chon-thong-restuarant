import { AiFillStar } from 'react-icons/ai'

export const Home = () => {
    return (
        <main>
            <section className="image-wrapper home-image-1">
                <div className="image-wrapper-heading">
                    <h1>Local Thai Cuisine</h1>
                </div>
            </section>
            <section className="text-wrapper">
                <img src="/logo.jpg" alt="Chon Thong Thai Ravintola Kouvola" className="text-group-icon"/>
                <h1>Order From Home</h1>
                <p>You can order from our restuarant over the phone to pick up and enjoy from the comfort of your own home.</p>
                <a href="">Click here to learn more</a>
            </section>
            <section className="image-wrapper home-image-2">
                <div className="image-wrapper-heading heading-link">
                    <a href="">See Our Menu</a>
                </div>
            </section>
            <section className="text-wrapper">
                <div className="menu-preview-images-wrapper">
                    <img src="/food1.jpg" alt="Starter" className="menu-preview-image" />
                    <img src="/food3.jpg" alt="Main" className="menu-preview-image" />
                    <img src="/food11.jpg" alt="Dessert" className="menu-preview-image" />
                </div>
                <h1>Reviews</h1>
                <div className="reviews-wrapper">
                    <article className='review'>
                        <div className="review-stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>Food was delicious. Not so many places serve you dishes as hot and tasty as the authentic ones. I really urge you to buy their homemade chili paste!</p>
                    </article>
                    <article className='review'>
                        <div className="review-stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>Exelllent lunch buffet. Great Authentic Thai Kitchen. The whole family enjoyed. Vegetarian choises also available.</p>
                    </article>
                    <article className='review'>
                        <div className="review-stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>Good food, good service, good atmosphere. Highly recommend for anyone looking for some good Thai food.</p>
                    </article>
                    <article className='review'>
                        <div className="review-stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>This is a definite ”MUST visit” restaurant in Kouvola. By far the best thai food I have had in Finland.</p>
                    </article>
                    <article className='review'>
                        <div className="review-stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>Enjoyed great food with my wife and bought some Thai seasonings to make Thai food at home!! Recommend to check in Kouvola.</p>
                    </article>
                    <article className='review'>
                        <div className="review-stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p>Good and genuine thai flavors! Beautiful Interior! Suggest to everyone. Love Thailand and Thai food!!</p>
                    </article>
                </div>
            </section>
            <section className="image-wrapper home-image-3">
                <div className="image-wrapper-heading heading-link">
                    <a href="">Plan Your Visit</a>
                </div>
            </section>
        </main>
    )
}

/*
      <section className="parallax-group text-group">
        <div className="group-content-wrapper">

        </div>
      </section>

      

*/

