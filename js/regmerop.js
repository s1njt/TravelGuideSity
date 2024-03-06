document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Отмена стандартного действия отправки формы
  
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const datetime = document.getElementById('datetime').value;
  
      // Проверка полного заполнения полей
      if (name === '') {
        displayError('name', 'Поле обязательно для заполнения');
        return;
      } else {
        hideError('name');
      }
      // Проверка других полей...
  
      // Если все поля заполнены
      // Показ уведомления об успешной отправке
      const successNotification = document.createElement('div');
      successNotification.classList.add('success-notification');
      successNotification.textContent = 'Вы успешно записались на мероприятие!';
      document.body.appendChild(successNotification);
  
      // Закрытие модального окна
      $('#registrationModal').modal('hide');
  
      // Скрытие уведомления через 3 секунды
      setTimeout(function () {
        successNotification.style.display = 'none';
      }, 3000);
    });
  
    function displayError(fieldId, errorMessage) {
      const errorElement = document.getElementById(`${fieldId}Error`);
      errorElement.textContent = errorMessage;
      errorElement.style.display = 'block';
    }
  
    function hideError(fieldId) {
      const errorElement = document.getElementById(`${fieldId}Error`);
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  });