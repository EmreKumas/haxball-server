// WHAT TO DO:
// - Her biri girdiğinde komutlar gösterilsin
// - Maç sonu kaybeden tamamen yenilensin
// - Who scored and assisted
// - Goals, assists, wins, losses, pass rate
// - Save stats on local storage
// - sen gonuşma sonner

const powerMap = `{
	"name": "Power Big from HaxMaps",
	"width": 600,
	"height": 270,
	"spawnDistance": 350,
	"bg": {
			"type": "grass",
			"width": 550,
			"height": 240,
			"kickOffRadius": 80,
			"cornerRadius": 0
	},
	"playerPhysics": {
			"bCoef": 0.5,
			"invMass": 0.5,
			"damping": 0.96,
			"acceleration": 0.12,
			"kickingAcceleration": 0.12,
			"kickingDamping": 0.96,
			"kickStrength": 11
	},
	"vertexes": [
			{
					"x": -550,
					"y": 240,
					"trait": "ballArea"
			},
			{
					"x": -550,
					"y": 80,
					"trait": "ballArea"
			},
			{
					"x": -550,
					"y": -80,
					"trait": "ballArea"
			},
			{
					"x": -550,
					"y": -240,
					"trait": "ballArea"
			},
			{
					"x": 550,
					"y": 240,
					"trait": "ballArea"
			},
			{
					"x": 550,
					"y": 80,
					"trait": "ballArea"
			},
			{
					"x": 550,
					"y": -80,
					"trait": "ballArea"
			},
			{
					"x": 550,
					"y": -240,
					"trait": "ballArea"
			},
			{
					"x": 0,
					"y": 270,
					"trait": "kickOffBarrier"
			},
			{
					"x": 0,
					"y": 80,
					"trait": "kickOffBarrier"
			},
			{
					"x": 0,
					"y": -80,
					"trait": "kickOffBarrier"
			},
			{
					"x": 0,
					"y": -270,
					"trait": "kickOffBarrier"
			},
			{
					"x": -560,
					"y": -80,
					"trait": "goalNet"
			},
			{
					"x": -580,
					"y": -60,
					"trait": "goalNet"
			},
			{
					"x": -580,
					"y": 60,
					"trait": "goalNet"
			},
			{
					"x": -560,
					"y": 80,
					"trait": "goalNet"
			},
			{
					"x": 560,
					"y": -80,
					"trait": "goalNet"
			},
			{
					"x": 580,
					"y": -60,
					"trait": "goalNet"
			},
			{
					"x": 580,
					"y": 60,
					"trait": "goalNet"
			},
			{
					"x": 560,
					"y": 80,
					"trait": "goalNet"
			}
	],
	"segments": [
			{
					"v0": 0,
					"v1": 1,
					"trait": "ballArea"
			},
			{
					"v0": 2,
					"v1": 3,
					"trait": "ballArea"
			},
			{
					"v0": 4,
					"v1": 5,
					"trait": "ballArea"
			},
			{
					"v0": 6,
					"v1": 7,
					"trait": "ballArea"
			},
			{
					"v0": 12,
					"v1": 13,
					"trait": "goalNet",
					"curve": -90
			},
			{
					"v0": 13,
					"v1": 14,
					"trait": "goalNet"
			},
			{
					"v0": 14,
					"v1": 15,
					"trait": "goalNet",
					"curve": -90
			},
			{
					"v0": 16,
					"v1": 17,
					"trait": "goalNet",
					"curve": 90
			},
			{
					"v0": 17,
					"v1": 18,
					"trait": "goalNet"
			},
			{
					"v0": 18,
					"v1": 19,
					"trait": "goalNet",
					"curve": 90
			},
			{
					"v0": 8,
					"v1": 9,
					"trait": "kickOffBarrier"
			},
			{
					"v0": 9,
					"v1": 10,
					"trait": "kickOffBarrier",
					"curve": 180,
					"cGroup": [
							"blueKO"
					]
			},
			{
					"v0": 9,
					"v1": 10,
					"trait": "kickOffBarrier",
					"curve": -180,
					"cGroup": [
							"redKO"
					]
			},
			{
					"v0": 10,
					"v1": 11,
					"trait": "kickOffBarrier"
			}
	],
	"goals": [
			{
					"p0": [
							-550,
							80
					],
					"p1": [
							-550,
							-80
					],
					"team": "red"
			},
			{
					"p0": [
							550,
							80
					],
					"p1": [
							550,
							-80
					],
					"team": "blue"
			}
	],
	"discs": [
			{
					"pos": [
							-550,
							80
					],
					"trait": "goalPost",
					"color": "FFCCCC"
			},
			{
					"pos": [
							-550,
							-80
					],
					"trait": "goalPost",
					"color": "FFCCCC"
			},
			{
					"pos": [
							550,
							80
					],
					"trait": "goalPost",
					"color": "CCCCFF"
			},
			{
					"pos": [
							550,
							-80
					],
					"trait": "goalPost",
					"color": "CCCCFF"
			}
	],
	"planes": [
			{
					"normal": [
							0,
							1
					],
					"dist": -240,
					"trait": "ballArea"
			},
			{
					"normal": [
							0,
							-1
					],
					"dist": -240,
					"trait": "ballArea"
			},
			{
					"normal": [
							0,
							1
					],
					"dist": -270,
					"bCoef": 0.1
			},
			{
					"normal": [
							0,
							-1
					],
					"dist": -270,
					"bCoef": 0.1
			},
			{
					"normal": [
							1,
							0
					],
					"dist": -600,
					"bCoef": 0.1
			},
			{
					"normal": [
							-1,
							0
					],
					"dist": -600,
					"bCoef": 0.1
			}
	],
	"traits": {
			"ballArea": {
					"vis": false,
					"bCoef": 1,
					"cMask": [
							"ball"
					]
			},
			"goalPost": {
					"radius": 8,
					"invMass": 0,
					"bCoef": 0.5
			},
			"goalNet": {
					"vis": true,
					"bCoef": 0.1,
					"cMask": [
							"ball"
					]
			},
			"kickOffBarrier": {
					"vis": false,
					"bCoef": 0.1,
					"cGroup": [
							"redKO",
							"blueKO"
					],
					"cMask": [
							"red",
							"blue"
					]
			}
	}
}`;
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const GameState = { PLAY: 0, PAUSE: 1, STOP: 2 };

const announcementColor = 0xFFEFD6;
const alertColor = 0xBD3333;
const redAlertColor = 0xFF4C4C;
const blueAlertColor = 0x4A68FF;

///////////////////////// VARIABLES ///////////////////////////////

var gameState;
var teamRed, teamBlue, spectators;
var disableOnStopEvent;
var afkPlayers = [];
var playingPlayersCount;
var redTeamScore = 0;
var blueTeamScore = 0;
var endGameTrigger = false;
var scoreLimit = 3;
var winSeries = [];

var commands = {
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

///////////////////////// INITIALIZATIONS /////////////////////////

var room = HBInit({
	roomName: "Public Kese --- PowerMap vs3",
	maxPlayers: 7,
	token: "thr1.AAAAAGG6ZbKJrz1RMCYWXQ.0tDIady7YdA",
	geo: {"code": "tr", "lat": 41, "lon": 29},
	noPlayer: true,
	public: true
});

room.setCustomStadium(powerMap);
room.setTeamsLock(true);
room.setScoreLimit(scoreLimit);
room.setTimeLimit(3);
room.setTeamColors(Team.RED, 60, 0xFFFFFF, [0xFF0000, 0x770000, 0x330002]);
room.setTeamColors(Team.BLUE, 60, 0xFFFFFF, [0x0080FF, 0x004077, 0x002033]);

gameState = GameState.STOP;

///////////////////////// EVENTS //////////////////////////////////

room.onPlayerJoin = function(player) {
	updateAdmin(player, true);
	setTimeout(() => { randomizePlayers(); }, 500);
}

room.onPlayerLeave = function(player) {
	updateAdmin(player, false);
	setTimeout(() => { randomizePlayers(); }, 500);
}

room.onPlayerChat = function(player, message) {
	if (!message.startsWith("!")) return true;

	if (commands.hasOwnProperty(message) && (!commands[message].requireAdmin || (commands[message].requireAdmin && player.admin))) {
		commands[message].function(player, message);
	}

	return false;
}

room.onGameStart = function(byPlayer) {
	gameState = GameState.PLAY;
	disableOnStopEvent = false;
	endGameTrigger = true;

	redTeamScore = blueTeamScore = 0;

	updateTeams();
}

room.onGameStop = function(byPlayer) {
	if (byPlayer || disableOnStopEvent) {
		return;
	}

	gameState = GameState.STOP;

	room.sendAnnouncement("3 seconds countdown started before shuffling the players!", null, announcementColor, "bold");
	setTimeout(() => {
		if (gameState != GameState.STOP) return;
		rearrangePlayersRandomlyAndStartGame();
	}, 3000);
}

room.onGamePause = function(byPlayer) {
	gameState = GameState.PAUSE;
}

room.onGameUnpause = function(byPlayer) {
	setTimeout(() => { gameState = GameState.PLAY; }, 1000);
}

room.onTeamGoal = function (team) {
	if (team == Team.RED) {
		redTeamScore++;
	} else {
		blueTeamScore++;
	}
}

room.onTeamVictory = function(scores) {
	if (scores.red == scoreLimit) {
		winSeries[0]++;
		winSeries[1] = 0;
	} else {
		winSeries[1]++;
		winSeries[0] = 0;
	}
}

room.onGameTick = function () {
	if (endGameTrigger) {
		if (redTeamScore == scoreLimit) {
			room.sendAnnouncement("Red team won", null, announcementColor, "bold");
			endGameTrigger = false;
		} else if (blueTeamScore == scoreLimit) {
			room.sendAnnouncement("Blue team won", null, announcementColor, "bold");
			endGameTrigger = false;
		}
	}
}

///////////////////////// FUNCTIONS ///////////////////////////////

function updateAdmin(player, joining) {
	if ((player.name == 'Usta' || player.name == 'pat' || player.name == 'kek' || player.name == 'Tellak') && joining) {
		room.setPlayerAdmin(player.id, true);
		return;
	}
}

function updateTeams() {
	players = room.getPlayerList();
	teamRed = players.filter(p => p.team === Team.RED);
	teamBlue = players.filter(p => p.team === Team.BLUE);
	spectators = players.filter(p => p.team === Team.SPECTATORS);
	playingPlayersCount = teamRed.length + teamBlue.length;
}

function restartCommand(player, message) {
	disableOnStopEvent = true;
	room.sendAnnouncement(`${player.name} started a rematch!`, null, announcementColor, "bold");
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 10);
}

function shuffleCommand(player, message) {
	disableOnStopEvent = true;
	room.sendAnnouncement(`${player.name} shuffled the players!`, null, announcementColor, "bold");
	room.stopGame();
	rearrangePlayersRandomlyAndStartGame();
}

function afkCommand(player, message) {
	if (afkPlayers.includes(player.name)) {
		room.sendAnnouncement(`${player.name} returns from afk!`, null, announcementColor, "bold");
		removeItem(afkPlayers, player.name);

		setTimeout(() => { randomizePlayers(); }, 500);

		return;
	}

	room.setPlayerTeam(player.id, Team.SPECTATORS);
	setTimeout(() => { randomizePlayers(); }, 500);

	room.sendAnnouncement(`${player.name} sets himself as afk!`, null, announcementColor, "bold");
	afkPlayers.push(player.name);
}

function removeItem(arr, value) {
	var index = arr.indexOf(value);

	if (index > -1) {
		arr.splice(index, 1);
	}
}

function rearrangePlayersRandomlyAndStartGame() {
	let players = room.getPlayerList();

	players.forEach(player => {
		if (winSeries[0] == scoreLimit || winSeries[1] == scoreLimit) {
			room.setPlayerTeam(player.id, Team.SPECTATORS);
		} else if (!(redTeamScore == scoreLimit && player.team == Team.RED) && !(blueTeamScore == scoreLimit && player.team == Team.BLUE)) {
			room.setPlayerTeam(player.id, Team.SPECTATORS);
		}
	});

	if (players.length < 2) {
		return;
	}

	setTimeout(() => { randomizePlayers(); }, 500);
	setTimeout(() => { room.startGame(); }, 1000);
}

function randomizePlayers() {
	updateTeams();

	while (spectators.length != 0 && afkPlayers.length < spectators.length && playingPlayersCount < 6) {
		let randomNumber = Math.floor(Math.random() * spectators.length);
		let randomPlayer = spectators[randomNumber];

		if (spectators.some(s => s.admin && !afkPlayers.includes(s.name)) && !randomPlayer.admin) {
			continue;
		}

		if (afkPlayers.includes(randomPlayer.name)) {
			continue;
		}

		selectTeamForThePlayer(randomPlayer);
		
		spectators.splice(randomNumber, 1);

		playingPlayersCount++;
	}
}

function selectTeamForThePlayer(player) {
	if (teamRed.length + teamBlue.length >= 6) {
		return;
	}

	if (teamRed.length === teamBlue.length) {
		let randomTeam = Math.floor(Math.random() * 2);
		room.setPlayerTeam(player.id, randomTeam + 1);
		(randomTeam == 0) ? teamRed.push(player) : teamBlue.push(player);
	} else if (teamRed.length < teamBlue.length) {
		room.setPlayerTeam(player.id, Team.RED);
		teamRed.push(player);
	} else {
		room.setPlayerTeam(player.id, Team.BLUE);
		teamBlue.push(player);
	}
}
