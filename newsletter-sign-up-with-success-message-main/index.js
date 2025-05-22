var submit = document.getElementById('submit');
var email = document.getElementById('email');
var adviced = document.getElementById('adviced');
var emailDesing = document.querySelector('.emailDesing');

submit.addEventListener('click', ()=>{
    var emailArray = email.value.split('');
    var confir = 0;
    for( var i = 1; i <= emailArray.length; i++){
        if(emailArray[i] == "@"){
            confir = 1;
        }
    }
    if(confir == 1){
        window.location = 'index2.html'
        localStorage.setItem('email', email.value);
    }
    if(confir != 1 || email.value == ''){
        emailDesing.style.borderColor = 'red';
        emailDesing.style.color = 'red';
        emailDesing.style.backgroundColor = 'hsl(0, 100%, 87%)';
        adviced.textContent = 'Valid email required'
    }
    
})
