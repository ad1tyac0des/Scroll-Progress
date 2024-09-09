const progress = document.querySelector(".progress")
const documentHeight = document.documentElement.scrollHeight
let viewportHeight = document.documentElement.clientHeight

window.addEventListener("resize", function(){
    viewportHeight = document.documentElement.clientHeight
})

document.addEventListener("scroll", function(){
    let percetageScrolled = (scrollY/(documentHeight-viewportHeight))*100;
    progress.style.width = percetageScrolled + "%";
})