// try ... catch
function showElement() {
  const numberInput = document.querySelector('input[name="number"]');
  const number = parseInt(numberInput.value);
  const textBlocks = document.querySelectorAll('.text-block');

  try {
      if (isNaN(number) || number < 1 || number > textBlocks.length) {
          throw new Error('Некорректный номер');
      }

      textBlocks[number - 1].style.display = 'block';
      for (let i = 0; i < textBlocks.length; i++) {
          if (i !== number - 1) {
            textBlocks[i].style.display = 'none';
          }
      }
  } catch (error) {
      alert(error.message);
  }
}

// промис
const button = document.querySelector('input[type="button"]');
const numberInput = document.querySelector('input[type="number"]');

button.addEventListener('click', () => {
    const number = parseInt(numberInput.value); 
    showText(number)
        .then(() => {
            console.log('Текст показан');
        })
        .catch(() => {
            console.error('Произошла ошибка');
        });
});

function showText(number) {
    const textBlocks = document.querySelectorAll('div');
    if (isNaN(number) || number < 1 || number > textBlocks.length) {
        alert('Некорректный номер');
        return Promise.reject(); 
    }

    textBlocks.forEach(div => div.classList.remove('selected'));

    return new Promise((resolve) => {
        setTimeout(() => {
            textBlocks[number - 1].style.display = 'block';
            textBlocks[number - 1].classList.add('selected'); 
            resolve();
        }, 1000);
    });
}
const textBlocks = document.querySelectorAll('div');

// опциональная цепочка 
function showElement() {
  const numberInput = document.querySelector('input[name="number"]');
  const number = parseInt(numberInput.value);
  const textBlocks = document.querySelectorAll('.text-block');

  try {
      if (isNaN(number) || number < 1 || number > textBlocks.length) {
          throw new Error('Некорректный номер');
      }

      textBlocks.forEach(block => block.classList.remove('active'));

      textBlocks[number - 1]?.classList.add('active');
  } catch (error) {
      alert(error.message);
  }
}
const button = document.querySelector('.btn');

button.addEventListener('click', function() {
  showElement();
});
