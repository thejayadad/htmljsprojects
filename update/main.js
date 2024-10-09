const input = document.querySelector('.my-input');

input.addEventListener('input', function() {
  const inputValue = input.value;
  document.querySelector('.output').textContent = `You typed: ${inputValue}`;
});
