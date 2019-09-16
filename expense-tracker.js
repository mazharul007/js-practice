// expense trcaker 
const account ={
    name:"Mazharul",
    expense:[],
    income:[],
    addExpenses:function(des,amount){
        this.expense.push({
            des: des,
            amount:amount
        })
    },
    addIncome:function(des,amount){
        this.income.push({
            des:des,
            amount:amount
        })
    },
    getAccountSumary:function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        let balanceLeft = 0;
        this.expense.forEach(function(exp){
            totalExpenses = totalExpenses+exp.amount;
        })
        this.income.forEach(function(inc){
            totalIncome = totalIncome+ inc.amount;
        })
        balanceLeft = totalIncome-totalExpenses;
        return `${this.name} has left ${balanceLeft}. And his income was ${totalIncome} and his expense was ${totalExpenses}`;
    }
}
account.addIncome("job",1000);
account.addExpenses("rent",600);
account.addIncome('freelancing', 200);
account.addExpenses("rent",550);
console.log(account.getAccountSumary());

