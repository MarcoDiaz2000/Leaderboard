export default callback => {
  const form = document.getElementById('form');
  const nameInput = document.getElementById('input-name');
  const scoreInput = document.getElementById('input-score');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = nameInput.value;
    let score = scoreInput.value;

    nameInput.value = '';
    scoreInput.value = '';

    callback({ name: name, score: score});
  });
}