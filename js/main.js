document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos del DOM
    const rangeInput = document.getElementById("rangeInput");
    const rangeOutput = document.getElementById("rangeOutput");
    const calculateButton = document.getElementById("calculateButton");
    const perfectNumbersList = document.getElementById("perfectNumbersList");

    // Función para determinar si un número es perfecto
    function isPerfectNumber(number) {
        let sum = 0;
        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum === number;
    }

    // Función para encontrar los números perfectos en un rango dado
    function findPerfectNumbers(start, end) {
        const perfectNumbers = [];
        for (let num = start; num <= end; num++) {
            if (isPerfectNumber(num)) {
                perfectNumbers.push(num);
            }
        }
        return perfectNumbers;
    }

    // Actualizar el valor del rango al mover el control deslizante
    rangeInput.addEventListener("input", function() {
        rangeOutput.textContent = this.value;
    });

    // Manejar el clic del botón de cálculo
    calculateButton.addEventListener("click", function() {
        const rangeValue = parseInt(rangeInput.value);
        const perfectNumbers = findPerfectNumbers(1, rangeValue);
        displayPerfectNumbers(perfectNumbers);
    });

    // Mostrar los números perfectos en la lista
    function displayPerfectNumbers(numbers) {
        perfectNumbersList.innerHTML = "";
        if (numbers.length === 0) {
            const listItem = document.createElement("div");
            listItem.classList.add("list-group-item");
            listItem.textContent = "No se encontraron números perfectos en el rango especificado.";
            perfectNumbersList.appendChild(listItem);
        } else {
            numbers.forEach(function(number) {
                const listItem = document.createElement("div");
                listItem.classList.add("list-group-item");
                listItem.textContent = number;
                
                // Agregar información adicional sobre el número perfecto
                const factorization = factorizeNumber(number);
                const sumOfDivisors = sumDivisors(number);
                listItem.innerHTML += `<br>Factorización: ${factorization.join(' * ')} <br> Suma de Divisores: ${sumOfDivisors}`;
                
                perfectNumbersList.appendChild(listItem);
            });
        }
    }

    // Función para factorizar un número
    function factorizeNumber(number) {
        const factors = [];
        for (let i = 2; i <= number; i++) {
            while (number % i === 0) {
                factors.push(i);
                number /= i;
            }
        }
        return factors;
    }

    // Función para calcular la suma de divisores de un número
    function sumDivisors(number) {
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
    
});

