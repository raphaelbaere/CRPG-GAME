const audio = {
    Map: new Howl({
        src: './Data/Audios/Maps/map1.mp3',
        html5: true,
        volume: 0.015,
        loop: true,
    }),
    NewGame: new Howl({
        src: './Data/Audios/Menu/newgame.mp3',
        html5: true,
        volume: 0.01,
    }),
    footsteps: new Howl({
        src: './Data/Audios/Personagem/footsteps.mp3',
        html5: true,
        volume: 0.15,
    }),
    city: new Howl({
        src: './Data/Audios/Maps/city.mp3',
        html5: true,
        volume: 0.05,
        loop: true,
    }),
    typing: new Howl({
        src: './Data/Audios/Menu/typing.mp3',
        html5: true,
        volume: 0.1,
        loop: true,
    }),
}