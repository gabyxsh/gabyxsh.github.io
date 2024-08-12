let mode = "light"
let myButton = document.querySelector("button")
function handleclick(){
    console.log('working');
    if(mode==="light"){
        document.body.style.backgroundColor = "black";
        mode="dark"
        document.querySelectorAll('h1').forEach(e=>e.style.color="white");
        document.querySelectorAll('p1').forEach(e=>e.style.color="white");
        document.querySelectorAll('p2').forEach(e=>e.style.color="white");
        document.querySelectorAll('p3').forEach(e=>e.style.color="white");

        
    } else{
        mode="light"
        document.body.style.backgroundColor = "white";
        document.querySelectorAll('h1').forEach(e=>e.style.color="black");
        document.querySelectorAll('p1').forEach(e=>e.style.color="black");
        document.querySelectorAll('p2').forEach(e=>e.style.color="black");
        document.querySelectorAll('p3').forEach(e=>e.style.color="black");


    }
}
myButton.addEventListener('click', handleclick)

let colorButton = document.queryselector("#darklightmodebutton")
function backgroundcolor(){
    document.body.style.backgroundColor = 'black';
}

const toggle = doccument.getElementby