// Add JavaScript code here
const mainDiv = document.querySelector(".main-Div")
const rejoinDiv = document.querySelector(".rejoin-Div")
const home = document.querySelector(".home")
const gotoHomeBtn = document.querySelector(".gotoHome")
const rthomeBtn = document.querySelector(".rthome-btn")
const joinBtn = document.querySelector(".join")
const feedBack = document.querySelector(".feedBack")
const rejoinBtn = document.querySelector(".Rejoin-btn")





gotoHomeBtn.addEventListener('click', () => {
    mainDiv.style.display = 'none'
    rejoinDiv.style.display = 'none'
    home.style.display = 'flex'
})

joinBtn.addEventListener('click', () => {
    mainDiv.style.display = 'flex'
    rejoinDiv.style.display = 'none'
    home.style.display = 'none'

})

feedBack.addEventListener('click', () => {
    mainDiv.style.display = 'flex'
    rejoinDiv.style.display = 'none'
    home.style.display = 'none'

})
rejoinBtn.addEventListener('click', () => {
    mainDiv.style.display = 'none'
    home.style.display = 'none'
    rejoinDiv.style.display = 'flex'
})

rthomeBtn.addEventListener('click', () => {
    mainDiv.style.display = 'none'
    rejoinDiv.style.display = 'none'
    home.style.display = 'flex'
})