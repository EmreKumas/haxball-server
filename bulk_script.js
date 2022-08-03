room.onPlayerChat = function(player, message) {
	if (!message.startsWith("!")) return true;

	if (commands.hasOwnProperty(message) && (!commands[message].requireAdmin || (commands[message].requireAdmin && player.admin))) {
		commands[message].function(player, message);
	}

	return false;
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
