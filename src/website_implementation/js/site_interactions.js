// fuction to update ARIA attributes
const updateAriaAttributes = () => {
    const width = window.innerWidth;
    const header_menu = document.getElementsByClassName("top-nav")[0];
    const footer_menu = document.getElementsByClassName("flex-footer-menu")[0];
    const side_menu = document.getElementsByClassName("flex-side-menu")[0];
    // [0] gets the first element
}

if (width <= 600) {
    header_menu.setAtrribute("aria-hidden", "true");
    side_menu.setAtrribute("aria-hidden", "true");
    footer_menu.setAtrribute("aria-hidden", "false");

} else if (width <= 1194) {
    header_menu.setAtrribute("aria-hidden", "true");
    side_menu.setAtrribute("aria-hidden", "false");
    footer_menu.setAtrribute("aria-hidden", "true");
} else {
    header_menu.setAtrribute("aria-hidden", "false");
    side_menu.setAtrribute("aria-hidden", "true");
    footer_menu.setAtrribute("aria-hidden", "true");
}

// run this code then the page first loads
updateAriaAttributes();
window.addEventListener("resize", updateAriaAttributes);