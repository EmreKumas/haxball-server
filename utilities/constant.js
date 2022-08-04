import { restartCommand, shuffleCommand, afkCommand } from "./command.js";

export const TOKEN = "thr1.AAAAAGLsAJZMRU3-zBm-yg.aD3nXEUKPIg";

export const SCORE_LIMIT = 3;
export const TIME_LIMIT = 3;
export const IDEAL_TEAM_LIMIT = 3;

export const TEAM = { SPECTATORS: 0, RED: 1, BLUE: 2 };
export const GAME_STATE = { PLAY: 0, PAUSE: 1, STOP: 2 };

export const COLORS = {
	ANNOUNCEMENT_COLOR: 0xFFEFD6,
	ALERT_COLOR: 0xBD3333,
	RED_ALERT_COLOR: 0xFF4C4C,
	BLUE_ALERT_COLOR: 0x4A68FF
};

export const playerIdentities = [
	{
		"name": "Usta",
		"publicId": "j9F42CoPFpL-_5_Qhli_irMrCAlPncTW51XUcRwHi78"
	},
	{
		"name": "Pat",
		"publicId": ""
	},
	{
		"name": "Kek",
		"publicId": ""
	},
	{
		"name": "Tellak",
		"publicId": ""
	}
];

export const COMMANDS = {
	"!r": {
		"description": "Restarts the game instantenously",
		"requireAdmin": false,
		"function": restartCommand
	},
	"!s": {
		"description": "Shuffles players and restarts the game",
		"requireAdmin": false,
		"function": shuffleCommand
	},
	"!afk": {
		"description": "Sets player away from keyboard",
		"requireAdmin": false,
		"function": afkCommand
	}
};
