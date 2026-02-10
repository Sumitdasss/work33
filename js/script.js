let inputone=document.getElementById("inputone")
let buttonone=document.getElementById("buttonone")
let namtaOne=document.getElementById("namtaOne")


let namtanumber=document.getElementById("namtanumber")


buttonone.addEventListener("click", () => {
   
    namtaOne.innerText = ""; 
 let value = parseInt(inputone.value); 
 namtaOne.classList.remove("hidden")
    if (value >= 1 && value <= 10) {
        for (let i = 1; i <= 10; i++) {
            
            namtaOne.innerText += `${value} x ${i} = ${value * i}\n`;
        }
    } 
    else {
      
    }
});


 let inputtwo=document.getElementById("inputtwo")
 let inputthree=document.getElementById("inputthree")
 let buttontwo=document.getElementById("buttontwo")
 let idCard=document.getElementById("idCard")
 let cardOne=document.getElementById("cardOne")
 let cardTwo=document.getElementById("cardTwo")
 let cardThree=document.getElementById("cardThree")


 buttontwo.addEventListener("click",()=>{
idCard.classList.remove("hidden")
if(inputtwo.value == "1" && inputthree.value=="1"){
  cardOne.classList.remove("hidden")
  setTimeout(()=>{
    cardOne.classList.add("hidden")
  },1500)


}

else if(inputtwo.value == "2" && inputthree.value=="2"){
cardTwo.classList.remove("hidden")

setTimeout(()=>{
    cardTwo.classList.add("hidden")
  },1500)
}
else if(inputtwo.value == "3" && inputthree.value=="3"){
cardThree.classList.remove("hidden")
setTimeout(()=>{
    cardThree.classList.add("hidden")
  },1500)
}

else{

}

 })