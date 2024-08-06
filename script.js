let mode = "light"
let myButton = document.querySelector("button")
function handleclick(){
    console.log('working');
    if(mode==="light"){
        document.body.style.backgroundColor = "black";
        mode="dark"
        
    } else{
        mode="light"
        document.body.style.backgroundColor = "white";

    }
}
myButton.addEventListener('click', handleclick)

let colorButton = document.queryselector("#darklightmodebutton")
function backgroundcolor(){
    document.body.style.backgroundColor = 'black';
}