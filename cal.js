const buttonFunctions = document.querySelectorAll('.clickButton')
const parentStyle = document.querySelector('.parentStyle')
const displayScreen = document.querySelector('.displayScreen')
const buttons = document.querySelectorAll('.clickButton')
const parentButtons = document.querySelector('.buttons')
const style = document.querySelector('.style')
const displayAnswer = document.querySelector('.displayAnswer')
const sup = document.querySelectorAll('.sup')
const ans = document.querySelector('#ans')
const shiftButtons = document.querySelector('.shiftButton')
const shiftCollections = document.querySelectorAll('shiftCollections')
const Heading = document.querySelector('.heading')
const ben = document.querySelectorAll('.ben')


shiftButtons.addEventListener('click', function(){

    ben.forEach(shiftCollection =>shiftCollection.classList.toggle('shiftCollections'));
    
    shiftButtons.classList.toggle('display')
    

})

    



buttonFunctions.forEach(buttonFunction => buttonFunction.addEventListener('click', operation))

function operation() {
 
if (this.innerHTML == "=") {
if(displayAnswer.innerHTML.toString().includes('tan')){
    const term = displayAnswer.innerHTML.match(/\d+/g);
    displayScreen.innerHTML = "Ans = " +  Math.tan(term)
}
else if(displayAnswer.innerHTML.toString().includes('Ans')){
    let term = displayAnswer.innerHTML
     displayAnswer.innerHTML = term.replace('Ans', term2)
     function term2() {
        let term1 = displayScreen.innerHTML
       return term1.slice(5, term1.length)}

    displayScreen.innerHTML ="Ans = " +  eval(displayAnswer.innerHTML)
}
else if(displayAnswer.innerHTML.toString().includes('cos')){
    const term = displayAnswer.innerHTML.match(/\d+/g);
    displayScreen.innerHTML = "Ans = " + Math.cos(term)
}
else if(displayAnswer.innerHTML.toString().includes('sin')){
    const term = displayAnswer.innerHTML.match(/\d+/g);
    displayScreen.innerHTML = "Ans = " + Math.sin(term)
}
else if(displayAnswer.innerHTML.toString().includes('cosh')){
    const term = displayAnswer.innerHTML.match(/\d+/g);
    displayScreen.innerHTML = "Ans = " + Math.cosh(term)
}
else if(displayAnswer.innerHTML.toString().includes('tanh')){
    const term = displayAnswer.innerHTML.match(/\d+/g);
    displayScreen.innerHTML = "Ans = " + Math.tanh(term)
}
else if(displayAnswer.innerHTML.toString().includes('sinh')){
    const term = displayAnswer.innerHTML.match(/\d+/g);
    displayScreen.innerHTML = "Ans = " + Math.sinh(term)
}

 else if (displayAnswer.innerHTML.toString().includes('%')){
    let per = displayAnswer.innerText.toString();
   per = per.substr(0, per.length - 1)
    displayScreen.innerText = "Ans = " + per/100;

    
}
else  {
    displayScreen.innerHTML = "Ans = " + eval(displayAnswer.innerText);
}
 
} 



 if (this.innerText == 'CE') {
    let answer = displayAnswer.innerText.toString();
    displayAnswer.innerText = answer.substr(0, answer.length - 1)
}

else if (this.classList.contains("shiftCollections")){
    displayAnswer.innerHTML='';
        displayAnswer.innerText += this.id;
    
    }
  


else if (this.innerHTML== 'AC'){
    displayScreen.innerHTML='0';
    displayAnswer.innerHTML='';
}
 
else if (this.innerHTML == "Ans") {
    displayAnswer.innerHTML='';
    displayAnswer.innerText += this.innerText; 
}
 
else if (this.innerHTML == "SHIFT") {
    displayAnswer.innerHTML='';
    document.buttonFunctions.classList.toggle('shiftCollections')
}

 else {
    displayAnswer.innerText += this.name;

 }
 
}

       

   




document.querySelector('.displayAnswer').style.whitespace = 'wrap'






// for theme change

const colorMetrics= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A',
'B', 'C', 'D', 'E', 'F', 'G']

parentStyle.addEventListener('click', function(){
 {
    let Color1 = '#';


    for (let i = 0; i < 3 ; i++) {
        Color1 += colorMetrics[random()]
       
    }
  buttons.forEach(item => item.style.background = Color1)
  Heading.style.color = Color1;
  
    
}
function random() {
    return Math.floor(Math.random() * colorMetrics.length)
}
})











