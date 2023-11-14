import {
  FixedImageSection,
  TextSection,
  TextSectionBranding,
  TextSectionHeading,
  TextSectionParagraph,
  MenuItems,
  TextSectionImages,
} from "../components";
import { menuData } from "../data";

const menuImagesData = [
  {
    id: 0,
    src: "/food1.webp",
    alt: "Starter",
  },
  {
    id: 1,
    src: "/food3.webp",
    alt: "Main",
  },
  {
    id: 2,
    src: "/food11.webp",
    alt: "Dessert",
  },
];

export const Menu = () => {
  return (
    <main>
      <FixedImageSection
        id="menu-start"
        extraClassName="menu-image-1"
        headingText="The Tastes of Thailand"
      />
      <TextSection>
        <TextSectionBranding disableIntersection />
        <div className="">
          <TextSectionHeading text="Lunch Buffet" disableIntersection />
          <TextSectionParagraph
            text="We offer a hearty lunch buffet on weekdays between the hours of 11.00 - 15.00 for the low price of 12,20 € per person. Drop by for a lunch to remember!"
            disableIntersection
          />
        </div>
        <TextSectionImages imageData={menuImagesData} />
      </TextSection>
      <FixedImageSection
        headingText="AL a Carte"
        extraClassName="menu-image-2"
      />
      <TextSection>
        <div className="">
          <TextSectionHeading text="Starters" disableIntersection />
          <MenuItems menuData={menuData.starters} />
        </div>
        <div className="">
          <TextSectionHeading text="Tofu" disableIntersection />
          <MenuItems menuData={menuData.tofu} />
        </div>
        <div className="">
          <TextSectionHeading text="Chicken" disableIntersection />
          <MenuItems menuData={menuData.chicken} />
        </div>
        <div className="">
          <TextSectionHeading text="Pork" disableIntersection />
          <MenuItems menuData={menuData.pork} />
        </div>
        <div className="">
          <TextSectionHeading text="Beef" disableIntersection />
          <MenuItems menuData={menuData.beef} />
        </div>
        <div className="">
          <TextSectionHeading text="Seafood" disableIntersection />
          <MenuItems menuData={menuData.seafood} />
        </div>
        <div className="">
          <TextSectionHeading text="Duck" disableIntersection />
          <MenuItems menuData={menuData.duck} />
        </div>
        <div className="">
          <TextSectionHeading text="Fried Rice & Noodles" disableIntersection />
          <MenuItems menuData={menuData.friedRiceAndNoodles} />
        </div>
        <div className="">
          <TextSectionHeading text="Cold Dishes" disableIntersection />
          <MenuItems menuData={menuData.coldDishes} />
        </div>
        <div className="">
          <TextSectionHeading text="Dessert" disableIntersection />
          <MenuItems menuData={menuData.dessert} />
        </div>
      </TextSection>
      <FixedImageSection extraClassName="menu-image-1" showIcons />
    </main>
  );
};
