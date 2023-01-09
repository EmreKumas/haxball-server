import { room, variables } from "../app.js";
import { removeItem } from "./common.js";
import { COLORS, COMMANDS, TEAM } from "./constant.js";
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

function isPublicCommand(command) {
	return command !== "!r" || command !== "!s"
}

export function komutCommand(player, message) {
	let commands = Object.keys(COMMANDS).filter(isPublicCommand).join();
	room.sendAnnouncement(`${commands}`, player.id, COLORS.ANNOUNCEMENT_COLOR, "bold");
}

export function fantomCommand(player, message) {
	room.sendAnnouncement(`cemil babba soforun arkasindadir her zaman`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function tellakCommand(player, message) {
	room.sendAnnouncement(`tellak ban`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function ustaCommand(player, message) {
	room.sendAnnouncement(`:pomp:`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function dayiCommand(player, message) {
	room.sendAnnouncement(`aha dayiya sor`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function siyahCommand(player, message) {
	room.sendAnnouncement(`her sey mi siyah`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function zertCommand(player, message) {
	room.sendAnnouncement(`tellak babba sizi zert zert geseledi`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function ercikCommand(player, message) {
	room.sendAnnouncement(`bu bir sanal alem, lütfen haddinizi bilin arkadaşlar`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function dundoCommand(player, message) {
	room.sendAnnouncement(`efendim lütfen açar mısınız kapıyı`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function atmaCommand(player, message) {
	room.sendAnnouncement(`yalvarırım atma`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function ruhCommand(player, message) {
	room.sendAnnouncement(`ruh gibi geziyosun`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}

export function abisiCommand(player, message) {
	room.sendAnnouncement(`geliyorum ağğbisi`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}
export function bosCommand(player, message) {
	room.sendAnnouncement(`nerdeyse bos yapacak`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}
export function tokatCommand(player, message) {
	room.sendAnnouncement(`tokatlarim seni`, null, COLORS.BLUE_ALERT_COLOR, "italic");
}
