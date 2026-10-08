// Валидация формы: пустые поля -> ошибка, заполненные -> успех
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lead-form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const message = document.getElementById('form-message');

  function showError(text) {
    message.textContent = text;
    message.classList.remove('success');
    message.classList.add('error');
  }

  function showSuccess(text) {
    message.textContent = text;
    message.classList.remove('error');
    message.classList.add('success');
  }

  function validate() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    // Сброс подсветки
    nameInput.classList.remove('input-invalid');
    phoneInput.classList.remove('input-invalid');

    if (!name || !phone) {
      if (!name) nameInput.classList.add('input-invalid');
      if (!phone) phoneInput.classList.add('input-invalid');
      showError('Пожалуйста, заполните имя и телефон.');
      return false;
    }

    return true;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validate()) return;

    showSuccess(`Спасибо, ${nameInput.value.trim()}! Мы скоро вам перезвоним.`);
    form.reset();
  });

  // Убираем ошибку при вводе
  [nameInput, phoneInput].forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('input-invalid');
      if (message.classList.contains('error')) {
        message.textContent = '';
        message.classList.remove('error');
      }
    });
  });
});
