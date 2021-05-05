const section = document.querySelector('.section')
const toggle = document.querySelector('.toggle')

toggle.onclick = function () {
    section.classList.toggle('dark')
}
