// consider: what data type is game here? where will you need to pass it this data type in your app?
export function renderGame(game) {
    const div = document.createElement('div');
    const team1Div = renderTeam(game.name1, game.score1);
    const team2Div = renderTeam(game.name2, game.score2);

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
}

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;
    
    teamDiv.append(nameDiv, scoreDiv);


    return teamDiv;
}