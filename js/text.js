function typeText(textElement, text, interval) {
        let index = 0;
        const timer = setInterval(() => {
          textElement.textContent = text.slice(0, index);
          index++;

          if (index > text.length) {
            clearInterval(timer);
            setTimeout(() => {
              // Викликаємо ту ж функцію для видалення тексту
              eraseText(textElement, text, interval);
            }, 1000); // Почекайте 1 секунду перед видаленням
          }
        }, interval);
      }

      function eraseText(textElement, text, interval) {
        let index = text.length;
        const timer = setInterval(() => {
          textElement.textContent = text.slice(0, index);
          index--;

          if (index < 0) {
            clearInterval(timer);
            // Викликаємо ту ж функцію для початкового набору тексту
            setTimeout(() => {
              typeText(textElement, text, interval);
            }, 1000); // Почекайте 1 секунду перед початковим набором
          }
        }, interval);
      }

      document.addEventListener('DOMContentLoaded', () => {
        const textElement = document.getElementById('countdownText');
        const text = 'ідлік до завершення курсу Go It';
        const interval = 150; // Інтервал між символами (в мілісекундах)

        // Запускаємо анімацію
        typeText(textElement, text, interval);
      });



      