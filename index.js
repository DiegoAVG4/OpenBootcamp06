// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaA = ["tomate, cebolla, arroz, leche, agua, carne, pollo"];


// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaA.push("Aceite de Girasol")
console.log(listaA);



// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaA.pop();
console.log(listaA)



// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peli1 = [ 
    {titulo: "jason bourne", director: "Paul Greengrass", fecha: 2016,},
    {titulo: "Annabelle:Creation", director: "David F. Sandberg", fecha: 2017},
    {titulo: "Avengers: End Game", director: "Anthony y Joe", fecha: 2019,}
];
    console.log(peli1);



// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peli2 = [
    {titulo: "jason bourne", director: "Paul Greengrass", fecha: 2016,},
    {titulo: "Annabelle:Creation", director: "David F. Sandberg", fecha: 2017},
    {titulo: "Avengers: End Game", director: "Anthony y Joe Russo", fecha: 2019,}

];
    console.log(peli2);



// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
function directoreS({director}) {
    return `${director}`;
  } 
    const directores = peli1.map(directoreS);
    console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
function tituloos({titulo}){
    return `${titulo}`;
}
const encabezados = peli1.map(tituloos);
console.log(encabezados)



// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let todo = directores.concat(encabezados);
console.log(todo);



// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let todox = [...encabezados, ...directores];
console.log(todox);