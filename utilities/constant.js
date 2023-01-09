import {
	restartCommand,
	shuffleCommand,
	afkCommand,
	fantomCommand,
	tellakCommand,
	ustaCommand,
	dayiCommand,
	siyahCommand,
	zertCommand,
	atmaCommand,
	ercikCommand,
	dundoCommand,
	ruhCommand,
	komutCommand,
	bosCommand,
	tokatCommand,
	abisiCommand
} from "./command.js";

export const TOKEN = process.env.HEADLESS_TOKEN;

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
		"publicId": "WNJWKFGr-wztb8q4xRy4X9klwSa3JTyDTzDuGF1vdpE"
	},
	{
		"name": "Pat",
		"publicId": "C8Pqwy5Rgy5eM6TLXim9yXCR9ZH5qycUtop0vIChAt8"
	},
	{
		"name": "Kek",
		"publicId": "uVyi66aqxazL1kWjpR_1zcqwpRTiJMmBMMrIUZ7d6Rg"
	},
	{
		"name": "Tellak",
		"publicId": "f3JtX9JUDRwAiB51SfqsA4scSx_oBNg93CMcAINVJIA"
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
	},
	"!komutlar": {
		"description": "Lists all available commands",
		"requireAdmin": false,
		"function": komutCommand
	},
	"!fantom": {
		"description": "cemil babba soforun arkasindadir her zaman",
		"requireAdmin": false,
		"function": fantomCommand
	},
	"!tellak": {
		"description": "tellak ban",
		"requireAdmin": false,
		"function": tellakCommand
	},
	"!usta": {
		"description": ":pomp:",
		"requireAdmin": false,
		"function": ustaCommand
	},
	"!dayi": {
		"description": "aha dayiya sor",
		"requireAdmin": false,
		"function": dayiCommand
	},
	"!siyah": {
		"description": "her sey mi siyah",
		"requireAdmin": false,
		"function": siyahCommand
	},
	"!zert": {
		"description": "tellak babba sizi zert zert geseledi",
		"requireAdmin": false,
		"function": zertCommand
	},
	"!ercik": {
		"description": "bu bir sanal alem, lütfen haddinizi bilin arkadaşlar",
		"requireAdmin": false,
		"function": ercikCommand
	},
	"!atma": {
		"description": "yalvarırım atma",
		"requireAdmin": false,
		"function": atmaCommand
	},
	"!dundo": {
		"description": "efendim lütfen açar mısınız kapıyı",
		"requireAdmin": false,
		"function": dundoCommand
	},
	"!ruh": {
		"description": "ruh gibi geziyosun",
		"requireAdmin": false,
		"function": ruhCommand
	},
	"!tokat": {
		"description": "tokatlarim seni",
		"requireAdmin": false,
		"function": tokatCommand
	},
	"!abisi": {
		"description": "geliyorum ağğbisi",
		"requireAdmin": false,
		"function": abisiCommand
	},
	"!bos": {
		"description": "nerdeyse bos yapacak",
		"requireAdmin": false,
		"function": bosCommand
	}
};
