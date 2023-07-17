// import
import { data, dom } from "./data.js";
import createMenuItem from "./components/createMenuItem.js";
import createMenuButton from "./components/createMenuButton.js";

// show item by default
data.menu.forEach((itemData) => {
  const itemDom = createMenuItem(itemData);
  dom.sectionCenter.append(itemDom);
});

// show buttons
data.button.forEach((btnData) => {
  const btnDom = createMenuButton(btnData);
  dom.btnContainer.append(btnDom);
});
