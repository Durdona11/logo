let icon_search = document.querySelector(".icon-search")
let nav_link = document.querySelector(".nav-link")
let form = document.querySelector(".nav-input-search")
let check_btn = document.querySelector(".nav-check-btn")
let check_icon = document.querySelector(".nav-check-icon")
let check_languaches = document.querySelector(".chek-lengueches")




icon_search.addEventListener("click", () => {
  if (icon_search.classList.contains("bi-search")) {
    nav_link.classList.add("hidden")
    form.classList.remove("hidden")
    form.classList.add("show")
    icon_search.className = "bi bi-x-lg icon-search"
  } else{
    nav_link.classList.remove("hidden")
    form.classList.add("hidden")
    form.classList.remove("show")
    icon_search.className = "bi bi-search icon-search"
  }
})

check_btn.addEventListener("click", ()=>{
    if(check_icon.classList.contains("bi-chevron-up")){
        check_icon.classList.remove("bi-chevron-up")
        check_icon.classList.add("bi-chevron-down")
        check_languaches.classList.remove("hidden")
    } else {
        check_icon.classList.add("bi-chevron-up")
        check_icon.classList.remove("bi-chevron-down")
        check_languaches.classList.add("hidden")
    }
})
