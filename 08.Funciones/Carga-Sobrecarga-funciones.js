// Carga y Sobrecarga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola soy la funcion hola()");
}

saludar()

// El interprete carga lo siguiente en memoria

// 1. global()
// 2. saludar() global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()

// Cuando se llama a una funcion recursiva, puede llamarse a si misma
// Pero se corre el riesgo que sea infinitamente

//function recursivo() {
//    recursivo();
//}

//recursivo()