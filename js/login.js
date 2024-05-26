document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault(); // зупиняємо стандартну відправку форми
    
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-pass').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (email && password) {
        errorMessage.textContent = ''; // очищуємо повідомлення про помилку
        window.location.href = 'registeredPage.html'; // перенаправлення на іншу сторінку
    } else {
        errorMessage.textContent = 'Будь ласка, заповніть всі поля.';
    }
});

const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon);
    
    iconEye.addEventListener('click', () => {
        // Зміна пароля на текст
        if (input.type === 'password') {
            // Перемикання на текст
            input.type = 'text';
            // Додавання іконки
            iconEye.classList.add('ri-eye-line');
            // Видалення іконки
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            // Зміна на пароль
            input.type = 'password';
            // Видалення іконки
            iconEye.classList.remove('ri-eye-line');
            // Додавання іконки
            iconEye.classList.add('ri-eye-off-line');
        }
    });
}

showHiddenPass('input-pass', 'input-icon');