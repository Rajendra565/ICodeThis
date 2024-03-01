const xIcon=document.querySelector('.x-icon')
const left=document.querySelector('.left')


xIcon.addEventListener('click',()=>{
    // alert("Rakjdlkajf")
    setTimeout(()=>{
       left.style.display="none"
    },100)
    setTimeout(()=>{
        
        left.style.display="block"


    },2000)


})