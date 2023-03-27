/* 
function bubbleSort (arreglo) {
  for(let i=0; i < arreglo.length-1; i++) {
    let {n1,n2} =  swap(arreglo[i], arreglo[i+1])    
     } 
}

function swap (num1, num2 ) {
    if ( num1 > num2) 
        {return num1, num2 }
     else {return num2 , num1 }
 
} */



/* function bubbleSort(array) {
    let huboCambios=false
 
 for (let i=0;i<array.length-1;i++) {
      if (swap(array[i],array[i+1])) {
        huboCambios=true
        let numMayor=array[i]
        array[i]=array[i+1]
        array[i+1]=numMayor
      }
    }
    if (huboCambios) return bubbleSort(array)
    return array
  }
  

  function swap(num1, num2) {
    if (num1>num2) return true
    else return false
  } */

   

 function bubbleSort(array) {
 let hayCambios = false  
  for (let i=0; i < array.length-1 ; i++) {
      if (array[i] > array[i+1]) {
         [array[i], array[i+1]] =  swap(array[i], array[i+1])
         hayCambios = true
        
        }
    }
 
     if (hayCambios) return bubbleSort(array)
     
     return array
  }
  

  function swap(num1, num2) {
     return [num2,num1]
  }


