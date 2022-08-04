import headless from "haxball.js";
import { GAME_STATE, SCORE_LIMIT, TIME_LIMIT, TEAM, TOKEN } from "./utilities/constant.js";
import { onPlayerJoin, onPlayerLeave } from "./events/join-leave.js";
import powerMap from "./maps/power-map.json";
import { onGameStart, onGameStop, onGamePause, onGameUnpause } from "./events/game.js";
import { onPlayerChat } from "./events/chat.js";

///////////////////////// VARIABLES ///////////////////////////////

export var room = null;

export var variables = {
    teamRed: [],
    teamBlue: [],
    spectators: [],
    gameState: GAME_STATE.STOP,
    restartOnCommand: false,
    afkPlayers: []
};

///////////////////////// REST ///////////////////////////////////////

headless.then((HBInit) => {
    initializeGame(HBInit);
});

function initializeGame(HBInit) {
    room = HBInit({
        roomNameas: "Public Kese --- PowerMap vs3",
        roomName: "Deneme",
        maxPlayers: 6,
        token: TOKEN,
        geo: { "code": "tr", "lat": 41, "lon": 29 },
        noPlayer: true,
        public: false
    });

    room.setCustomStadium(JSON.stringify(powerMap));
    room.setTeamsLock(true);
    room.setScoreLimit(SCORE_LIMIT);
    room.setTimeLimit(TIME_LIMIT);
    room.setTeamColors(TEAM.RED, 60, 0xFFFFFF, [0xFF0000, 0x770000, 0x330002]);
    room.setTeamColors(TEAM.BLUE, 60, 0xFFFFFF, [0x0080FF, 0x004077, 0x002033]);
    
    room.onRoomLink = (link) => console.log(link);
    
    room.onPlayerJoin = onPlayerJoin;
    room.onPlayerLeave = onPlayerLeave;

    room.onGameStart = onGameStart;
    room.onGameStop = onGameStop;
    room.onGamePause = onGamePause;
    room.onGameUnpause = onGameUnpause;

    room.onPlayerChat = onPlayerChat;
}
