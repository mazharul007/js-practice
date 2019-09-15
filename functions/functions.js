//farhrenheit to celcius : formula :
let celcius=(fahrenheit)=>(fahrenheit-32)*5/9;
let result = celcius(68);
console.log(result);

// multiple aurguments and default arguments 
let getTip = (total,tipPercent)=>{
    let percent = tipPercent*100;
    let tip = total *tipPercent;
    return `A ${percent}% tip of $${total} will be $${tip}`;
}
let tipResult = getTip(60,0.20);
console.log(tipResult);

