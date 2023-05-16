import _ from 'lodash';
import './style.css';
import formHandler from './modules/form.js';
import { addScore, getScores } from './modules/score.js';

document.addEventListener('DOMContentLoaded', (event) => {
    const scoresDiv = document.getElementById('scores');

    function updateScores() {
        scoresDiv.innerHTML = '';
        getScores().forEach((score, index) => {
            scoresDiv.innerHTML += `<p>${index + 1}. ${score.name}: ${score.score}</p>`;
        });
    }

    formHandler((score) => {
        addScore(score);
        updateScores();
    });

    const refreshButton = document.querySelector('.recent-score button');
    refreshButton.addEventListener('click', (event) => {
        event.preventDefault();
        updateScores();
    });
});
