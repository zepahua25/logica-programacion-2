
function imprimirResultado(mensaje, limpiar = false) {
    const result = document.getElementById('result');
    if (limpiar) {
        result.innerHTML = '';
    }
    const p = document.createElement('p');
    p.textContent = mensaje;
    result.appendChild(p);
}
function kelvin() {
    imprimirResultado('', true);
    const input = document.getElementById("celsius");
    const celsius = parseFloat(input.value);
    let kelvin;
    if (isNaN(celsius)) {
        alert('El valor no es un número.');
        return false;
    }

    kelvin = celsius + 273.15;
    imprimirResultado(`La conversion de ${celsius} °C es ${kelvin} °K`);


}
function fahrenheit() {
    imprimirResultado('', true);
    const input = document.getElementById("celsius");
    const celsius = parseFloat(input.value);
    let fahrenheit;
    if (isNaN(celsius)) { //Esta validacion no va a caer nunca a menos que cambiemos el input a text
        alert('El valor no es un número.');
        return false;
    }

    farenheith = (celsius * 9 / 5) + 32;
    imprimirResultado(`La conversion de ${celsius} °C es ${fahrenheit} °F`);

}

function ambos(){
    imprimirResultado('', true);
    const input = document.getElementById("celsius");
    const celsius = parseFloat(input.value);

    if (isNaN(celsius)) { 
        alert('El valor no es un número.');
        return false;
    }

    // Calcular y mostrar Kelvin
    let kelvin = celsius + 273.15;
    imprimirResultado(`La conversión de ${celsius} °C es ${kelvin} °K`);
    
    // Calcular y mostrar Fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32; 
    imprimirResultado(`La conversión de ${celsius} °C es ${fahrenheit} °F`);
}