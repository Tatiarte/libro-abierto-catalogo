// Listas base para combinar títulos y autores

// ¿cómo funciona? necesito generar 10.000 libros diferentes sin escribir a mano todas esas referencias sino de forma automatizada se combinan para
// generarlos. Opera creando pequeños arreglos con palabras comunes en literatura y mediante la funcion auxiliar (elementoAleatorio) se elige al azar
// una palabra al inicio, otra de la lista finales, un nombre y un apellido, cuándo se unen se obtienen miles de variaciones

const iniciosTitulo = ["El secreto", "La sombra", "Crónica", "Los días", "El viaje", "Memorias", "La casa", "Cuentos"];
const finalesTitulo = ["del viento", "olvidado", "de la montaña", "sin nombre", "del río", "en Medellín", "perdido", "de cristal"];

const nombres = ["Gabriel", "Laura", "Mario", "Héctor", "Isabel", "Jorge", "Sofía", "Carlos", "Elena", "Mateo"];
const apellidos = ["García", "Restrepo", "Mendoza", "Abad", "Allende", "Franco", "Gómez", "Pérez", "Rojas", "Silva"];

// Función auxiliar para generar un número entero aleatorio entre min y max (ambos incluidos)
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para elegir un elemento al azar de cualquier arreglo
function elementoAleatorio(lista) {
  const indice = numeroAleatorio(0, lista.length - 1);
  return lista[indice];
}

// Función para generar un ISBN de 13 dígitos como texto
function generarISBN() {
  // Generamos un número grande y lo rellenamos con ceros a la izquierda hasta tener 13 caracteres
  const numeroBase = Math.floor(Math.random() * 10000000000000);
  return String(numeroBase).padStart(13, "0");
}

function generarCatalogo(n) {
  const catalogo = [];
  const isbnsRegistrados = new Set(); // Aquí guardamos los ISBN que ya salieron

  while (catalogo.length < n) {
    const nuevoIsbn = generarISBN();

    // Verificamos unicidad: si el Set NO tiene este ISBN, lo agregamos
    if (!isbnsRegistrados.has(nuevoIsbn)) {
      isbnsRegistrados.add(nuevoIsbn);

      const libro = {
        isbn: nuevoIsbn,
        titulo: `${elementoAleatorio(iniciosTitulo)} ${elementoAleatorio(finalesTitulo)}`,
        autor: `${elementoAleatorio(nombres)} ${elementoAleatorio(apellidos)}`,
        anio: numeroAleatorio(1900, 2026),
        prestamos: numeroAleatorio(0, 500),
      };

      catalogo.push(libro);
    }
  }

  return catalogo;
}

module.exports = generarCatalogo;