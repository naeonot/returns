/*
 * RETURNS — FUN / EXPERIMENTAL JS
 * Temporary popup for Donate, Support, Download, Sign up, and Join.
 * Remove this file + its stylesheet link to undo the experiment.
 */
(() => {
  const popup = document.createElement("div");
  popup.className = "fun-popup";
  popup.setAttribute("aria-hidden", "true");
  popup.innerHTML = `
    <div class="fun-popup__panel" role="dialog" aria-modal="true" aria-label="Returns popup">
      <button class="fun-popup__close" type="button" aria-label="Close popup">&times;</button>
      <img class="fun-popup__image" src="./assets/images/homeless-emoticon.jpg" alt="Popup image" />
    </div>
  `;
  document.body.appendChild(popup);

  const closeButton = popup.querySelector(".fun-popup__close");
  const openPopup = (event) => {
    event.preventDefault();
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
  };
  const closePopup = () => {
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelector('.main-nav a[href="#download"]')?.addEventListener("click", openPopup);
  document.querySelector('.main-nav a[href="#support"]')?.addEventListener("click", openPopup);
  document.querySelector('#support a[href="#support"]')?.addEventListener("click", openPopup);
  document.querySelector(".signup-link")?.addEventListener("click", openPopup);
  document.querySelector(".newsletter-controls button")?.addEventListener("click", openPopup);

  closeButton.addEventListener("click", closePopup);
  popup.addEventListener("click", (event) => {
    if (event.target === popup) closePopup();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && popup.classList.contains("is-open")) closePopup();
  });
})();
