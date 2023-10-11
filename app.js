// Función para lanzar un dado
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Función para simular lanzamientos y contar resultados
  function simularLanzamientos(cantidadLanzamientos) {
    const resultados = [];
  
    while (cantidadLanzamientos > 0) {
      const dado1 = lanzarDado();
      const dado2 = lanzarDado();
      const suma = dado1 + dado2;
      
      // Buscar si ya existe un resultado con esa suma
      const resultadoExistente = resultados.find((resultado) => resultado.suma === suma);
  
      if (resultadoExistente) {
        resultadoExistente.cantidad++;
      } else {
        resultados.push({ suma, cantidad: 1 });
      }
  
      cantidadLanzamientos--;
    }
  
    return resultados;
  }
  
  // Función para mostrar resultados en una tabla
  function mostrarResultadosEnTabla(resultados) {
    console.table(resultados, ['suma', 'cantidad']);
  }
  
  // Pedir al usuario la cantidad de lanzamientos
  const cantidadLanzamientos = parseInt(prompt("Ingrese la cantidad de veces que desea lanzar los dados:"));
  
  if (!isNaN(cantidadLanzamientos) && cantidadLanzamientos > 0) {
    const resultados = simularLanzamientos(cantidadLanzamientos);
    mostrarResultadosEnTabla(resultados);
  } else {
    console.log("Por favor, ingrese un número válido de lanzamientos.");
  }