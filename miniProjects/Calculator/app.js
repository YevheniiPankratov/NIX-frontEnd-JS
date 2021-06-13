const btnClear = document.querySelector('[data-type="clear"]');
const btnOperators = document.querySelectorAll('[data-type="operator"]');
const btnNumbers = document.querySelectorAll('[data-num]');
const btnEqual = document.querySelector('[data-type="equal"]');
const currentElement = document.querySelector('.calculator__display');

btnClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

btnOperators.forEach (button => {
    button.addEventListener('click', () => {
    calculator.checkEquals(button.innerHTML)
    calculator.updateDisplay()
    });
});

btnNumbers.forEach (button => {
    button.addEventListener('click', () => {
    calculator.validation(button.innerHTML);
    calculator.updateDisplay();
    });
});

btnEqual.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

class Calculator {
    constructor(currentElement) {
        this.currentElement = currentElement;
        this.prevElement;
        this.clear()
    }

    compute() {
        let compute;
        const prev = parseFloat(this.prevValue);
        const current = parseFloat(this.currentValue);
        if(isNaN(prev) || isNaN(current)) {
            return
        }
        switch (this.operation) {
            case '-':
                compute = prev - current;
                break;
            case '+':
                compute = prev + current;
                break;
            case '×':
                compute = prev * current;
                break;
            case '%':
                compute = ((prev / current) / 100);
                break;
            case '÷':
                compute = prev / current;
                break;
            default:
                break;
        }
        this.prevValue = '';
        this.currentValue = compute.toString().substring(0, 10);
        this.operation = undefined;
    }

    clear () {
        this.currentValue = 0;
        this.prevValue = '';
        this.operation = undefined;
    }

    validation(number) {
        if(this.currentValue.length >= 10) {
            this.currentValue = this.currentValue.substring(0, 10);
        }
        this.currentValue = this.currentValue.toString() + number.toString();
        if(number === '.' && this.currentValue.includes('.')) {
            return
        }
    }

    checkEquals(operation) {
        if (this.prevValue !== '') {
            this.compute()
        }
        if (this.currentValue === '') {
            return
        }
       this.operation = operation ;
       this.prevValue = this.currentValue;
       this.currentValue = '';
    }

    getDisplay(number) {
        const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) {
            return '';
        }
        return floatNumber.toLocaleString('en')
    }

    updateDisplay() {
        this.currentElement.innerHTML = this.getDisplay(this.currentValue);
        if(this.operation != null) {
            this.currentElement.innerHTML = this.getDisplay(this.prevValue);
        }
    }
}

const calculator = new Calculator(currentElement);