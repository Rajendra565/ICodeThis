// Add JavaScript code here

const XIcon = document.querySelector('.x-icon');
const hero = document.querySelector('.hero');



XIcon.addEventListener('click', () => {
    setTimeout(() => {
    hero.style.display = "none"
        
    },200)
    setTimeout(() => {
    hero.style.display = "block"
        
    },2000)
})


function CreateBubble() {
    const createElemant = document.createElement('span')
    var size = Math.random() * 60;
    createElemant.style.width=20 + size+"px"
    createElemant.style.height=20 +  size+"px"
    createElemant.style.left = Math.random() * innerWidth + 'px'
    hero.appendChild(createElemant);
    setTimeout(() => {
        createElemant.remove()
    },4000)
}
setInterval(CreateBubble,50)
