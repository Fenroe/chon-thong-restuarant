import {
    FixedImageSection, TextSection, TextSectionBranding,
    TextSectionLinks, TextSectionParagraph, TextSectionHeading,
    TextSectionImages, ReviewWrapper, InfoWrapper, StoreLocationIframe
} from '../components'

export const Home = () => {
    const orderLinksData = [
        {
            id: 0,
            href: "tel:+358413179819",
            text: "Call Us Directly"
        },
        {
            id: 1,
            href: "https://wolt.com/en/fin/kouvola/restaurant/thai-ravintola-chon-thong",
            text: "Order Through Wolt"
        },
    ]

    const aboutImagesData = [
        {
            id: 0,
            src: "/tables.jpg",
            alt: "Restuarant Interior",
        },
        {
            id: 1,
            src: "/corner-decor.jpg",
            alt: "Restuarant Interior",
        },
        {
            id: 2,
            src: "/tables-2.jpg",
            alt: "Restuarant Interior",
        },
    ]

    const reviewsImagesData = [
        {
            id: 0,
            src: "/food1.jpg",
            alt: "Starter",
        },
        {
            id: 1,
            src: "/food3.jpg",
            alt: "Main",
        },
        {
            id: 2,
            src: "/food11.jpg",
            alt: "Dessert",
        }
    ]

    return (
        <main>
            <FixedImageSection
            extraClassName="home-image-1"
            headingText="Local Thai Cuisine"
            showIcons
            />
            <TextSection id="order">
                <TextSectionBranding />
                <TextSectionHeading text="Order From Home"/>
                <TextSectionParagraph text="We offer a takeaway service so you can enjoy your food in the comfort of your home. You can order in person, over the phone, or online through our partnership with Wolt." />
                <TextSectionLinks linkData={orderLinksData} />
            </TextSection>
            <FixedImageSection
            extraClassName="about-image-1"
            headingText="About Us" />
            <TextSection id="about">
                <TextSectionHeading text="Who We Are" />
                <TextSectionParagraph text="The restaurant was opened in November 2019. Our restaurant serves a hearty Thai buffet from 11:00 a.m. to 3:00 p.m. on weekdays, and our A La Carte menu offers tasty Thai flavors. There is also a wide selection of excellent Asian beers and other Asian drinks, as well as quality wines! Welcome to enjoy the tasty flavors! We also enable private events." />
                <TextSectionImages imageData={aboutImagesData} />
            </TextSection>
            <FixedImageSection
            extraClassName="home-image-2"
            isLink
            headingText="See Our Menu"
            linkUrl="/menu"/>
            <TextSection id="reviews">
                <TextSectionImages imageData={reviewsImagesData} />
                <TextSectionHeading text="Reviews" />
                <ReviewWrapper />
            </TextSection>
            <FixedImageSection
            extraClassName="home-image-3"
            headingText="Plan Your Visit"
            id="contact"/>
            <TextSection id="contact">
                <InfoWrapper />
                <StoreLocationIframe />
            </TextSection>
            <FixedImageSection
            showIcons
            extraClassName="home-image-1"/>
        </main>
    )
}
