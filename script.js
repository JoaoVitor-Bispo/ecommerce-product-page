const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const directions = [...document.querySelectorAll('.directions')]
const images_slider = document.querySelector('.images-slider')
const thumbnails = document.querySelector('.thumbnails-container')
const closeBtn = document.querySelector('.close-button')
const cart = document.querySelector('.cart-icon')
const quantity_product = document.querySelector('.quantity')
const quantity_buttons = [...document.querySelectorAll('.quantity-button')]
const addCart = document.querySelector('.add-cart')
const card = document.querySelector('.card')
const card_content = document.querySelector('.card-content-box')

images_slider.addEventListener('click', (e) => {

    const newSlider = images_slider.cloneNode(true)
    const div_container = document.createElement('div')
    const newClose_button = newSlider.children[0]

    newSlider.children[1].className = 'new-directions directions left'
    newSlider.children[6].className = 'new-directions directions right'

    newClose_button.classList.add('new-button')
    newSlider.classList.add('newslider')
    div_container.classList.add('new-container')

    div_container.appendChild(newSlider)
    document.documentElement.appendChild(div_container)

    newClose_button.addEventListener('click', (e) => div_container.remove())
})

let controller = 0

quantity_buttons.map((element, index) => {
    element.addEventListener('click', (e) => {
        if(index == 0) {
            if(controller < 1) return false
            
            controller -= 1
        }
        else {
            controller += 1
        }
        quantity_product.innerHTML = `${controller}`
    })
})

cart.addEventListener('click', (e) => card.style.display == 'none' ? card.style.display = 'block' : card.style.display = 'none')

addCart.addEventListener('click', (e) => {
    if(controller > 0) {
        card_content.style.display = 'flex'
        document.querySelector('.empty-message').style.display = 'none'

        document.querySelector('.final-quantity').innerHTML = `${controller}`
        document.querySelector('.final-value').innerHTML = `$${controller * 125}`    
    }
})

document.querySelector('.delete').addEventListener('click', e => {
    card_content.style.display = 'none'
    document.querySelector('.empty-message').style.display = 'block'
})

directions.map((element, index) => {
    element.addEventListener('click', (e) => {
        if(index == 1) {
            e.target.parentNode.style.marginLeft = `-200%`
        }
    })
})




