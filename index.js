document.addEventListener("DOMContentLoaded", () => {

    console.log("DOMContentLoaded")
    leftpartcontainer = document.getElementById("left-part-webcontainer")
    leftpartembed = document.getElementById("left-part-embed")
    leftparttitle = document.getElementById("left-part-title")
    leftpartcontainer.addEventListener("click", () =>{
        if (leftpartembed.classList == "open_embed") {
            leftparttitle.textContent = "Site de Mathématiques ˅"
            leftpartcontainer.style.height = "70px";
        } else {
            leftparttitle.textContent = "Site de Mathématiques ˄"
            leftpartcontainer.style.height = "700px";
        }
        leftpartembed.classList.toggle("open_embed");
        leftpartembed.classList.toggle("closed_embed");
    });
    rightpartcontainer = document.getElementById("right-part-webcontainer")
    rightpartembed = document.getElementById("right-part-embed")
    rightparttitle = document.getElementById("right-part-title")
    rightpartcontainer.addEventListener("click", () =>{
        if (rightpartembed.classList == "open_embed") {
            rightparttitle.textContent = "Site d'Info et de Physique ˅"
            rightpartcontainer.style.height = "70px";

        } else {
            rightparttitle.textContent = "Site d'Info et de Physique ˄"
            rightpartcontainer.style.height = "700px";
        }
        rightpartembed.classList.toggle("open_embed");
        rightpartembed.classList.toggle("closed_embed");
    })
})

