let isBonusClaimed = false;
document.getElementById("get-bonus-btn").addEventListener("click", function(){

    if (isBonusClaimed === true) {
        alert("You have already claimed your bonus! You cannot take it twice.");
        return; // এখানেই কোড থেমে যাবে
    }
const getCupoon = getValueFromInput("coupon-input");

 if(getCupoon.length !=7){
    alert("Wrong cupon!");
    return;

}
else{

    
    alert("Congrats! 🥳 You've unlocked a bonus of $500! Your balance has been updated");
    const bonusAmount = 500;

    const update = getBalance() + bonusAmount;

    setBalance(update);


    isBonusClaimed = true; 


     emty("coupon-input");




    

        // ৬. (অ্যাশনাল) বাটনটি ডিসেবল করে দিতে পারেন যাতে ইউজার আর ক্লিক না করতে পারে
        document.getElementById("get-bonus-btn").disabled = true;
        document.getElementById("get-bonus-btn").innerText = "Bonus Claimed";
        document.getElementById("get-bonus-btn").style.backgroundColor = "gray";

}

})
