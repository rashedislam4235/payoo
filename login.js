document.getElementById('log-in').addEventListener('click', function(){

const contactNumber = document.getElementById('input-number');

const mobileNumber = contactNumber.value;

const password = document.getElementById('input-password');

const pin = password.value;

if(mobileNumber === '01727829018' && pin === '1234'){
    alert('login success');
    window.location.assign('./home.html')
}

else{
    alert('please try again')
}



})