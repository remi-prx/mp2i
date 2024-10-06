document.addEventListener("DOMContentLoaded", () => {

    console.log("DOMContentLoaded")
    leftpartcontainer = document.getElementById("left-part-webcontainer")
    leftpartembed = document.getElementById("left-part-embed")
    leftparttitle = document.getElementById("right-part-title")
    leftpartcontainer.addEventListener("click", () =>{
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
})

