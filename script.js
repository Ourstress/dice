let roll = document.querySelector("button")
let sides = document.querySelector("input")
let display = document.querySelector("#dice")

roll.addEventListener("click", function(){
    let num = Number(sides.value);
    console.log(num);
    (num === 0)? alert("Please enter a valid number of sides!") : 
    (sides.value === "")? alert("Please enter a number of sides") :
    display.textContent = Math.floor(Math.random()*sides.value)
})