import './style.css';
import { game, getScores, submitScores } from './modules/api.js';

document.addEventListener('DOMContentLoaded', async(e) => {
  await game('micro-game');
  
  const scoresDiv = document.getElementById('scores');
  await updateScores();

  async function updateScores() {
    const scores = await getScores();
    scoresDiv.innerHTML = '';
    scores.forEach((score, index) => {
      scoresDiv.innerHTML += `<p>${index + 1}. ${score.user}: ${score.score}</p>`;
    });
  }

  document.querySelector('.recent-score button').addEventListener('click', async () => {
    await updateScores();
  });

  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('input-name').value;
    const score = document.getElementById('input-score').value;
    console.log(`Submitting score for ${name} with score ${score}`);
    const result = await submitScores(name, score);
    console.log(result);
    updateScores();
    await updateScores();
});
})
