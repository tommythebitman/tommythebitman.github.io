function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value='';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '0' || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === '.') {
        appendToDisplay('.');
    }

});