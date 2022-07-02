
function fibonacciGen(n) {
    if (n==0){
        return [0];}
    else if(n===1){
        return[0,1];
    }
    else{
        var putput=[0,1];
        var i=2;
        while(i<n){
          
            var item=putput[i-1]+putput[i-2];
            putput.push(item);
          i++;  
        }
        
        return output ;
    }
}
    
var result =fibonacciGen(5);
console.log(result);