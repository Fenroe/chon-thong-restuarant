export const About = () => {
    return (
        <main>
            <section className="image-wrapper about-image-1">
                <div className="image-wrapper-heading">
                    <h1>About Us</h1>
                </div>
            </section>
            <section className="text-wrapper">
                <img src="/logo.jpg" alt="Chon Thong Thai Ravintola Kouvola" className="text-group-icon"/>
                <h1>Our Story</h1>
                <p>Thai Restaurant Chon Thong. The restaurant was opened in November 2019. Our restaurant serves a hearty Thai buffet from 11:00 a.m. to 3:00 p.m. on weekdays, and our A La Carte menu offers tasty Thai flavors. There is also a wide selection of excellent Asian beers and other Asian drinks, as well as quality wines! Welcome to enjoy the tasty flavors! We also enable private events.</p>
                <div className="images-grid-wrapper">
                    <img src="/tables.jpg" alt="Restuarant Interior" className="image" />
                    <img src="/corner-decor.jpg" alt="Restuarant Interior" className="image" />
                    <img src="/tables-2.jpg" alt="Restuarant Interior" className="image" />
                </div>
            </section>
            <section className="image-wrapper about-image-1" />
        </main>
    )
}
