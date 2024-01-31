const day = document.querySelector('#day-of-week')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const footerDescription = document.querySelector('.footer-description') 

function newTime(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const year = date.getFullYear()
    const dayInfo = date.getDay()

    day.textContent = getDayOfWeek(dayInfo) 
    hoursElement.textContent = fixTime(hours)
    minutesElement.textContent = fixTime(minutes)
    secondsElement.textContent = fixTime(seconds)
    footerDescription.innerHTML = `&copy ${year} | Desenvolvido por <a href="http://linkedin.com/in/joyce-silva-79a4b9287" target="_blank">Joyce Silva</a>`
}

function fixTime(time){
    return time < 10 ? '0'+ time : time
}

function getDayOfWeek(numberIndex){
    const daysOfWeek = ['Domingo', 'Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira', 'Sábado']
    return daysOfWeek[numberIndex]
}

newTime()
setInterval(newTime,1000)

