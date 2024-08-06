const display = document.getElementById("input");
let values = (args)=>{
    display.value += args;
}

let clearValues = ()=>{
    display.value='0';
}

let calculate = ()=>{
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

let backspace = ()=>{
    if(display.value > 1){
        display.value = display.value.slice(0,-1);
    }
    else{
        display.value = '0';
    }
}