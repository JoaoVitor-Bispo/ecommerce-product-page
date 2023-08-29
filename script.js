const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const directions = [...document.querySelectorAll('.directions')]
const images_slider = document.querySelector('.images-slider')
const thumbnails = document.querySelector('.thumbnails-container')
const labels = [...document.getElementsByTagName('label')]
const radios = [...document.querySelectorAll('.radios')]
const closeBtn = document.querySelector('.close-button')

images_slider.addEventListener('click', (e) => {

    const newSlider = images_slider.cloneNode(true)
    const div_container = document.createElement('div')
    const newClose_button = newSlider.children[0]

    newSlider.children[1].className = 'new-directions new-left'
    newSlider.children[6].className = 'new-directions new-right'

    newClose_button.classList.add('new-button')
    newSlider.classList.add('newslider')
    div_container.classList.add('new-container')

    div_container.appendChild(newSlider)
    document.documentElement.appendChild(div_container)

    newClose_button.addEventListener('click', (e) => div_container.remove())
})
