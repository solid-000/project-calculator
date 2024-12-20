const numpad = document.querySelector(".numpad");
const screen = document.querySelector("input");
const operatorContainer = document.querySelector(".operators");
let num1 = 0;
let num2 = 0;
let check = 0;
let num3 = 0;
let operator = "";
let op = "";

numpad.addEventListener("click", (event) => {
    screen.style.color = "black";
    let num = event.target;
    if(screen.value<=9999999999999999){
    switch(num.id){
        case '1':
            screen.value += 1;
            break;
        case '2':
            screen.value += 2;
            break;
        case '3':
            screen.value += 3;
            break;
        case '4':
            screen.value += 4;
            break;
        case '5':
            screen.value += 5;
            break;
        case '6':
            screen.value += 6;
            break;
        case '7':
            screen.value += 7;
            break;
        case '8':
            screen.value += 8;
            break;
        case '9':
            screen.value += 9;
            break;
        case 'zero':
            screen.value += 0;
            break;
        case "point":
            addPoint();
            break;
        case "ac":
            clear();
            break;
        }
    }
});
operatorContainer.addEventListener("click", (event)=> {
    screen.style.color = "black";
    let op = event.target;
    switch(op.id){
        case 'plus':
            setOperator("+");
            break;
        case 'minus':
            setOperator("-");
            break;
        case 'multiply':
            setOperator("*");
            break;
        case 'divide':
            setOperator("/");
            break;
        case 'equals':
            printResult();
            break;
    }
});


function setOperator(buffer){
    operator = buffer;
    if(check == 0){
        num1 = +screen.value;
    }else if(check == 1){
        num3 = +screen.value;
        switch(op){
            case '+':
                num1 = num1 + num3;
                break;
            case '-':
                num1 = num1 - num3;
                break;
            case '*':
                num1 = num1 * num3;
                break;
            case '/':
                num1 = num1 / num3;
                break;
        }
    }
    op = operator;
    check = 1;
    screen.value = "";
}
function printResult(){
    screen.style.color = "green";
    num2 = +screen.value;
    switch(operator){
        case '+':
            screen.value = num1 + num2;
            break;
        case '-':
            screen.value = num1 - num2;
            break;
        case '*':
            screen.value = num1 * num2;
            break;
        case '/':
            screen.value = (num1 / num2);
            break;
    }
    check = 0;
}

function clear(){
    screen.value = "";
    num1 = 0;
    num2 = 0;
    num3 = 0;
    check = 0;
    operator = "";
    op = '';
}

// function addPoint(){
//     let n1 = +screen.value;
//     console.log(n1)
// }