// Basic setup stuff
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const buttons = document.querySelectorAll('button');
const userGui = document.querySelector('.user-gui');
const userUtils = document.querySelector('.user-utils')
canvas.width = 1024;
canvas.height = 576;
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);


// Divs that I created to make the dialogue... just lazy work.
const dialogueDiv = document.querySelector('.dialogue-div');
const npcDialogueDiv = document.querySelector('.npc-dialogue');
const npcDialogueDiv2 = document.querySelector('.npc-dialogue2');
const npcDialogueDiv3 = document.querySelector('.npc-dialogue3');
const playerOptionsContainer = document.querySelector('#player-options-container1');
const playerOptionsContainer2 = document.querySelector('#player-options-container2');
const playerOptionsContainer3 = document.querySelector('#player-options-container3');
const npcName = document.querySelector('#npc-name');
const npcDialogue = document.querySelector('#npc-dialogue');
const npcDialogue2 = document.querySelector('#npc-dialogue2');
const npcDialogue3 = document.querySelector('#npc-dialogue3');
const npcLastDialogueDiv = document.querySelector('.npc-last-dialogue');
const npcLastDialogue = document.querySelector('#npc-last-dialogue');
const playerLastOptionContainer = document.querySelector('#player-options-container-last');
const npcAnswerDiv = document.querySelector('.npc-answer');
const npcAnswerDiv2 = document.querySelector('.npc-answer2');
const npcAnswerDiv3 = document.querySelector('.npc-answer3');
const npcAnswer = document.querySelector('#npc-answer');
const npcAnswer2 = document.querySelector('#npc-answer2');
const npcAnswer3 = document.querySelector('#npc-answer3');
const backpack = document.querySelector('#util-backpack');
const inventory = document.querySelector('.inventory');
const inventoryX = document.querySelector('#inventory-exit');


// Functions for the collisions.
function rectangularCollision({ rectangle1, rectangle2 }) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x + 10 &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.width - 60 &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}

function rectangularCollisionForMap({ rectangle1, rectangle2 }) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y - 25 + rectangle2.width &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}

function rectangularCollisionForChat({ rectangle1, rectangle2 }) {
    return(rectangle1.position.x + 20 + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + 20 + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + 20 + rectangle2.width &&
        rectangle1.position.y + 20 + rectangle1.height >= rectangle2.position.y)
}

function rectangularCollisionForNPC({ rectangle1, rectangle2 }) {
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y  + rectangle2.width / 2 &&
        rectangle1.position.y + rectangle1.height / 4 >= rectangle2.position.y)
}

const handleFinish = () => {
    dialogue.initiated = false;
    dialogueDiv.style.display = 'none';
}

// function for handling the last dialogue
const handleFinishDialogue = (optionsPassada, divPassada, dialogo, linha, npc2, divAtual, pAtual, optionsAtual, answerAtual, answerPAtual, pAtualTyped) => {
    optionsPassada.addEventListener('click', () => {
        optionsPassada.style.display = 'none';
        divPassada.style.display = 'none';
        divAtual.style.display = 'flex';
        pAtual.innerText = npc2.dialogue[dialogo].npcLine[linha]
        divAtual.addEventListener('click', () => {
            pAtual.innerText = '';
            divAtual.style.display = 'none';
            optionsAtual.style.display = 'flex';
            answerAtual.style.display = 'flex';
            answerPAtual.innerText = npc2.dialogue[dialogo].npcLine[linha];
                const button = document.createElement('button');
                button.className = "player-options";
                button.innerText = npc2.dialogue[dialogo].playerOptions[linha];
                button.addEventListener('click', () => {
                    handleFinish()
                    optionsAtual.style.display = 'none';
                    answerAtual.style.display = 'none';
                })
                optionsAtual.appendChild(button);
        })
    }) 
    localStorage.setItem(npc2.name, 'Não tenho mais nada a te dizer.')
}

// function for handling answers in the dialog (the click buttons)
const handleAnswer = (optionsPassada, divPassada, dialogo, linha, npc2, divAtual, pAtual, optionsAtual, answerAtual, answerPAtual, pAtualTyped) => {
    optionsPassada.addEventListener('click', () => {
        optionsPassada.innerHTML = '';
        optionsPassada.style.display = 'none';
        divPassada.style.display = 'none';
        divAtual.style.display = 'flex';
        pAtual.innerText = npc2.dialogue[dialogo].npcLine[linha]
        divAtual.addEventListener('click', () => {
            pAtual.innerText = '';
            divAtual.style.display = 'none';
            optionsAtual.style.display = 'flex';
            answerAtual.style.display = 'flex';
            answerPAtual.innerText = npc2.dialogue[dialogo].npcLine[linha];
                const button = document.createElement('button');
                button.className = "player-options";
                button.innerText = npc2.dialogue[dialogo].playerOptions[linha];
                button.addEventListener('click', () => {
                    handleDialogue(event, npc2)
                })
                optionsAtual.appendChild(button);
        })
    })
}


// const for handling the phrase, the answer etc..
const handleDialogue = ({ target }, npc2) => {
    const { innerText } = target;
    switch (innerText) {
        case 'Não, não sou novo. Eu só.. perdí minha memória.':
            handleAnswer(playerOptionsContainer, npcAnswerDiv, 1, 0, npc2, npcDialogueDiv2, npcDialogue2, playerOptionsContainer2, npcAnswerDiv2, npcAnswer2, '#npc-dialogue2')
        break;
        case 'E se eu for? O que você tem a ver com isso?':
            handleAnswer(playerOptionsContainer, npcAnswerDiv, 1, 1, npc2, npcDialogueDiv2, npcDialogue2, playerOptionsContainer2, npcAnswerDiv2, npcAnswer2)
        break;
        case 'Ok. Esquisito..':
            handleAnswer(playerOptionsContainer, npcAnswerDiv, 1, 2, npc2, npcDialogueDiv2, npcDialogue2, playerOptionsContainer2, npcAnswerDiv2, npcAnswer2)
        break;
        case 'Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...':
            handleFinishDialogue(playerOptionsContainer2, npcAnswerDiv2, 2, 0, npc2, npcDialogueDiv3, npcDialogue3, playerOptionsContainer3, npcAnswerDiv3, npcAnswer3)
        break;
        case 'Tudo bem, perdão pela grosseria..':
            handleFinishDialogue(playerOptionsContainer2, npcAnswerDiv2, 2, 1, npc2, npcDialogueDiv3, npcDialogue3, playerOptionsContainer3, npcAnswerDiv3, npcAnswer3)
        break;
        case 'Abordando pessoas que você nem conhece pela rua...':
            handleFinishDialogue(playerOptionsContainer2, npcAnswerDiv2, 2, 2, npc2, npcDialogueDiv3, npcDialogue3, playerOptionsContainer3, npcAnswerDiv3, npcAnswer3)
        break;
        case "No, I'm not new. I have lost my memories...":
            handleAnswer(playerOptionsContainer, npcAnswerDiv, 1, 0, npc2, npcDialogueDiv2, npcDialogue2, playerOptionsContainer2, npcAnswerDiv2, npcAnswer2, '#npc-dialogue2')
        break;
        case "What if I am? What you have to do with it?":
            handleAnswer(playerOptionsContainer, npcAnswerDiv, 1, 1, npc2, npcDialogueDiv2, npcDialogue2, playerOptionsContainer2, npcAnswerDiv2, npcAnswer2, '#npc-dialogue2')
        break;
        case 'Ok.. weirdo..':
            handleAnswer(playerOptionsContainer, npcAnswerDiv, 1, 2, npc2, npcDialogueDiv2, npcDialogue2, playerOptionsContainer2, npcAnswerDiv2, npcAnswer2, '#npc-dialogue2')
        break;

    }
}

// variable declarations for be changed for each map that I'm rendering right now
let samuel;
let samuelSprite;
let gloria;
let gloriaSprite;
let dan;
let danSprite;
let abbySprite;
let abby;
let joe;
let joeSprite;
let drawings = [];
let adamSpriteX = 550;
let adamSprite;
let nPCS = [];
let doors;
let entries;
let collisions;
let boundaries;
let movables;
let battleFloor;
let battleFloors;
let adam;
let player;
let background;
let level = '1';
let activeTile;

// variable to store different levels, all the localStorage are related to the save system.
const levels = {
    1: {
        init: () => {
            localStorage.setItem('level', '1')
            const offset = {
                x: -699,
                y: -560,
            }
            player = new Sprite({
                position: {
                    x: 500,
                    y: 250,
                },
                imageSrc: './Data/Imagens/Personagens/Player/player.png',
                frames: {
                    max: 6,
                    hold: 12,
                },
                map: '1',
                sprites: {
                    walkUp: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerUp.png',
                        frames: {
                            max: 4,
                            hold: 12,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleUp: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleUp.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkDown: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerDown.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleDown: {
                        imageSrc: './Data/Imagens/Personagens/Player/player.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkRight: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerRight.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleRight: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleRight.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkLeft: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerLeft.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleLeft: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleLeft.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                }
            });

            adam = new NPC({
                position: {
                    x: 311.333333333333,
                    y: 200.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/Adam.png",
                paths: [
                    {
                     position: {
                        "x": 311.333333333,
                        "y": 200.666666667,
                     }
                    }, 
                    {
                     position: {
                        "x": 202.333333333,
                        "y": 200.666666667,
                        }
                    }, 
                    {
                     position: {
                        "x": 311.333333333,
                        "y": 200.666666667,
                        }
                    }, ],
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'adam',
                animate: true,
                dialogue: [{
                    npcLine: ["Hey! I'm Adam! You're new around here, don't you?"],
                    playerOptions: [ "No, I'm not new. I have lost my memories...",
                     "What if I am? What you have to do with it?", 'Ok.. weirdo..'],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }],
            });

            abby = new NPC({
                position: {
                    x: 264.333333333333,
                    y: 412.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Abby/abbyReading.png",
                frames: {
                    max: 18,
                    hold: 10,
                },
                name: 'abby',
                animate: true,
                dialogue: [{
                    npcLine: ['Olá. Eu sou a Abby! Você é novo por aqui, certo?'],
                    playerOptions: [ 'Não, não sou novo. Eu só.. perdí minha memória.',
                     'E se eu for? O que você tem a ver com isso?', 'Ok. Esquisito..'],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }],
            });

            gloria = new NPC({
                position: {
                    x: 900.333333333333,
                    y: 395.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Gloria/gloria.png",
                frames: {
                    max: 20,
                    hold: 10,
                },
                name: 'glória',
                animate: true,
                dialogue: [{
                    npcLine: ['Olá. Eu sou a Glória! Você é novo por aqui, certo?'],
                    playerOptions: [ 'Não, não sou novo. Eu só.. perdí minha memória.',
                     'E se eu for? O que você tem a ver com isso?', 'Ok. Esquisito..'],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }],
            });

            dan = new NPC({
                position: {
                    x: 1245.333333333333,
                    y: 140.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Dan/dan.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'dan',
                animate: true,
                dialogue: [{
                    npcLine: ['Olá. Eu sou o Dan! Você é novo por aqui, certo?'],
                    playerOptions: [ 'Não, não sou novo. Eu só.. perdí minha memória.',
                     'E se eu for? O que você tem a ver com isso?', 'Ok. Esquisito..'],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }],
            });

            samuel = new NPC({
                position: {
                    x: 1275.333333333333,
                    y: 420.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Samuel/samuel.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'samuel',
                animate: true,
                dialogue: [{
                    npcLine: ['Olá. Eu sou o Samuel! Você é novo por aqui, certo?'],
                    playerOptions: [ 'Não, não sou novo. Eu só.. perdí minha memória.',
                     'E se eu for? O que você tem a ver com isso?', 'Ok. Esquisito..'],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }],
            });

            joe = new NPC({
                position: {
                    x: 100.333333333333,
                    y: 200.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Joe/Joe.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'joe',
                animate: true,
                dialogue: [{
                    npcLine: ["The building is closed. Try another time."],
                    playerOptions: [ "Ok.. I will come back another time.",
                     "Get your ass off the door!", "And you're following whose orders?"],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }],
            });

            joeSprite = new NPCSprites({
                position: {
                    x: 100.333333333333,
                    y: 200.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Joe/Joe.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'joe',
            })

            // Here is the array that manipules the npc's entitys

            nPCS = [adam, joe, abby, dan, gloria, samuel]

            adamSprite = new NPCSprites({
                position: {
                    x: 311.333333333333,
                    y: 200.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/Adam.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'adam',
                sprites: {
                    walkLeft: {
                        imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/adamLeft.png",
                        frames: {
                            max: 6,
                            hold: 20,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkRight: {
                        imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/adamRight.png",
                        frames: {
                            max: 6,
                            hold: 20,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleRight: {
                        imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/adamIdleRight.png",
                        frames: {
                            max: 6,
                            hold: 20,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleLeft: {
                        imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/adamIdleLeft.png",
                        frames: {
                            max: 6,
                            hold: 20,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                },
                paths: [
                    {
                     position: {
                        "x": 311.333333333,
                        "y": 200.666666667,
                     }
                    }, 
                    {
                     position: {
                        "x": 202.333333333,
                        "y": 200.666666667,
                        }
                    }, 
                    {
                     position: {
                        "x": 311.333333333,
                        "y": 200.666666667,
                        }
                    }, ]
            })

            abbySprite = new NPCSprites({
                position: {
                    x: 264.333333333333,
                    y: 412.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Abby/abbyReading.png",
                frames: {
                    max: 18,
                    hold: 10,
                },
                name: 'abby',
            })

            gloriaSprite = new NPCSprites({
                position: {
                    x: 900.333333333333,
                    y: 395.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Gloria/gloria.png",
                frames: {
                    max: 18,
                    hold: 10,
                },
                name: 'gloria',
            })

            
            danSprite = new NPCSprites({
                position: {
                    x: 1245.333333333333,
                    y: 140.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Dan/dan.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'dan',
            })

            samuelSprite = new NPCSprites({
                position: {
                    x: 1275.333333333333,
                    y: 420.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Samuel/samuel.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'samuel',
            })

            cat = new NPCSprites({
                position: {
                    x: 1275.333333333333,
                    y: 420.666666666667,
                },
                map: '1',
                imageSrc: "./Data/Imagens/Personagens/NPC's/Samuel/samuel.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'samuel',
            })

            // Here are the array for the drawings, they are sorted and drawed in the correct layer after..

            drawings = [adamSprite, joeSprite, abbySprite, danSprite, gloriaSprite, samuelSprite, player];


            // The doors block which the map changes comes from an array that comes from tiled and I parse it to 2d and so on..


            doors = [];
            for (let index = 0; index < mapEnteringZones.length; index += 80) {
                doors.push(mapEnteringZones.slice(index, 80 + index));
            }

            entries = [];
            doors.forEach((row, y) => {
                row.forEach((symbol, x) => {
                    if (symbol === 6002)
                        entries.push(new Enter({
                            position: {
                                x: x * 32 + offset.x,
                                y: y * 32 + offset.y,
                            },
                            map: '1',
                        }))
                })
            })


            // The collision blocks which are rendered according to an array that comes from tiled and I parse it to 2d.
            collisions = [];
            for (let index = 0; index < collisionsTest.length; index += 80) {
                collisions.push(collisionsTest.slice(index, 80 + index));
            }
            boundaries = [];
            collisions.forEach((row, y) => {
                row.forEach((symbol, x) => {
                    if (symbol === 4501)
                        boundaries.push(new Boundary({
                            position: {
                                x: x * 32 + offset.x,
                                y: y * 32 + offset.y,
                            },
                            map: '1',
                        }))
                })
            })

            // Battle
            battleFloor = [];
            for (let index = 0; index < battleFloorTest.length; index += 80) {
                battleFloor.push(battleFloorTest.slice(index, 80 + index));
            }
            battleFloors = [];
            battleFloor.forEach((row, y) => {
                row.forEach((symbol, x) => {
                    if (symbol === 6012) {
                        battleFloors.push(new BattleFloor({
                            position: {
                                x: x * 32 + offset.x,
                                y: y * 32 + offset.y,
                            },
                            map: '1',
                        }))
                    }
                })
            })



            // The save system for level 1
            if (localStorage.getItem('movables')) {
                const savedMovables = JSON.parse(localStorage.getItem('movables'));

                // I reset everything and put the saved ones inside.

                background = [];
                nPCS = [];
                drawings = [];
                boundaries = [];
                entries = [];
                savedMovables.forEach((movable) => {
                    // The movables have this .class that tells me where I should put them

                    if (movable.map === '1') {
                    switch (movable.class) {
                        case 'background':
                            background = new BACKGROUND({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                map: movable.map,
                            });
                            break;
                        case 'boundary':
                            boundaries.push(new Boundary({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                map: movable.map,
                            }))
                            break;
                        case 'enter':
                            entries.push(new Enter({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                map: movable.map,
                            }))
                            break;
                        case 'npc':
                            nPCS.push(new NPC({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                name: movable.name,
                                animate: movable.animate,
                                frames: movable.frames,
                                isEnemy: movable.isEnemy,
                                dialogue: movable.dialogue,
                                dialogueCount: movable.dialogueCount,
                                paths: movable.paths,
                                map: movable.map,
                            }))
                            break;
                        case 'npcSprites':
                            drawings.push(new NPCSprites({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                name: movable.name,
                                sprites: movable.sprites,
                                animate: movable.animate,
                                frames: movable.frames,
                                paths: movable.paths,
                                map: movable.map,
                            }))
                        break;
                    }
                }
                })

                // The drawings that are sorted after again..
                drawings = [...drawings, player]

                // The movables array, like I told you.
                movables = [background, ...boundaries, ...entries, ...nPCS, drawings[0], drawings[1], drawings[2], drawings[3], drawings[4], drawings[5], ...battleFloors]
            } else {
                background = new BACKGROUND({
                    position: {
                        x: -699,
                        y: -560,
                    },
                    imageSrc: './Data/Imagens/Mapa/testeMap.png',
                    map: '1',
                });
                // The movables array, like I told you.
                movables = [background, ...boundaries, ...entries, ...nPCS, drawings[0], drawings[1], drawings[2], drawings[3], drawings[4], drawings[5], ...battleFloors]
            }
        },
    },
    // The second level, it's the same for the level 1, if you have any doubt just check the comments in the level 1
    2: {
        init: () => {
            if (localStorage.getItem('level')) {
                localStorage.removeItem('level');
            } else {
                localStorage.setItem('level', '2')
            }
            game.changeMap = false;
            level = '2';
            player = new Sprite({
                position: {
                    x: 500,
                    y: 250,
                },
                imageSrc: './Data/Imagens/Personagens/Player/player48.png',
                map: '2',
                frames: {
                    max: 6,
                    hold: 8,
                },
                sprites: {
                    walkUp: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerUp48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleUp: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleUp48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkDown: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerDown48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleDown: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleDown48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkRight: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerRight48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleRight: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleRight48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    walkLeft: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerLeft48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                    idleLeft: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerIdleLeft48.png',
                        frames: {
                            max: 6,
                            hold: 10,
                            val: 0,
                            elapsed: 0,
                        }
                    },
                }
            });
            background = new BACKGROUND({
                position: {
                    x: -800,
                    y: -900,
                },
                imageSrc: './Data/Imagens/Mapa/roomMap.png',
                map: '2',
            })
            drawings = [];
            drawings = [player]
            nPCS = [];
            entries = [];
            boundaries = [];
            movables = [background]
            if (localStorage.getItem('movables')) {
                const savedMovables = JSON.parse(localStorage.getItem('movables'));
                drawings = [];
                nPCS = [];
                boundaries = [];
                entries = [];
                savedMovables.forEach((movable) => {
                if (movable.map === '2') {
                    switch (movable.class) {
                        case 'background':
                            background = new BACKGROUND({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                class: movable.class,
                                map: movable.map,
                            });
                            break;
                        case 'boundary':
                            boundaries.push(new Boundary({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                    class: movable.class,
                                    map: movable.map,
                                }
                            }))
                            break;
                        case 'enter':
                            entries.push(new Enter({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                    class: movable.class,
                                    map: movable.map,
                                }
                            }))
                            break;
                        case 'npc':
                            nPCS.push(new NPC({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                name: movable.name,
                                animate: movable.animate,
                                frames: movable.frames,
                                isEnemy: movable.isEnemy,
                                dialogue: movable.dialogue,
                                dialogueCount: movable.dialogueCount,
                                class: movable.class,
                                map: movable.map,
                            }))
                            break;
                        case 'npcSprites':
                            drawings.push(new NPCSprites({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                name: movable.name,
                                animate: movable.animate,
                                frames: movable.frames,
                                class: movable.class,
                                map: movable.map,
                            }))
                    }
                }
                })
                drawings = [player]
                movables = [background, ...boundaries, ...entries, ...nPCS]
            }
        },
    },
}

// Some buttons in the menu
buttons[0].addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
    canvas.style.display = 'block';
    userGui.style.display = 'flex';
    userUtils.style.display = 'flex';
    game.initiated = true;
})

buttons[1].addEventListener('click', () => {
    localStorage.clear()
    if (localStorage.getItem('movables')) {
        localStorage.removeItem('level');
        localStorage.clear()
        location.reload()
    }
});

// This is the backpack icon. To save the game, click in the X after opening the backpack. Lazy work!
backpack.addEventListener('click', () => {
    if (dialogue.initiated) return;
    inventory.style.display = 'flex';
    canvas.addEventListener('click', () => {
        inventory.style.display = 'none';
    })
    inventoryX.addEventListener('click', () => {
        inventory.style.display = 'none';
        localStorage.setItem('movables', JSON.stringify(movables));
        localStorage.setItem('level', level)
    })
})

// If have saves, changes the button inner text.
if (localStorage.getItem('movables')) {
    buttons[0].innerHTML = 'Continue'
}

// Key controlling the player variable
let keys = {
    e: {
        pressed: false,
    },
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

// Key controlling the player variable
let lastKey = '';
let lastKey2 = '';


// Key controlling the player events
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'e':
            keys.e.pressed = true;
            lastKey = 'e';
            break;
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;
    }
})

// Key controlling the player events
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'e':
            keys.e.pressed = false;
            break;
        case 'w':
            lastKey2 = 'w';
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
})

// Const to control if the dialogue is running and same for the other ones.
const dialogue = {
    initiated: false,
}

const game = {
    initiated: false,
    changeMap: false,
}

// This is for the animation of the canvas going black.


// The actual animate function that has the animate loop
function animate() {
    // drawing stuff, you see the drawings being sorted and then drawed.
    window.requestAnimationFrame(animate)
    background.draw()
    drawings.sort((a, b) => {
        return a.position.y - b.position.y
    }).forEach((drawing) => {
        drawing.draw();
    })
    boundaries.forEach((boundary) => {
        boundary.draw();
    })
    battleFloors.forEach((battleFloor) => {
        battleFloor.update(mouse)
    })
    entries.forEach((enter) => {
        enter.draw();
    })
    if (player.path) {
        if (Math.round(player.position.x) === Math.round(player.path.position.x) &&
         Math.round(player.position.y) === Math.round(player.path.position.y) - 35) {
            player.path = null;
            player.switchSprites(player.lastSprite)
        }
    }
    if (!game.initiated) return;
    let moving = true;
    player.animate = true;


    // checking for map enters collision, if player are colliding and press 'w', it enters the new map.
    for (let i = 0; i < entries.length; i++) {
        const enter = entries[i];
        if (rectangularCollisionForMap({
            rectangle1: player,
            rectangle2: {
                ...enter, position: {
                    x: enter.position.x,
                    y: enter.position.y
                }
            },
        })) {
            if (keys.w.pressed && lastKey === 'w') {
                localStorage.setItem('level', '2')
                userGui.style.display = 'none';
                userUtils.style.display = 'none';
                gsap.to('#overlapping-div', {
                    opacity: 1,
                    onComplete() {
                        gsap.to('#overlapping-div', {
                            opacity: 1,
                            onComplete() {
                                game.changeMap = true;
                                levels[2].init();
                                userGui.style.display = 'flex';
                                userUtils.style.display = 'flex';
                                gsap.to('#overlapping-div', {
                                    opacity: 0,
                                    onComplete() {
                                    }
                                })
                            }
                        })
                    }
                })
            }
        }
    }

    // Here are the behavior system... a bit messy, any doubt send me a msg.
    for (let i = 0; i < nPCS.length; i++) {
        const npc = nPCS[i];
        if (!rectangularCollisionForNPC({
            rectangle1: player,
            rectangle2: {...npc, position: {
                x: npc.position.x,
                y: npc.position.y,
            }}
        }) && !dialogue.initiated) {
            drawings.sort((a, b) => {
              return  a.position.y - b.position.y
            }).forEach((drawing) => {
                drawing.update()
            })
            if (nPCS.length !== 0) {
                nPCS.forEach((npc4) => {
                    npc4.update()
                })
            }
        } else {
            drawings.forEach((drawing) => {
                if (drawing.position.x === npc.position.x) {
                    drawing.switchSprites(drawing.lastSprite)
                }
            })
        }
        break;
    }

    // Here is the dialogue part. If the player collides with a npc and press 'E', it starts the dialogue.
    for (let i = 0; i < nPCS.length; i++) {
        const npc = nPCS[i];
        if (rectangularCollisionForChat({
            rectangle1: player,
            rectangle2: {...npc, position: {
                x: npc.position.x,
                y: npc.position.y,
            }}
        }) && keys.e.pressed && lastKey === 'e') {
            if (dialogue.initiated) return;
                    dialogue.initiated = true;
                    console.log(npc)
                    dialogueDiv.style.display = 'flex';
                    npcName.innerText = npc.name;
                    if (localStorage.getItem(npc.name)) {
                        npcLastDialogueDiv.style.display = 'flex';
                        npcLastDialogue.innerText = localStorage.getItem(npc.name);
                        const button = document.createElement('button');
                        button.className = "player-options";
                        button.innerText = "Tudo bem, adeus..";
                        button.addEventListener('click', () => {
                            dialogue.initiated = false;
                            npcLastDialogueDiv.style.display = 'none';
                            dialogueDiv.style.display = 'none';
                        })
                        if (playerLastOptionContainer.children.length === 1) return;
                        playerLastOptionContainer.appendChild(button);
                        playerLastOptionContainer.style.display = 'flex';
                        return;
                    }
                     npcDialogue.innerText = npc.dialogue[0].npcLine[0];
                      npcDialogue.style.display = 'flex'
                      npcDialogueDiv.style.display = 'flex';
                    npcDialogueDiv.addEventListener('click', () => {
                        npcDialogue.innerText = '';
                        npcDialogue.style.display = 'none';
                        npcDialogueDiv.style.display = 'none';
                        playerOptionsContainer.style.display = 'flex';
                        npcAnswerDiv.style.display = 'flex';
                        npcAnswer.innerText = npc.dialogue[0].npcLine[0];
                        npc.dialogue[0].playerOptions.forEach((playerOption) => {
                            const button = document.createElement('button');
                            button.className = "player-options";
                            button.innerText = playerOption;
                            button.addEventListener('click', () => {
                                playerOptionsContainer.innerHTML = '';
                                handleDialogue(event, npc)
                            })
                            playerOptionsContainer.appendChild(button);
                        })
                    })
        }
    }

    // moving the player, collisions checking and stuff
    if (keys.w.pressed && lastKey === 'w') {
        if (dialogue.initiated) return;
        player.switchSprites('walkUp');
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                player.animate = false;
                moving = false;
                break;
            }
        }

        for (let i = 0; i < nPCS.length; i++) {
            const npc = nPCS[i];
            if (rectangularCollisionForNPC({
                rectangle1: player,
                rectangle2: {
                    ...npc, position: {
                        x: npc.position.x,
                        y: npc.position.y + 3,
                    }
                }
            })) {
                player.animate = false;
                moving = false;
            }
        }

        
        if (moving) {
            movables.forEach((movable) => {
                if (movable.paths) {
                    movable.position.y += 3
                    movable.move('w')
                } else {
                    movable.position.y += 3
                }
            })
        }
    }
    // moving the player, collisions checking and stuff
    if (!keys.w.pressed && lastKey === 'w') {
        player.switchSprites('idleUp')
    }
    // moving the player, collisions checking and stuff
    if (keys.s.pressed && lastKey === 's') {
        if (dialogue.initiated) return;
        player.switchSprites('walkDown');
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }
                }
            })) {
                moving = false;
                break;
            }
        }
        for (let i = 0; i < nPCS.length; i++) {
            const npc = nPCS[i];
            if (rectangularCollisionForNPC({
                rectangle1: player,
                rectangle2: {
                    ...npc, position: {
                        x: npc.position.x,
                        y: npc.position.y - 3,
                    }
                }
            })) {
                player.animate = false;
                moving = false;
            }
        }
        if (moving) {
            movables.forEach((movable) => {
                if (movable.paths) {
                    movable.position.y -= 3
                    movable.move('s')
                } else {
                    movable.position.y -= 3
                }
            })
        }
    }
    // moving the player, collisions checking and stuff
    if (!keys.s.pressed && lastKey === 's') {
        player.switchSprites('idleDown')
    }
    // moving the player, collisions checking and stuff
    if (keys.a.pressed && lastKey === 'a') {
        if (dialogue.initiated) return;
        player.switchSprites('walkLeft')
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y,
                    }
                }
            })) {
                moving = false;
                break;
            }
        }
        for (let i = 0; i < nPCS.length; i++) {
            const npc = nPCS[i];
            if (rectangularCollisionForNPC({
                rectangle1: player,
                rectangle2: {
                    ...npc, position: {
                        x: npc.position.x + 3,
                        y: npc.position.y,
                    }
                }
            })) {
                player.animate = false;
                moving = false;
            }
        }
        if (moving) {
            movables.forEach((movable) => {
                if (movable.paths) {
                    movable.position.x += 3
                    movable.move('a')
                } else {
                    movable.position.x += 3
                }
            })
        }
    }
    // moving the player, collisions checking and stuff
    if (!keys.a.pressed && lastKey === 'a') {
        player.switchSprites('idleLeft')
    }
    // moving the player, collisions checking and stuff
    if (keys.d.pressed && lastKey === 'd') {
        if (dialogue.initiated) return;
        player.switchSprites('walkRight');
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {
                    ...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false;
                break;
            }
        }
        for (let i = 0; i < nPCS.length; i++) {
            const npc = nPCS[i];
            if (rectangularCollisionForNPC({
                rectangle1: player,
                rectangle2: {
                    ...npc, position: {
                        x: npc.position.x - 3,
                        y: npc.position.y,
                    }
                }
            })) {
                player.animate = false;
                moving = false;
            }
        }
        if (moving) {
            movables.forEach((movable) => {
                if (movable.paths) {
                    movable.position.x -= 3
                    movable.move('d')
                } else {
                    movable.position.x -= 3
                }
            })
        }
    }
    // moving the player, collisions checking and stuff
    if (!keys.d.pressed && lastKey === 'd') {
        player.switchSprites('idleRight')
    }
}

 // To know in which level u were and put you there.
if (localStorage.getItem('level') === '2') {
    levels[2].init()
} else {
levels[1].init()
}

const mouse = {
    x: undefined,
    y: undefined,
}

// Battle Mouse

canvas.addEventListener('click', (event) => {
    if (activeTile) {
        player.path = activeTile
    }
})

window.addEventListener('mousemove', (event) => {
    var rect = canvas.getBoundingClientRect();
      mouse.x = (event.clientX - rect.left) * (canvas.width / rect.width);
      mouse.y = (event.clientY - rect.top) * (canvas.height / rect.height);
      activeTile = null
      for (let index = 0; index < battleFloors.length; index++) {
        const battleFloor = battleFloors[index]
        if (mouse.x > battleFloor.position.x && mouse.x < battleFloor.position.x + battleFloor.size && 
            mouse.y > battleFloor.position.y && mouse.y < battleFloor.position.y + battleFloor.size) {
                activeTile = battleFloor
                break;
            }
    }
} )
animate()