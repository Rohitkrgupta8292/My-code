console.log("Rohit")

// let box = document.getElementsByClassName("box")
// console.log(box)
// box[2].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor = "red"
document.getElementById("red").style.color = "white"
document.getElementById("red").style.borderRadius = "15px"

document.querySelector(".box").style.backgroundColor = "green"
document.querySelectorAll(".box").forEach(e =>{    //for each for iterator to select all node list..//
    e.style.backgroundColor = "aqua"
})

console.log(document.getElementsByTagName("div"))