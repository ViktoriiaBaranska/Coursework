document.getElementById('rgForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var repeatPassword = document.getElementById('inputRepeatPassword').value;
    var phoneno = document.getElementById('inputPhoneno').value;
    var errorMessage = document.getElementById('errorMessage');

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Невірний формат електронної пошти';
        errorMessage.style.display = 'block';
        return;
    }

    // Phone number validation
    var phonenoPattern = /^(?:\+380)?\d{10}$/; // Adjusted to match +380 followed by 9 digits for a total of 12 digits.
    if (!phonenoPattern.test(phoneno)) {
        errorMessage.textContent = 'Невірний формат номера телефону';
        errorMessage.style.display = 'block';
        return;
    }

    // Password validation
    var passwordPattern = /^(?=.*[A-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Пароль має містити велику літеру та бути не менше 8 символів';
        errorMessage.style.display = 'block';
        return;
    }

    if (password !== repeatPassword) {
        if (repeatPassword === '') {
            errorMessage.textContent = 'Підтвердити пароль не може бути порожнім.';
        } else {
            errorMessage.textContent = 'Паролі не співпадають.';
        }
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    
    // Navigate to the new page
    window.location.href = 'registeredPage.html';
});