document.getElementById('cash-out-btn').addEventListener('click', function(){


    

    // get agent number
    const inputAgentNumber = document.getElementById('input-Agent-Number');
    const agentNumber = inputAgentNumber.value;

     if(agentNumber.length != 11){
        alert('Invalid agent number')
         return;
      }

   

    const inputAmount = document.getElementById('input-amount');
    const amount = inputAmount.value;

// get current balance
    const currentBalance = document.getElementById('balance');

    const balanceValue = currentBalance.innerText;
    

    // calcultion of new balance


    const newbalance = Number(balanceValue)  - Number(amount);
    if(newbalance < 0){

        alert('Invalid amount');
        return;

    }

    const paswords = document.getElementById('pin');
    const pin = paswords.value;

    if(pin === '1234'){
        alert('cashout successfull');

        currentBalance.innerText = newbalance;

        
    }
    else{

        alert('Invalid pin Number');
        return;
    }












})