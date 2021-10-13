//Clase I

let nombre= "Jonathan";
let	apellido= "Salini";
let nombreCompleto = nombre + " " + apellido;

// Rendimiento  ufas mes 1
  var auto1 = 500;
  let vida1 = 600;
  let hogar1 = 20;
  let salud1 = 10;

  let suma1 = auto1 + vida1 +hogar1 + salud1;
  console.log("La suma total de Ufas es:" + suma1);


// Rendimiento ufas mes 2
  var auto2 = 400;
  let vida2 = 100;
  let hogar2 = 100;
  let salud2 = 100;

  let suma2 = auto2 + vida2 +hogar2 + salud2;
  console.log("La suma total de Ufas es:" + suma2);

// Rendimiento ufas mes 3
  var auto3 = 400;
  let vida3 = 50;
  let hogar3 = 50;
  let salud3 = 100;

  let suma3 = auto3 + vida3 +hogar3 + salud3;
  console.log("La suma total de Ufas es:" + suma3);

//mensajes

   console.log("Bienvenidos al muro comercial");
   console.log("El nombre completo del usuario es: "+nombreCompleto); 
   alert("Bienvenidos al muro comercial")	

   let nombreIngresado = prompt("Ingrese su nombre");
   alert("Bienvenid@s, estas a pasos de visualizar tu rendimiento " + nombreIngresado);


// Clase II

// Condiciones anidadas

// Aca se pregunta la meta que posee cada ejecutivo al vender mas de un producto a un mismo cliente.

let metaCruce = parseInt(prompt("¿Cual es el % de tu meta en cruce de productos? (Ingresa solo numeros)"));	

if (metaCruce == 20) {
   console.log("Excelente conoces tu meta en cruce, estas listo para lograr tus objetivos");
} else if (metaCruce < 20) {
   console.log("Te faltaron puntos porcentuales, tu meta es del 20% en cruce"); 
}else {
   console.log("te pasaste, tu meta es del 20% en cruce");
}

// Variables Booleans

  let cumplimientoTotal = parseInt(prompt("Ingrese su cumplimiento final total Ufas porcentual (%) (digite solo numeros)"));
  let cumplimientoMayor = (cumplimientoTotal > 99);
  console.log("Su cumplimiento es mayor qué: " + cumplimientoMayor);
  if (cumplimientoMayor) {
     alert("Usted logra el rendimiento esperado");
  } else {
     alert("Usted no cumple el rendimiento esperado, vamos a trabajar juntos para lograr objetivos");  
  }

// Operador logico

let masImportante = prompt("¿Que es lo mas importante para nosotros?");
  if ((masImportante == "clientes") || (masImportante == "Clientes")|| (masImportante == "CLIENTES") || (masImportante == "LOS CLIENTES") || (masImportante == "los clientes") || (masImportante == "Los Clientes") || (masImportante =="Los clientes")){
  console.log("Respuesta correcta");
} else {
  console.log("Respuesta incorrecta, son los: Clientes");
  }   

//combinacion de operadores

let nombreUsuarioPermitido = prompt ("Ingresa nombre del usuario con acceso permitido");
if ((nombreUsuarioPermitido != "") && (((nombreUsuarioPermitido == "Jonathan") || (nombreUsuarioPermitido == "jonathan") || (nombreUsuarioPermitido == "JONATHAN")))){
  alert("Usuario Permitido");

}else{
  alert("Usuario no permitido, esto se autodestruira en 5 segunos");
}




