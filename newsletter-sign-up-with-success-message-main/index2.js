var data = localStorage.getItem('email');
document.getElementById('comand').textContent = `A confirmation email has been sent to ${data}. Please open it and click the button inside to confirm your subscription`;
