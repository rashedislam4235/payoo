document.getElementById("add-money-btn").addEventListener("click", function(){

// bank account get

const bankAccount = getValueFromInput("add-money-bank");

if(bankAccount === "Select back"){
    alert("please select a bank");
    return;
}

// get bank account number
const bankAccountNumber = getValueFromInput("input-bank-account-Number");

if(bankAccountNumber.length !== 11){

    alert("Invalid account number");
    return;
}


// get ammount

const amount = getValueFromInput("input-amountNumber");

if(amount < 0 || amount === 0){

    alert("Invalid amount")
    return;
}

const newBlaance = getBalance() + Number(amount);

// get pin

const pin = getValueFromInput("pinNumber");

if(pin === "1234"){
    alert(`Add Money successfull from ${bankAccount}`);

    setBalance(newBlaance);
}

else{
    alert("Invalid pin");
    return;

    
}



})