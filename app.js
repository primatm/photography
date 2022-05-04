document.querySelector('.btn').onclick = function (e) {
    let menu = document.querySelector('.menu');
    let btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}

const accordions = document.querySelectorAll(".accordion");
accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
    })
})