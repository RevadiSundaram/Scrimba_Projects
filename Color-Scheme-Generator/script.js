const inputEl = document.getElementById("color-input");
const selectEl = document.getElementById("select-input");
const schemeOp = document.getElementById("scheme-output");
let colorArray = []

document.getElementById("form").addEventListener("submit", function(e){
    console.log(inputEl.value);
    console.log(selectEl.value)
    e.preventDefault();
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputEl.value.slice(1)}&mode=${selectEl.value}&count=5`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            colorArray = data.colors.map((color) => {
                return color.hex.value
            })
            // console.log(data.colors[0].hex.value)
            console.log(colorArray)
            renderColor(colorArray);
        })
       
})

function renderColor(color){
     for(let i=0; i<color.length; i++){
            document.getElementById("scheme-color").innerHTML += `
            <div class="each-color">
            </div>`
            document.getElementById("scheme-hex").innerHTML += `
            <div class="each-hex">
            </div>`
        document.querySelectorAll(".each-color")[i].style.backgroundColor = color[i]
        document.querySelectorAll(".each-hex")[i].innerText = color[i] 
            console.log(i)
        }
}
