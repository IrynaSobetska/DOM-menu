import filterMenuItem from "../handlers/filterMenuItem.js";

const createMenuButton = (btnData) => {
  // create button
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = btnData.text;
  btn.id = btnData.id;
  btn.classList.add("filter-btn");

  // add event to button
  btn.addEventListener("click", () => {
    const id = btn.id;
    filterMenuItem(id);
  });

  return btn;
};

export default createMenuButton;
