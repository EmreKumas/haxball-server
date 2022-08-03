import { room } from "../app.js";
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
