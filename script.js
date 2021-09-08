const panels = document.querySelectorAll('.panel')
// Loping Items
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Removing items After Loading
function removeActiveClasses() {
    panels.forEach(x => {
        x.classList.remove('active')
    })
}