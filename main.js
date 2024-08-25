// Calculator program
const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculator() {
    try {
        // Ensure the display value is not empty before evaluating
        if (display.value.trim() === "") {
            return;
        }
        
        // Evaluate the expression and update the display
        // Using `Function` constructor as a safer alternative to `eval`
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "Error";
    }
}
