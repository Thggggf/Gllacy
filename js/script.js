const sliderControls = document.querySelectorAll(".slider-control").forEach((item, index, nodeList) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-action")
        const siteBackground = document.querySelector(".page-body__background")
        siteBackground.classList.remove("site-wrapper-1", "site-wrapper-2", "site-wrapper-3")
        siteBackground.classList.add(`site-wrapper-${id.slice(-1)}`);

        document.querySelectorAll(".slider-control").forEach((child) => {
            child.classList.remove("current");
        })

        document.querySelectorAll(".slider-item").forEach((child) => {
            child.classList.remove("slide-current");
        })
        e.target.classList.add("current")
        document.querySelector(`.${id}`).classList.add("slide-current")


    })
})