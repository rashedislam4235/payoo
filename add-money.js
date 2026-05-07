document.getElementById("add-money-btn").addEventListener("click", function(){

     const history = document.getElementById("no-history-found");
      history.classList.add("hidden");


// bank account get

const bankAccount = getValueFromInput("add-money-bank");

if(bankAccount === "Select back"){
    alert("Please select a bank");
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

if( isNaN(amount) || amount <= 0){

    alert("Invalid amount")
    return;
}

const newBlaance = getBalance() + Number(amount);

// get pin

const pin = getValueFromInput("pinNumber");

if(pin === "1234"){
    alert(`Add Money successfull from ${bankAccount}
         at ${new Date()}`);

    setBalance(newBlaance);

    emty("pinNumber");
    emty("input-amountNumber");
    emty("input-bank-account-Number");
    emty("add-money-bank");

  const transactioContainer = document.getElementById("transection-container-div");

  const creatNewElement = document.createElement("div");

  creatNewElement.innerHTML = `
    <div class="transaction-div bg-white rounded-[10px] py-6 px-4">

    <div>
    <img src="./assets/opt-1.png" alt="">
    
    </div>

   <div>  Money added successfully.<br> Amount:${amount} from ${bankAccount}
         at ${new Date()}</div>

        


                    
    </div>
  
  
  
  `;

  transactioContainer.append(creatNewElement);

   
    }
else{
    alert("Invalid pin");
    return;

    
}


})