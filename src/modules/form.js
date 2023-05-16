export default (callback) => {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('input-name');
  const scoreInput = document.getElementById('input-score');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const score = scoreInput.value;

    nameInput.value = '';
    scoreInput.value = '';

    callback({ name, score });
  });
};