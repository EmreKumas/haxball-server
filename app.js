import headless from "haxball.js";
import { GAME_STATE, SCORE_LIMIT, TIME_LIMIT, TEAM } from "./utilities/constant.js";
import { onPlayerJoin } from "./events/join-leave.js";
import powerMap from "./maps/power-map.json";
import { onGameStart, onGameStop, onGamePause, onGameUnpause } from "./events/game.js";

///////////////////////// VARIABLES ///////////////////////////////

export var room = null;

export var variables = {
    teamRed: [],
    teamBlue: [],
    spectators: [],
    gameState: GAME_STATE.STOP
};

var disableOnStopEvent = false;
var afkPlayers = [];
var playingPlayersCount = 0;
var redTeamScore = 0;
var blueTeamScore = 0;
var endGameTrigger = false;
var winSeries = [];

///////////////////////// REST ///////////////////////////////////////

headless.then((HBInit) => {
    initializeGame(HBInit);
});

function initializeGame(HBInit) {
    room = HBInit({
        roomNameas: "Public Kese --- PowerMap vs3",
        roomName: "Deneme",
        maxPlayers: 6,
        token: "thr1.AAAAAGLq4S7D3w2gdT_bPw.aeRtkOi0WTo",
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

    room.onGameStart = onGameStart;
    room.onGameStop = onGameStop;
    room.onGamePause = onGamePause;
    room.onGameUnpause = onGameUnpause;
}
