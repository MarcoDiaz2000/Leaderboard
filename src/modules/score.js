let scores = [];

const loadScore = () => {
    const storedScores = localStorage.getItem('scores');
    if (storedScores) {
        scores = JSON.parse(storedScores);
    }
}

loadScore();

export const addScore = (score) => {
    scores.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
}

export const getScores = () => {
    return scores;
}