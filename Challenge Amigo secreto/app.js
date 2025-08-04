// Challenge: Amigo secreto

// Definir el arreglo (vacío) donde se añadirán los nombres
let amigos = [];

// Función para agregar amigo
function agregarAmigo () {
    // Captura el valor del campo de entrada
    let nombreIngresado = document.getElementById ('amigo').value;
    
    // Valida la entrada
    if (nombreIngresado === '') {
        // Si el nombre esta vacío, manda una alerta
        alert ('Por favor, inserte un nombre');
    } else {
        // Si es valido, añade al arreglo el nombre ingresado
        amigos.push (nombreIngresado);
        // Imprimir en consola el arreglo
        console.log (amigos);
        // Limpia el campo una vez que el usuario ingresa su nombre
        document.getElementById('amigo').value = '';
        // Llama a la función que recorre el arreglo de amigos
        actualizarListaAmigos ();
    }
}

// Función que recorre el arreglo de amigos y añade el nombre a la lista 
function actualizarListaAmigos () {
    // Obtiene el elemento de la lista de amigos
    let lista = document.getElementById ('listaAmigos');
    // Limpia la lista existente
    lista.innerHTML = '';
    // Itera sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento <li>
        let nuevoElemento = document.createElement('li');
        // Establecer el texto del <li>
        nuevoElemento.textContent = amigos[i];
        // Agregar el <li> al <ul>
        lista.appendChild (nuevoElemento);
    }
    
}

// Función para sortear amigo
function sortearAmigo () {
    // Valida que haya amigos disponibles
    if (amigos.length === 0 || amigos.length === 1) {
        alert ('La lista de amigos esta vacía o solo tiene un nombre, ingrese más nombres');
    } else {
        let amigoSorteado = amigos[Math.floor (Math.random () * amigos.length)];
        // Limpiar el contenido anterior del resultado (por si acaso)
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';

        // Crear nuevo <li> para mostrar el resultado
        let li = document.createElement('li');
        li.textContent = `El amigo sorteado es ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}
