const result = document.querySelector('.result')
const form = document.querySelector('form .the-form')
const submitBtn = document.querySelector('.the-form button')
const baseFigure = document.querySelector('.the-form input')


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const dayTotal = Number(baseFigure.value)
    const profit = dayTotal - (dayTotal / 1.5)
    const pocketMoney = profit / 10
    result.innerText = Math.round(pocketMoney)
})


