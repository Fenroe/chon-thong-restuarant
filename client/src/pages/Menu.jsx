import { FixedImageSection, TextSection, TextSectionBranding, TextSectionHeading, TextSectionParagraph, MenuItems } from "../components"
import { menuData } from "../data"

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
                <TextSectionHeading text="Lunch Buffet" disableIntersection />
                <TextSectionParagraph text="We offer a hearty lunch buffet on weekdays between the hours of 11.00 - 15.00 for the low price of 12,20 € per person. Drop by for a lunch to remember!" disableIntersection />
            </TextSection>
            <FixedImageSection
            headingText="Starters"
            extraClassName="menu-image-2"/>
            <TextSection>
                <TextSectionHeading text="Starters" disableIntersection />
                <MenuItems menuData={menuData.starters}/>
            </TextSection>
            <FixedImageSection
            headingText="Mains"
            extraClassName="menu-image-3"/>
            <TextSection>
                <TextSectionHeading text="Tofu" disableIntersection />
                <MenuItems menuData={menuData.tofu} />
                <TextSectionHeading text="Chicken" disableIntersection />
                <MenuItems menuData={menuData.chicken} />
                <TextSectionHeading text="Pork" disableIntersection />
                <MenuItems menuData={menuData.pork} />
                <TextSectionHeading text="Beef" disableIntersection />
                <MenuItems menuData={menuData.beef} />
                <TextSectionHeading text="Seafood" disableIntersection />
                <MenuItems menuData={menuData.seafood} />
                <TextSectionHeading text="Duck" disableIntersection />
                <MenuItems menuData={menuData.duck} />
                <TextSectionHeading text="Fried Rice & Noodles" disableIntersection />
                <MenuItems menuData={menuData.friedRiceAndNoodles} />
                <TextSectionHeading text="Cold Dishes" disableIntersection />
                <MenuItems menuData={menuData.coldDishes} />
            </TextSection>
            <FixedImageSection
            headingText="Dessert"
            extraClassName="menu-image-4"/>
            <TextSection>
                <TextSectionHeading text="Dessert" disableIntersection />
                <MenuItems menuData={menuData.dessert} />
            </TextSection>
            <FixedImageSection
            extraClassName="menu-image-1"
            showIcons
            />
        </main>
    )
}
