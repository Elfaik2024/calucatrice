var input = document.getElementById('calc_resultat');
var num1 = 0;
var num2 = 0;
var ope = " ";
var res = 0;

function afficher(num){
    input.value+=num;
}
function calculator(opevalue){
    num1 = parseFloat(input.value);
    input.value ='';
    
    ope= opevalue;
    num2  = parseFloat(input.value);
}
function ClearInput() {
    input.value ='';
    
}

function result(){
   
    num2  = parseFloat(input.value);
    switch (ope) {
        case "+":
       res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
            case "*":
            res = num1 * num2;
            break;
            case "/":
            res = num1 / num2;
            break;
        
        default:
            input.value = 'Error make correct expression!!!'
    }
    input.value = res;

}
