import { room, variables } from "../app.js";
import { removeItem } from "../utilities/common.js";
import { playerIdentities } from "../utilities/constant.js";
import { addToGame, isGameFull, updateTeams } from "../utilities/team.js";

function grantIfAdmin(player) {
	let identityFound = playerIdentities.find(identity => identity.publicId == player.auth) != null;

	if (identityFound) {
		room.setPlayerAdmin(player.id, true);
	}
}

export function onPlayerJoin(player) {
	grantIfAdmin(player);
	updateTeams();

	if (isGameFull()) {
		return;
	}

	addToGame(player);
};

export function onPlayerLeave(player) {
	removeItem(variables.afkPlayers, player.id);
};
