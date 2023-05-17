import './style.css';
import { game, getScores, submitScores } from './modules/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const scoresDiv = document.getElementById('scores');

  async function updateScores() {
    const scores = await getScores();
    scoresDiv.innerHTML = '';
    scores.forEach((score, index) => {
      scoresDiv.innerHTML += `<p>${index + 1}. ${score.user}: ${score.score}</p>`;
    });
  }

  await updateScores();

  document.querySelector('.recent-score button').addEventListener('click', async () => {
    await updateScores();
  });

  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('input-name').value;
    const score = document.getElementById('input-score').value;
    await submitScores(name, score);
    await updateScores();
  });

  await game('micro-game');
});
