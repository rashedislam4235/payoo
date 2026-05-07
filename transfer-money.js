document.getElementById("transfer-money-btn").addEventListener("click", function (){


     const history = document.getElementById("no-history-found");
      history.classList.add("hidden");


const userAccountNumbers = getValueFromInput("input-userAccount-Number");
  if(userAccountNumbers.length !=11){

      alert("Invalid User Account number");
      return;
  }

 const amounts = getValueFromInput("input-transfer-amount");

 if( isNaN(amounts) || amounts <=0){
      alert("Invalid amount");
      return;
  }

const newbalance = getBalance() - Number(amounts);

const pin = getValueFromInput("pin-for-transfer-money");

if(pin === "1234"){
    alert(`Transfer Money successfull  at ${new Date()}`);
    setBalance(newbalance);

    emty("pin-for-transfer-money");
    emty("input-transfer-amount");
    emty("input-userAccount-Number");

    const transactioContainer = document.getElementById("transection-container-div");

  const creatNewElement = document.createElement("div");

  creatNewElement.innerHTML = `
    <div class="transaction-div bg-white rounded-[10px] py-6 px-4">

    <div>
    <img src="./assets/opt-1.png" alt="">
    
    </div>

   <div>  ✔ Transfer Complete! $ ${amounts} has been sent to Account No: ${userAccountNumbers}

         at ${new Date()}</div>

        


                    
    </div>
  
  
  
  `;

  transactioContainer.append(creatNewElement);
}
else{
    alert("Invalid pin number");
}
    






})