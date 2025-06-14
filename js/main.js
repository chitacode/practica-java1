let trampa;

function trampear() {
  const opciones = ["Animal Nativo", "Sorongo, volve a intentarlo", "Oso Kodiak"];
  return opciones[Math.floor(Math.random() * opciones.length)];
}

function ponerTrampa(){ 
trampa = trampear(); 
alert("Cazaste un " + trampa);

if (trampa === "Animal Nativo") {
  alert("Soltalo en su hábitat y protegelo");
}
else if (trampa ==="Oso Kodiak"){
  const respuesta = prompt("¿Tenes permiso de caza? (si / no)");

  if (respuesta === "si") {
  alert("La Trampa se rompio !! el oso se dirije hacia ti");
  let cazar = prompt("elegi una opcion: \n1-Huir \n2-Usar Rifle \n3-Pelear como tus ancestros mano a mano"); 
    
  if (cazar == "1") {
        alert("Corriste como un cobarde!");
      } else if (cazar == "2") {
        alert("Disparaste tu rifle...hoy salen unas ricas milanesas de oso !!");
      } else if (cazar == "3") {
        alert("¡Combate épico! Pero terminaste en el Valhalla");
      } else {
        alert("Opción no válida");
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



   