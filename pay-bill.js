document.getElementById("pay-bill-btn").addEventListener("click", function(){

const bankAccountPay = getValueFromInput("add-momey-bill");
if(bankAccountPay === "Select back"){
    alert("please select a bank");
    return;
}


const billerAccountNumber = getValueFromInput("input-bank-account-Number-pay");
if(billerAccountNumber.length !== 11){
    alert("Invalid biller account number");
    return;
}

const payAmount = getValueFromInput("input-amount-payNumber-pay");

if(isNaN(payAmount) || payAmount<= 0) {
    alert("Please enter a valid amount");
    return;
}


const newBlaanceAfterPay = getBalance() - Number(payAmount);


const pinumber = getValueFromInput("pinNumber-pay");
if(pinumber === "1234"){
    alert(`Pay bill successfull from ${ bankAccountPay}`);
    setBalance(newBlaanceAfterPay);

    emty("pinNumber-pay");
    emty("input-amount-payNumber-pay");
    emty("input-bank-account-Number-pay");
    emty("add-momey-bill");



    const transactioContainer = document.getElementById("transection-container-div");

  const creatNewElement = document.createElement("div");

  creatNewElement.innerHTML = `
    <div class="transaction-div bg-white rounded-[10px] py-6 px-4">

    <div>
    <img src="./assets/opt-1.png" alt="">
    
    </div>

   <div> ✔ You have successfully paid $ ${payAmount} from ${bankAccountPay}
         at ${new Date()}</div>

        


                    
    </div>
  
  
  
  `;

  transactioContainer.append(creatNewElement);
}
else{
    alert("Invalid pin number");
}

})