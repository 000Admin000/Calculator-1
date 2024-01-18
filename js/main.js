let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    cleanBtns = document.querySelectorAll('.clean-btn'),
    decimalBtn = document.getElementById('decimal'),
    result = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';


    for(i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener('click', function(e) {
            numberPress(e.target.textContent);
        });
    };

    for(i = 0; i < operations.length; i++) {
        let operation = operations[i];
        operation.addEventListener('click', function(e) {
            operationPress(e.target.textContent);
        });
    };

    for(i = 0; i < cleanBtns.length; i++) {
        let cleanBtn = cleanBtns[i];
        cleanBtn.addEventListener('click', function(e) {
            cleanPress(e.srcElement.id);
        });
    };

    decimalBtn.addEventListener('click', decimalPress)

    function numberPress(number) {
       if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
       } else {
        if(display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
       };
    };


    function operationPress(op) {
        let localOperationMemory = display.value;

        if(MemoryNewNumber && MemoryPendingOperation !== '=') {
            display.value = MemoryCurrentNumber;
        } else {
            MemoryNewNumber = true;
            if(MemoryPendingOperation === '+') {
                MemoryCurrentNumber += parseFloat(localOperationMemory);
            } else if(MemoryPendingOperation === '-') {
                MemoryCurrentNumber -= parseFloat(localOperationMemory);
            } else if(MemoryPendingOperation === 'x') {
                MemoryCurrentNumber *= parseFloat(localOperationMemory);
            } else if(MemoryPendingOperation === '/') {
                MemoryCurrentNumber /= parseFloat(localOperationMemory);
            } else {
                MemoryCurrentNumber = parseFloat(localOperationMemory);
            };
            display.value = MemoryCurrentNumber;
            MemoryPendingOperation = op;
        };
    };


    function cleanPress(id) {
        if(id === 'c') {
            display.value = 0;
            MemoryNewNumber = false;
            MemoryPendingOperation = '';
            MemoryCurrentNumber = 0;
        } else if(id === 'ce') {
            display.value = 0;
            MemoryNewNumber = true;
        };
    };


    function decimalPress() {
        let localDecimalMemory = display.value;
        if(MemoryNewNumber) {
            localDecimalMemory = '0.'
            MemoryNewNumber = false;
        } else {
            if(localDecimalMemory.indexOf('.') === -1) {
                localDecimalMemory += '.';
            };
        };
        display.value = localDecimalMemory;
    };
















// e.srcElement.id
// indexOf
// e.target.textContent


