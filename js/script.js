//Карусель изображений

const leftButton = document.querySelector(".image__left")
const images = document.querySelectorAll(".main__image img")
const rightButton = document.querySelector(".image__right")

function findIndex(images) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains("active")) {
            return i
        } 
    }
} 

function scrollLeft (images) {
    const activeIndex = findIndex(images)
    let nextIndex
    images[activeIndex].style.animation = "animate-left 0.8s"
    activeIndex === images.length - 1 
    ? nextIndex = 0 
    : nextIndex = activeIndex + 1
    images[nextIndex].style.animation = "animate-left 0.8s"
    images[nextIndex].style.zIndex = "1"
    setTimeout(() => {
        images[activeIndex].classList.remove("active")
        images[activeIndex].style.animation = null
        images[nextIndex].style.animation = null
        images[nextIndex].style.zIndex = null
        images[nextIndex].classList.add("active")
    }, 800)
    
}

function scrollRight (images) {
    const activeIndex = findIndex(images)
    let previousIndex
    images[activeIndex].style.animation = "animate-right-out 0.8s"
    activeIndex === 0 
    ? previousIndex = images.length - 1 
    : previousIndex = activeIndex - 1
    images[previousIndex].style.animation = "animate-right-in 0.8s"
    images[previousIndex].style.zIndex = "1"
    setTimeout(() => {
        images[activeIndex].classList.remove("active")
        images[previousIndex].classList.add("active")
        images[activeIndex].style.animation = null
        images[previousIndex].style.animation = null
        images[previousIndex].style.zIndex = null
    }, 800)
}

leftButton.addEventListener("click", () => {
    scrollLeft(images)
})

rightButton.addEventListener("click", () => {
    scrollRight(images)
})

//Выпадающее меню (слева)

const menuButtons = document.querySelectorAll(".main__left-bar button")
const mainMenuButton = menuButtons[0]

mainMenuButton.addEventListener("click", () => {
    mainMenuButton.classList.contains("active") 
    ? menuButtons.forEach(item => {
        item.classList.remove("active")
    })
    : menuButtons.forEach(item => {
        item.classList.add("active")
    })
})

// Копирование номера телефона

const copyPhoneButton = document.querySelector("button.fa-solid")

copyPhoneButton.addEventListener("click", () => {
    navigator.clipboard.writeText("+375295635235")
    alert("Скопирован номер телефона: +375295635235")
})

