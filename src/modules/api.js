let id;

export async function game(name) {
    let response;
    const gameId = localStorage.getItem('gameId');
    if (!gameId) {
      response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
          method: 'POST',
          body: JSON.stringify({ name, }),
          headers: {'Content-type': 'application/json; charset=UTF-8',},
      });
      const data = await response.json();
      id = data.result.split(' ')[3];
      localStorage.setItem('gameId', id);
    } else {
      id = gameId;
    }
  }

export async function getScores() {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);
    const data = await response.json();
    console.log(data); 
    return data.result;
}

export async function submitScores(name, score) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    method: 'POST',
    body: JSON.stringify({user: name, score,}),
    headers: {'Content-type': 'application/json; charset=UTF-8',},       
    });
    console.log(response);
    const data = await response.json();
    console.log(data); 
    return data;
}

game('maicro-game');
