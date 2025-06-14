let trampa;
let inventario = ["rifle", "cuchillo", "red", "tranquilizantes"];

function trampear() {
  const opciones = ["Animal Nativo", "Sorongo, volve a intentarlo", "Oso Kodiak"];
  return opciones[Math.floor(Math.random() * opciones.length)];
}

function elegirArma() {
  let mensaje = "Elige un arma de tu inventario:\n";
  inventario.forEach((arma, index) => {
    mensaje += `${index + 1} - ${arma}\n`; // 
  });

  const opcion = prompt(mensaje);
  const armaElegida = inventario[parseInt(opcion) - 1]; // 

  if (armaElegida) {
    return armaElegida;
  } else {
    alert("¡No elegiste un arma válida! Usarás tus manos.");
    return "manos";
  }
}

function ponerTrampa() { 
trampa = trampear(); 
alert("Cazaste un " + trampa);

if (trampa === "Animal Nativo") {
  alert("Soltalo en su hábitat y protegelo");
}
else if (trampa ==="Oso Kodiak"){
  const respuesta = prompt("¿Tenes permiso de caza? (si / no)");

  if (respuesta === "si") {
  alert("La Trampa se rompio !! el oso se dirige hacia ti");
  const arma = elegirArma(); 

    if (arma === "rifle") {
        alert("Disparaste tu rifle...hoy salen unas ricas milanesas de oso !!");
      } 
      else if (arma === "cuchillo") {
        alert("¡El oso te morfo, y uso el cuchillo de escarbadiente!");
      }
      else if (arma === "red") {
        alert("Lanzaste la red... pero el oso la rompió al instante. Salis corriendo ");
      }
      else if (arma === "tranquilizantes") {
        alert("Le disparaste dardos.El oso antes de caer dormido, te rebana un pie. ");
      }
      else if (arma === "manos") {
        alert("¡Peleaste como tus ancestros! Terminaste en el Valhalla.");
      }
    }
    else if (respuesta === "no") {
      alert("Caza ilegal, estas en el horno!!!");
    }
    else {
      alert("Respuesta no válida");
    }
  }
}

