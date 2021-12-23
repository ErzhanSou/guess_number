const inp = document.querySelector('.guess_inp')
const btn = document.querySelector('.guess_btn')
const btn2 = document.querySelector('.guess_btn2')
const title = document.querySelector('.guess__title')
const answer = document.querySelector('.guess__answer')
const previous = document.querySelector('.guess__previous')
const hint = document.querySelector('.guess__hint')
const input1 = document.querySelector('.guess__input1')
const input2 = document.querySelector('.guess__input2')

const colors = ['green', 'blue', 'red']
const guessNumber = Math.ceil(Math.random() * 20)
let colorsCount = 0
let num = null
let num2 = null
let from = null
let before = null
let attempts = []


const returnerNumber = (min, max) => {
     return  Math.abs(Math.ceil(Math.random() * (min - max) + min))
}
input1.addEventListener('input', (e) => {
    from = +e.target.value
    console.log(from)
})
input2.addEventListener('input', (e) => {
    before = +e.target.value
    console.log(before)
})

const changeColors = setInterval(() => {
    title.style.background = colors[colorsCount++]
    if (colorsCount > 2) {
        return colorsCount = 0
    }
}, 1000)

const subMiterr = () => {
    if (num === null) {
        answer.innerHTML = 'Введите число'
        answer.style.color = 'red'
    } else if (num === num2) {
        answer.innerText = 'Поздравляю, Вы угадали'
        answer.style.color = 'green'
        reLoader()
        hintWriter()
    } else {
        if (attempts.length > 3) {
            reLoader()
        }
        inp.value = ''
        answer.innerHTML = 'Неправильно'
        answer.style.color = 'red'
        attempts = attempts.concat(num)
        attemptsWriter()
        hintWriter()
    }
}
const enterPress = (e) => {
    if (e.key === 'Enter') {
        subMiterr()
    }
}

inp.addEventListener('input', (e) => {
    num = +e.target.value
})

btn2.addEventListener('click', () => {
    num2 = returnerNumber(from, before)
    console.log(num2)
})


inp.addEventListener('keypress', enterPress)


btn.addEventListener('click', subMiterr)

const attemptsWriter = () => {
    previous.innerText = attempts.join(' ')
}

const reLoader = () => {
    btn.innerText = 'Заново'
    btn.style.color = '#775d0c'
    btn.removeEventListener('click', subMiterr)
    inp.removeEventListener('keypress', enterPress)
    btn.addEventListener('click', () => {
        document.location.reload()
    })
}

const hintWriter = () => {
    if (num > num2) {
        hint.innerText = 'Вы выше'
    } else if (num < num2) {
        hint.innerText = 'Вы ниже'
    } else if (num === num2) {
        hint.innerText = ''
    }
}

console.log(guessNumber)
