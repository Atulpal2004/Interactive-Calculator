function appendvalue(value){
    document.getElementById("display").value+=value;
}
function cleardisplay(){
    document.getElementById("display").value=""
}
function calculateResult(){
    const display=document.getElementById("display");
    try {
        display.value=Function('"Use strict"; return ('+ display.value +')')();
    }
    catch{display.value="error";}
}
function backspace(){
    const display=document.getElementById("display");
    display.value=display.value.slice(0,-1);
}