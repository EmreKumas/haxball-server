import { room, variables } from "../app.js";
import { removeItem } from "./common.js";
import { COLORS, TEAM } from "./constant.js";
import { addAnyoneToGame, recalculateTeams, isGameFull, addToGame } from "./team.js";

export function restartCommand(player, message) {
    variables.restartOnCommand = true;

	room.sendAnnouncement(`${player.name} started a rematch!`, null, COLORS.ANNOUNCEMENT_COLOR, "bold");
	room.stopGame();
	
    setTimeout(() => { room.startGame(); }, 10);
}

export function shuffleCommand(player, message) {
	variables.restartOnCommand = true;

	room.sendAnnouncement(`${player.name} shuffled the players!`, null, COLORS.ANNOUNCEMENT_COLOR, "bold");
	room.stopGame();

	recalculateTeams();
}

export function afkCommand(player, message) {
	if (variables.afkPlayers.includes(player.id)) {
		room.sendAnnouncement(`${player.name} returns from afk!`, null, COLORS.ANNOUNCEMENT_COLOR, "bold");
		removeItem(variables.afkPlayers, player.id);

		!isGameFull() && addToGame(player);

		return;
	}

	room.setPlayerTeam(player.id, TEAM.SPECTATORS);
	setTimeout(_ => addAnyoneToGame(), 500);

	room.sendAnnouncement(`${player.name} sets himself as afk!`, null, COLORS.ANNOUNCEMENT_COLOR, "bold");
	variables.afkPlayers.push(player.id);
}
