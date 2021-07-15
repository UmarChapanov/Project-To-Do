const bigButton = document.querySelector(".big-button");

function createNewLine(){
    const newElement = document.createElement("div")
    newElement.classList.add("one")

    const newInput = document.createElement("input")
    newElement.append(newInput)
    const newKrestik = document.createElement("img")
    newKrestik.classList.add("krestik")
    newKrestik.src = "images/Group 77.svg"
    newElement.append(newKrestik) 

    const mainWindow = document.querySelector(".main-window")
    mainWindow.append(newElement)

    newKrestik.addEventListener('click',()=>{
        newElement.remove()
    })
    newKrestik.addEventListener("mouseover",(event)=>{
        event.target.src="images/Group 70.svg"
    });
    newKrestik.addEventListener("mouseout",(event)=>{
        event.target.src="images/Group 77.svg"
    });
        
}
bigButton.addEventListener('click', ()=>{
    createNewLine()
});

createNewLine();

let multiplier = 1
const sortirovka = document.querySelector(".strelka")

sortirovka.addEventListener("mouseover",(event)=>{
    if (multiplier === 1){
        sortirovka.src = "images/Group 73.svg";
    }
    else {
        sortirovka.src="images/Group 91.svg"; 
    }
});



sortirovka.addEventListener("mouseout",(event)=>{
    if (multiplier === 1){
        sortirovka.src = "images/Group 74.svg";
    }
    else {
        sortirovka.src="images/Group 90.svg";
    }
});


sortirovka.addEventListener("click",()=>{
    let arr = []
    const lines = document.querySelectorAll(".one")
    lines.forEach((one) => {
        arr.push(one) 
    })
    
    arr.sort((a, b) =>{
        let textA = a.firstElementChild.value
        let textB = b.firstElementChild.value
        
        return textA.localeCompare(textB) * multiplier
    })

    const newWindow = document.querySelector(".main-window")
    multiplier = multiplier * -1
    
    arr.forEach((el) => {
        el.remove()
        newWindow.append(el)
    })
    
    console.log(multiplier);
    if (multiplier === 1){
        sortirovka.src = "images/Group 73.svg";
      
    }
    else {
        sortirovka.src="images/Group 91.svg";
        
    }
})
