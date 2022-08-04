import { COMMANDS } from "../utilities/constant.js";

export function onPlayerChat(player, message) {
    if (!message.startsWith("!")) {
        return true;
    }

    if (COMMANDS.hasOwnProperty(message) && (!COMMANDS[message].requireAdmin || (COMMANDS[message].requireAdmin && player.admin))) {
		COMMANDS[message].function(player, message);
	}

	return false;
};
