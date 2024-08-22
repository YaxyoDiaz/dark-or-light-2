
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const body = document.querySelector('#body')
const box = document.querySelector('#box img')
const text = document.querySelector('#text h3')

btn.onclick = () => {
    body.classList.toggle('red')
    text.classList.toggle('white')
}

btn2.onclick = () => {
    box.classList.toggle('open')
    box.classList.toggle('close')
}

btn3.onclick = () => {
    text.classList.toggle('time')
    text.classList.toggle('ontime')
}

btn4.onclick = () => {
    text.classList.toggle('blue')
}