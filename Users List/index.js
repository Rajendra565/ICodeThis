const date = [
    {
        image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvMzY2LW1ja2luc2V5LTIxYTc3MzYtZm9uLWwtam9iNjU1LnBuZw.png",
        name:"Amar kumar",
        userName:"Amar"

    },
    {
        image:'https://toppng.com/uploads/preview/business-man-11530978995va8mu51obn.png',
        name: "om prasad ",
        userName:"om"
    },
    {
        image:'https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=ais',
        name: "Kishan kumar ",
        userName:"Kishan"
    },
    {
        image: "https://images.unsplash.com/profile-1575502526619-9adcce5e5d3eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        name:"Anil Kumar",
        userName:"Anil"

    },
    {
        image: "https://spng.pngfind.com/pngs/s/4-46309_businessman-high-quality-png-businessman-portrait-png-transparent.png",
        name:"Sibashis nayak",
        userName:"Bapi"

    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qKH13c8tueQJvl4c5WUAXnH4d0skaZSw1mf0XgAw6g&s",
        name:"Rajendra kamar",
        userName:"Mithnu"

    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qKH13c8tueQJvl4c5WUAXnH4d0skaZSw1mf0XgAw6g&s",
        name:"G pabitra",
        userName:"pabitra"

    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAPSGuJc47u-ndjZxj5nerrmH2YmRI-Y49_JzWeWF9Xj0kgpOxytQWXOknFEVwJqMQUc&usqp=CAU",
        name:"Suman pradhan",
        userName:"suman"

    },
    {
        image: "https://toppng.com/uploads/preview/man-looking-up-11549845640dbptu3ty7x.png",
        name:"Ashiq lara ",
        userName:"Raja"

    },
]











const hero=document.querySelector('.hero')
const bars = document.querySelector('.bars')
const links = document.querySelector('.links')

bars.addEventListener('click', () => {
    links.classList.toggle('links-active')
})
const showDate = () => {
    
var show = ""
date.map((val) => {
    show +=`<div class="card flex">
                    <div class="image">
                        <img width="90px"  class=" rounded-full" src=${val.image} alt="image">
                        
                    </div>
                    <div class="details flex flex-col mx-2 ">
                        <b>${val.name}</b>
                        <span>${val.userName}</span>
                        <div class="btn flex gap-2">
                            <button>clothes</button>
                            <button>stem</button>
                        </div>
                    </div>
                </div>`



                hero.innerHTML=show
})
}
showDate()