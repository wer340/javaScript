var year=prompt("give your year?  ");
year=Number(year);
if (year%4===0){
  if(year%100===0){
      if(year%400===0){
          console.log("leap year")
      }
      else{
          console.log("not leap")
      }
  } 
  else{
      console.log("leap year")
  }  
}
else{
    console.log("Not leap year")
}