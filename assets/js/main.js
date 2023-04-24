// Ingresamos el nombre del alumno

let alumno = prompt("Ingrese  su  Nombre y Apellido");

// Selecione el nombre curso

let curso = parseInt(
  prompt(
    "Seleccione su curso:\n 1- Matematicas (Aprueba con 10.5)\n 2- Química  (Aprueba con 10.5) \n 3- Física (Aprueba con 10.5) \n 4- Esc para salir \n Ingrese el numero del curso que deses selecionar:"
  )
);

while (curso != 4) {
  switch (curso) {

    // Matematicas
    case 1:
      let parcialMatematicas;

      do {
        parcialMatematicas = parseInt(
          prompt("Ingrese la primera nota parcial rango [0-20]")
        );
      } while (isNaN(parcialMatematicas) || parcialMatematicas > 20); //validamos que sea hasta el numero 20 como maximo

      // Utilizando Do While validamos que el ingreso sea un numero y no un texto
      let finalMatematicas;

      do {
        finalMatematicas = parseInt(prompt("Ingrese la segunda nota final rango [0-20]"));
      } while (isNaN(finalMatematicas) || finalMatematicas > 20); //validamos que sea hasta el numero 20 como maximo

      // Llamamos a la funcion promedio
      promedioMatematicas(parcialMatematicas, finalMatematicas);

      function promedioMatematicas(a, b) {
        let promedioMate = (parcialMatematicas + finalMatematicas) / 2;

        let redondeoMatematicas = Math.round(promedioMate);
        if (redondeoMatematicas >= 10.5) {
          alert(`La nota es  ${redondeoMatematicas} , felicidades ${alumno} aprobó Matemáticas`);
        } else {
          alert(`la nota es ${redondeoMatematicas}, lo sentimos ${alumno} reprobó Matemáticas`);
        }
        return;
      }

      break;



    //   Quimica
    case 2:
      
    let parcialQuimica;

    do {
      parcialQuimica = parseInt(
        prompt("Ingrese la primera nota parcial rango [0-20]")
      );
    } while (isNaN(parcialQuimica) || parcialQuimica > 20); //validamos que sea hasta el numero 20 como maximo

    // Utilizando Do While validamos que el ingreso sea un numero y no un texto
    let finalQuimica;

    do {
      finalQuimica = parseInt(prompt("Ingrese la segunda nota final rango [0-20]"));
    } while (isNaN(finalQuimica) || finalQuimica > 20); //validamos que sea hasta el numero 20 como maximo

    // Llamamos a la funcion promedio
    promedioQuimica(parcialQuimica, finalQuimica);

    function promedioQuimica(a, b) {
      let promedioQui = (parcialQuimica + finalQuimica) / 2;

      let redondeoQuimica = Math.round(promedioQui);
      if (redondeoQuimica >= 10.5) {
        alert(`La nota es  ${redondeoQuimica} , felicidades ${alumno} aprobó Química`);
      } else {
        alert(`la nota es ${redondeoQuimica}, lo sentimos ${alumno} reprobó Química`);
      }
      return;
    }
      break;





 //   Fisica
    case 3:

    let parcialFisica;

    do {
      parcialFisica = parseInt(
        prompt("Ingrese la primera nota parcial rango [0-20]")
      );
    } while (isNaN(parcialFisica) || parcialFisica > 20); //validamos que sea hasta el numero 20 como maximo

    // Utilizando Do While validamos que el ingreso sea un numero y no un texto
    let finalFisica;

    do {
      finalFisica = parseInt(prompt("Ingrese la segunda nota final rango [0-20]"));
    } while (isNaN(finalFisica) || finalFisica > 20); //validamos que sea hasta el numero 20 como maximo

    // Llamamos a la funcion promedio
    promedioFisica(parcialFisica, finalFisica);

    function promedioFisica(a, b) {
      let promedioFisi = (parcialFisica + finalFisica) / 2;

      let redondeoFisica = Math.round(promedioFisi);
      if (redondeoFisica >= 10.5) {
        alert(`La nota es  ${redondeoFisica} , felicidades ${alumno} aprobó Física`);
      } else {
        alert(`la nota es ${redondeoFisica}, lo sentimos ${alumno} reprobó Física`);
      }
      return;
    }
      break;
      



    

    default:
      console.log("No Hay curso");
      break;
  }
  curso = parseInt(
    prompt(
        "Seleccione su curso:\n 1- Matematicas (Aprueba con 10.5)\n 2- Química  (Aprueba con 10.5) \n 3- Física (Aprueba con 10.5) \n 4- Esc para salir \n Ingrese el numero del curso que deses selecionar:"
      )
  );
}
