/**
 *
 * @param {object} e
 *
 * Toggles the menu
 */
function toggleMenu(e) {
    e.href = "javascript: void(0)";

    const body = e.parentElement;
    const topNav = body.childNodes[3];

    e.classList.toggle("opened");

    topNav.hidden = !topNav.hidden;
}
