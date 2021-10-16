import React, {useState} from "react";
import ShoppingMenuItem from "./components/ShoppingMenu/shoppingmenu";

function App() {
  const [menuitems, setMenuitems] = useState([
    "Bananas",
    "Kombucha",
    "Chocolate",
    "Hot Chips",
    "Chop Salad",
  ])
  
  return (
    <div>
    <h1>Shopping Menu</h1>
    {menuitems.map((menuitem, index) => (
      <ShoppingMenuItem menuitem={menuitem} key={index} />
    ))}
    </div>
  );
}

export default App;