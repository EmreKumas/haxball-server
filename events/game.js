import { room, variables } from "../app.js";
import { GAME_STATE, COLORS } from "../utilities/constant.js";
import { recalculateTeams } from "../utilities/team.js";

export function onGameStart(byPlayer) {
    variables.gameState = GAME_STATE.PLAY;
};

export function onGameStop(byPlayer) {
    variables.gameState = GAME_STATE.STOP;

    if (byPlayer) {
		return;
	}

    room.sendAnnouncement("3 seconds countdown started before shuffling the players!", null, COLORS.ANNOUNCEMENT_COLOR, "bold");
    recalculateTeams();
};

export function onGamePause(byPlayer) {
	variables.gameState = GAME_STATE.PAUSE;
}

export function onGameUnpause(byPlayer) {
	setTimeout(() => { variables.gameState = GAME_STATE.PLAY; }, 1000);
}
