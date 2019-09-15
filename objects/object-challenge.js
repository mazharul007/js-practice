// objects challenge : return object 

let formulaOfConversion=(fahrenheit)=>{
    let c = (fahrenheit-32)*5/9;
    let k = (fahrenheit+459.67)*5/9;
    return {
        celcius:`Farhenheit to Celcius : ${c}`,
        kelvin:` Farhenheit to kelvin : ${k}`
    }
}

let fahrenheitToCelcius = formulaOfConversion(74);
console.log(fahrenheitToCelcius.celcius);
let fahrenheitToKelvin = formulaOfConversion(74);
console.log(fahrenheitToKelvin.kelvin);

//objcet refernces :
let user={
    name:'naumy',
    age:25
}
console.log(user.age);
user.age=26;
console.log(user.age); // Exp: object is reference type 
console.log(user);

// challenge : Expense Tracker:
let myAccount ={
    name:'Mazharul Hqoue Naumy',
    income:0,
    expenses:0
}

let addIncome =(account,income)=>account.income+=income;
let expenses= (account,expenses)=>account.expenses+=expenses;
let accountSumarry =account=>{
    let balanceLeft = account.income-account.expenses;
    return `${myAccount.name} has $${balanceLeft}. And ${myAccount.name}'s income was $${myAccount.income} And Expense was $${myAccount.expenses}`;
}
let resetAccount=account=>{
    account.income=0;
    account.expenses=0;
}
// function calling
// addIncome(myAccount,1500);
// expenses(myAccount,300);
// expenses(myAccount,200);
// console.log(accountSumarry(myAccount));
// resetAccount(myAccount);
// console.log(accountSumarry(myAccount)); // after resteing the values


// challenge : Expense Tracker in a  different way 
let kanizsAcc ={
    name:'Kaniz fatema flora',
    income:0,
    expenses:0,
    addIncome(income){
     this.income +=income;   
    },
    expense(expenses){
        this.expenses+= expenses; 
    },
    accountSumarry(){
        let balanceLeft=this.income- this.expenses;
        return `${this.name} has $${balanceLeft} left. And ${this.name}'s income was $${this.income} And Expense was $${this.expenses}`;
    }  
}
kanizsAcc.addIncome(1000);
kanizsAcc.expense(300);
console.log(kanizsAcc.accountSumarry());