var weight =prompt("type your weight : ");
var height=prompt("type your height : ");
function bmiCalculator(weight,height) {
  weight=Number(weight);
height=Number(height);
var bmi=weight/((height/100)**2);
    return bmi;
}
var result=bmiCalculator(weight,height);
result=Math.round(result)
console.log(result)