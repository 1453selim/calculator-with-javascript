const number1 = document.getElementById(num1);
const number2 = document.getElementById(num2);
const number3 = document.getElementById(num3);
const number4 = document.getElementById(num4);
const number5 = document.getElementById(num5);
const number6 = document.getElementById(num6);
const number7 = document.getElementById(num7);
const number8 = document.getElementById(num8);
const number9 = document.getElementById(num9);
const number0 = document.getElementById(num0);
var buttonDecimal = document.getElementById("buton_decimal");
var buttonAc = document.getElementById("buton_ac");
var buttonBackspace = document.getElementById("buton_backspace");
var showedElement = document.getElementById("result_value");//ekrana yazdıraılacak element 
var offButTon = document.getElementById("offButon")

var resultValue = "0";//ekranda gösterilen deger
var nextVal;//ik işlem sonrası beklenen sayı
var equalStringArr = [];// result as a string("7"+"3")
const numButtons = document.getElementsByClassName("button_num");
const operatorButtons = document.getElementsByClassName("button_operator");
var updateResult = (e) => {
  var btnText = e.target.innerText;

  if (resultValue === "0") 
  resultValue = "";
  

  resultValue += btnText;
  showedElement.innerText = resultValue;

};
var  performOperator = (e) =>{
  
  var operator = e.target.innerText;
  switch (operator) {
    case "+":
      nextVal = resultValue;
      
      resultValue = "0"; 
      showedElement.innerText = resultValue;
      equalStringArr.push(nextVal);
      equalStringArr.push("+");

    break;
    case "-":
      nextVal = resultValue;
      resultValue = "0";
      showedElement.innerText = resultValue;
      equalStringArr.push(nextVal);
      equalStringArr.push("-");

    break;
    case "x":
      nextVal = resultValue;
      resultValue = "0";
      showedElement.innerText = resultValue;
      equalStringArr.push(nextVal);
      equalStringArr.push("*");

    break;
    case "÷":
      nextVal = resultValue;
      resultValue = "0";
      showedElement.innerText = resultValue;
      equalStringArr.push(nextVal);
      equalStringArr.push("/");

    break;
    case "=":
      equalStringArr.push(resultValue);
      var evalation = eval(equalStringArr.join(" "));
      /* resultValue = evalation.toFixed(5)  + ""; */
      
      resultValue = evalation  + "";
      if(resultValue.length>=9){
        showedElement.style.fontSize="2rem"
        showedElement.innerText = resultValue;
        console.log(resultValue)
        console.log(resultValue.length)
        
        equalStringArr = []; 

      }else {
        showedElement.innerText = resultValue;
        console.log(resultValue)
        console.log(resultValue.length)
        
        equalStringArr = []; 

      }
    
     

    break;

    default:
    break;
  }
}

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", updateResult, false);
}
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", performOperator, false);
}
buttonAc.onclick = () => {
  resultValue = "0";
  nextVal = undefined;
  evalStringArr = [];
  showedElement.innerHTML = resultValue;
};
offButTon.onclick = () => {
  resultValue = "";
  nextVal = undefined;
  evalStringArr = [];
  showedElement.innerHTML = resultValue;
  showedElement.style.height="110px"
};
buttonBackspace.onclick = () => {
  let lengthOfResult = resultValue.length;
  resultValue = resultValue.slice(0, lengthOfResult - 1);

  if (resultValue === "")
  resultValue = "";
  showedElement.innerText = resultValue;
  showedElement.style.height="110px"
};
buttonDecimal.onclick = () => {
  if (!resultValue.includes(".")) resultValue += ".";
  showedElement.innerText = resultValue;
};



