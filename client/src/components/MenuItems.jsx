import { GiChiliPepper } from "react-icons/gi"

export const MenuItems = ({ menuData }) => {
    return (
        <div className="menu-items-wrapper">
            {menuData.map((menuItem) =>
                <div key={`menu-item${menuItem.id}`} className="menu-item">
                    <h2>{`${menuItem.id}. ${menuItem.name}`}</h2>
                    <span className="menu-item-price-and-spice">
                        <span>{new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR"}).format(menuItem.price)}</span>
                        {menuItem.spice > 0 && <span className="divide">|</span>}
                        {menuItem.spice > 0 &&
                        <span className="menu-item-spice">
                            {Array.from({ length: menuItem.spice }).map((_, index) =>
                            <GiChiliPepper key={`menu-item${menuItem.id}-spice-${index}`}/>)}
                        </span>}
                    </span>
                </div>
            )}
        </div>
    )
}