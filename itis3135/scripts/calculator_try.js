const display = document.querySelector('.calculator-screen');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target && e.target.innerText !== undefined) {
            switch(e.target.innerText) {
                case 'C':
                    display.innerText = '';
                    break;
                case 'ENTER':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error";
                    }
                    break;
                default:
                    display.innerText += e.target.innerText;
            }
        } else {
            console.error("Invalid event target:", e.target);
        }
    });
});