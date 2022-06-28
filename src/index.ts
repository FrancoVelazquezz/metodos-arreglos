import "./styles.css";


function burbuja(){
  let numeros: number[] = new Array(10,7,1,8,6);
  for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
      if(numeros[j]>numeros[j+1]){
        let aux = numeros[j];
        numeros[j] = numeros[j+1];
        numeros[j+1] = aux;
      }
    }
  }
  for(i=0;i<5;i++){
    console.log(numeros[i])
  }
}

//burbuja()

function escribirEnUnaLinea(arreglo:number[], cantidad:number) { 
  //Este método permite mostrar un arreglo “arreglo” de dimensión “cantidad” 
  //en una única línea, separando los valores con un espacio

  let vector:string = "" ;
  for (let i: number = 0 ; i<cantidad; i++) {
    vector += `${arreglo[i]} `;
    }
  console.log (vector); 
} 
  
function intercambiar(arreglo:number[], n:number, m:number) { 
  //Este método permite intercambiar los valores en las posiciones “i” y “j” 
  //de un arreglo “arreglo” utilizando una variable auxiliar
  //Ejemplo arreglo[n]=6, arreglo[m]=3 --> arreglo[n]=3 y arreglo[m]=6 
  let aux:number; 
  aux = arreglo[n] ;        //aux = arreglo[i] = 6
  arreglo[n] = arreglo[m] ; // arreglo[i] = arreglo[j] // arreglo[i]=3
  arreglo[m] = aux ;        //arreglo[j]=6 
}

function comparar(arreglo : number[], i : number, j : number) : number {
  //Este método permite comparar los valores en las posiciones “i” y “j” 
  //del arreglo “arreglo”.
  //Devuelve 0 si son iguales, 1 si lo que hay en “i” es mayor a lo que hay en “j”
  //-1 si lo que hay en “i” es menor a lo que hay en “j”

  let comparacion : number;
  if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
      comparacion = -1;
        } else {
          comparacion = 1;
    }
    return comparacion;
}
  
function burbuja2(arreglo : number[], cantidad : number) {
  let i : number, j : number;
  for (i = 2 ; i <= cantidad; i++) { 
    //Desde 2 hasta n (el primer elemento esta ordenado en la ultima vuelta) 
    console.log("i ", i)
    for (j = 0 ; j < (cantidad - 1); j++) { 
      console.log("j ", j);
      //Desde 0 hasta n – i (vamos achicando el rango a medida 
      //que se ubican los valores al final del arreglo) 
      if (comparar(arreglo, j, j+1) === 1 ) { 
        console.log("j, j+1 ",j, j+1);
        //Si los adyacentes j y j + 1 no están ordenados, intercambiarlos
        intercambiar(arreglo, j, j+1) ;
      }
      escribirEnUnaLinea(arreglo, 5);
    }
  }
}

let lim : number = 5; 
//let a : number[]= new Array(lim);
//cargar(a, lim, 100); 
let a : number[] = [10,4,2,7,1];
console.log("Arreglo Desordenado");
escribirEnUnaLinea(a, lim);
burbuja2(a, lim);
console.log("Arreglo Ordenado");
escribirEnUnaLinea(a, lim);

function seleccion(arreglo:number[],cantidad:number){
  leti:number,j:number,posicion:number;
  for(i=0;i<(cantidad-1);i++){
     posicioni;I
  }
     for(j=i+1;j<cantidad;j++){
       if(comparar(arreglo,posicion,j)===1){
         posicion=j;
    }
      }
     intercambiar(arreglo,i,posicion);
    }
 let lim number=5;








