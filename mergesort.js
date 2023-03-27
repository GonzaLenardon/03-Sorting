function split(arreglo) {
 let mitad ;   

 if ((arreglo.length % 2) === 0) {
      mitad = arreglo.length / 2
 } else
     { mitad = Math.ceil(arreglo.length / 2) 
 }

 
 let firstHalf = arreglo.slice(0, mitad)
 let secondHalf = arreglo.slice( mitad, arreglo.length)  
 

    return [firstHalf, secondHalf];
  }


 function merge (arr1, arr2) {
    return arr1.concat(arr2) 
  }


