document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded")
    leftpartcontainer = document.getElementById("left-part-webcontainer")
    leftpartembed = document.getElementById("left-part-embed")
    leftparttitle = document.getElementById("right-part-title")
    leftpartcontainer.addEventListener("click", () => {
        if (leftpartembed.classList == "open_embed") {
            leftparttitle.textContent = "˅"
            leftpartcontainer.style.height = "70px";
        } else {
            leftparttitle.textContent = "˄"
            leftpartcontainer.style.height = "700px";
        }
        leftpartembed.classList.toggle("open_embed");
        leftpartembed.classList.toggle("closed_embed");
    });
    function addOrRemoveShortcut() {
        const shortcutsContainer = document.querySelector(".shortcuts-container");
        const shortcutMaths = document.getElementById("shortcut-maths");

        if (window.innerWidth < 800) {
            if (!shortcutMaths) {
                const newShortcut = document.createElement("div");
                newShortcut.classList.add("shortcut");
                newShortcut.id = "shortcut-maths";
                newShortcut.innerHTML = `
                    <a href="https://mp2icamilleguerin.blogspot.com/" target="_blank">
                        <img src="/static/icons/math.png" alt="Mathématiques">
                        <h4>Mathématiques</h4>
                    </a>
                `;
                // Ajoute le nouveau raccourci en premier
                shortcutsContainer.insertAdjacentElement('afterbegin', newShortcut);
            }
        } else {
            if (shortcutMaths) {
                shortcutsContainer.removeChild(shortcutMaths);
            }
        }
    }

    addOrRemoveShortcut();

    const redirect_bar = document.getElementById("footer-redirect")
    redirect_bar.addEventListener("click",()=>{
        window.location.href = "https://lydre.onrender.com/"
    })

    window.addEventListener("resize", addOrRemoveShortcut);
});
