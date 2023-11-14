import {
  FixedImageSection,
  TextSection,
  TextSectionBranding,
  TextSectionLinks,
  TextSectionParagraph,
  TextSectionHeading,
  TextSectionImages,
  ReviewWrapper,
  InfoWrapper,
  StoreLocationIframe,
} from "../components";

const orderLinksData = [
  {
    id: 0,
    href: "tel:+358413179819",
    text: "Call Us Directly",
  },
  {
    id: 1,
    href: "https://wolt.com/en/fin/kouvola/restaurant/thai-ravintola-chon-thong",
    text: "Order Through Wolt",
  },
];

export const Home = () => {
  return (
    <main>
      <FixedImageSection
        extraClassName="home-image-1"
        headingText="Local Thai Cuisine"
        showIcons
      />
      <TextSection id="order">
        <TextSectionBranding />
        <div className="">
          <TextSectionHeading text="Order From Home" />
          <TextSectionParagraph text="We offer a takeaway service so you can enjoy your food in the comfort of your home. You can order in person, over the phone, or online through our partnership with Wolt." />
        </div>

        <TextSectionLinks linkData={orderLinksData} />
      </TextSection>
      <FixedImageSection
        extraClassName="about-image-1"
        headingText="About Us"
      />
      <TextSection id="about">
        <div className="">
          <TextSectionHeading text="Who We Are" />
          <TextSectionParagraph text="The restaurant was opened in November 2019. Our restaurant serves a hearty Thai buffet from 11:00 a.m. to 3:00 p.m. on weekdays, and our A La Carte menu offers tasty Thai flavors. There is also a wide selection of excellent Asian beers and other Asian drinks, as well as quality wines! Welcome to enjoy the tasty flavors! We also enable private events." />
        </div>
      </TextSection>
      <FixedImageSection
        extraClassName="home-image-2"
        isLink
        headingText="See Our Menu"
        linkUrl="/menu"
      />
      <TextSection id="reviews">
        <div className="">
          <TextSectionHeading text="Reviews" />
          <ReviewWrapper />
        </div>
      </TextSection>
      <FixedImageSection
        extraClassName="home-image-3"
        headingText="Plan Your Visit"
      />
      <TextSection id="contact">
        <InfoWrapper />
        <StoreLocationIframe />
      </TextSection>
      <FixedImageSection showIcons extraClassName="home-image-1" />
    </main>
  );
};
