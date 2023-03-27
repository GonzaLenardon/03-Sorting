describe('Bubble Sort', function(){

    it('Recibimos array vacio y devolvemos array vacio', function(){
        expect( bubbleSort([]) ).toEqual( [] );
      });
  
    
    it('Recibimos array desordenado y devolvemos una array ordenado de menor a mayor', function(){
      expect( bubbleSort([3,5,4,2,1]) ).toEqual( [1,2,3,4,5] );
    });
 

    it('Recibimos array ordenado y devolvemos array ordenado de menor a mayor', function(){
         expect( bubbleSort([1,2,3,4,5]) ).toEqual( [1,2,3,4,5] );
      });
  
    it('Recibimos array ordenado de mayor a menor y devolvemos array ordenado de menor a mayor', function(){
        expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
      });
  
       
    it('Cuenta la cantidad de veces que se invocó la función swap', function () {
        spyOn(window, 'swap').and.callThrough(); 
        window.bubbleSort([2,1]);
        expect(window.swap.calls.count()).toEqual(1);
      });




});