const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const directions = [...document.querySelectorAll('.directions')]
const images_slider = document.querySelector('.images-slider')
const closeBtn = document.querySelector('.close-button')
const cart = document.querySelector('.cart-icon')
const quantity_product = document.querySelector('.quantity')
const quantity_buttons = [...document.querySelectorAll('.quantity-button')]
const addCart = document.querySelector('.add-cart')
const card = document.querySelector('.card')
const card_content = document.querySelector('.card-content-box')
const radios = [...document.querySelectorAll('.radios')]
const main_image = document.querySelector('.main-image')

const passSlide = (teste, container) => {
    let margin = Number(main_image.style.marginLeft)
    
    teste.map((element, index) => {
        element.addEventListener('click', e => {
            
            index == 0 ? margin -= 100 : margin += 100

            if(margin > 300) margin = 0
            else if(margin < 0) margin = 300
        
            container.style.marginLeft = `-${margin}%`
        })
    })

}

images_slider.addEventListener('click', (e) => {
    if(window.innerWidth < 720) return false

    const newButton = closeBtn.cloneNode(true)
    const newSlider = images_slider.cloneNode(true)
    const div_container = document.createElement('div')

    newSlider.children[0].className = 'new-directions directions left'
    newSlider.children[5].className = 'new-directions directions right'
    newSlider.classList.add('newslider')
    newSlider.appendChild(newButton)

    newButton.style.display = 'block'
        
    div_container.classList.add('new-container')
    div_container.appendChild(newSlider)

    document.documentElement.appendChild(div_container)

    passSlide([newSlider.children[0], newSlider.children[5]], newSlider.children[1])

    newButton.addEventListener('click', (e) => div_container.remove())

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

passSlide(directions, main_image)

menu.addEventListener('click', e => {
    const newNav = nav.cloneNode(true)
    const div_container = document.createElement('div')
    
    newNav.classList.add('nav-div')
    
    div_container.classList.add('new-container')
    div_container.appendChild(newNav)
    document.documentElement.appendChild(div_container)
    
    newNav.children[0].addEventListener('click', e => div_container.remove())
})

radios.map((element, index) => {
    element.addEventListener('click', (e) => {
        if(e.target.checked) {
            main_image.style.marginLeft = `-${index * 100}%`
        }
    })
})



