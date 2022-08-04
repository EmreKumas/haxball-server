import { room, variables } from "../app.js";
import { IDEAL_TEAM_LIMIT, TEAM } from "./constant.js";
import { removeItem, shuffle } from "./common.js";

export function updateTeams() {
    let players = room.getPlayerList();

	variables.teamRed = players.filter(p => p.team == TEAM.RED);
	variables.teamBlue = players.filter(p => p.team == TEAM.BLUE);
	variables.spectators = players.filter(p => p.team == TEAM.SPECTATORS);
}

export function isGameFull() {
    return variables.teamRed.length + variables.teamBlue.length == 2 * IDEAL_TEAM_LIMIT;
}

export function addToGame(player) {
	if (variables.teamRed.length === variables.teamBlue.length) {
		let randomTeam = Math.floor(Math.random() * 2);
		room.setPlayerTeam(player.id, randomTeam + 1);
		(randomTeam == 0) ? variables.teamRed.push(player) : variables.teamBlue.push(player);
	} else if (variables.teamRed.length < variables.teamBlue.length) {
		room.setPlayerTeam(player.id, TEAM.RED);
		variables.teamRed.push(player);
	} else {
		room.setPlayerTeam(player.id, TEAM.BLUE);
		variables.teamBlue.push(player);
	}
}

export function addAnyoneToGame() {
	updateTeams();

	if (isGameFull() || variables.spectators.length == variables.afkPlayers.length) {
		return;
	}

	let luckyGuy = variables.spectators.find(player => !variables.afkPlayers.includes(player.id));
	
	removeItem(variables.spectators, luckyGuy);
	
	addToGame(luckyGuy);
}

export function recalculateTeams() {
	// Belli koşullar kontrol edilerek shuffle olup olmadığına karar verilecek.
	resetAllToSpectators();
	setTimeout(() => randomlyDistribute(), 500);

	setTimeout(() => room.startGame(), 1000);
}

function resetAllToSpectators() {
	let players = room.getPlayerList();

	players.forEach(player => room.setPlayerTeam(player.id, TEAM.SPECTATORS));
}

function randomlyDistribute() {
	updateTeams();
	shuffle(variables.spectators);
	
	while (!isGameFull() && variables.spectators.length > 0) {
		let randomNumber = Math.floor(Math.random() * variables.spectators.length);
		let randomPlayer = variables.spectators[randomNumber];

		addToGame(randomPlayer);

		variables.spectators.splice(randomNumber, 1);
	}
}
