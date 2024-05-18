// Получаем ссылку на изображение и элемент счётчика
var accountImage = document.getElementById('accountImage');
var counter = document.getElementById('counter');

// Добавляем обработчик события нажатия на изображение
accountImage.addEventListener('click', function() {
  // Увеличиваем значение счётчика на 1
  counter.textContent = parseInt(counter.textContent, 10) + 1;
});