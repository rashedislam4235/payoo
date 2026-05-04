function getValueFromInput (id){


    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// getBalance machine 


function getBalance(){
    const balanceElemnet = document.getElementById("balance");

    const balance = balanceElemnet.innerText;

    return Number(balance);

}



// set balance 


function setBalance (value){

    const balanceElemnet = document.getElementById("balance");

    balanceElemnet.innerText = value;
    

}


// show only clicked button

function showOnly (id){

    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const paybill = document.getElementById("pay-bill");
     const transaction = document.getElementById("transaction");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    paybill.classList.add("hidden");
     transaction.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
