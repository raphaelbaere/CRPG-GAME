const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const buttons = document.querySelectorAll('button');
const userGui = document.querySelector('.user-gui');
const userUtils = document.querySelector('.user-utils')
canvas.width = 1024;
canvas.height = 576;
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

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


// Colisão entre o player e a boundary
function rectangularCollision({ rectangle1, rectangle2 }) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
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

const handleFinishDialogue = (optionsPassada, divPassada, dialogo, linha, npc2, divAtual, pAtual, optionsAtual, answerAtual, answerPAtual, pAtualTyped) => {
    optionsPassada.addEventListener('click', () => {
        optionsPassada.style.display = 'none';
        divPassada.style.display = 'none';
        divAtual.style.display = 'flex';
        const options = {
            strings: [npc2.dialogue[dialogo].npcLine[linha]],
            typeSpeed: 30,
          };
          
          const typed = new Typed('#npc-dialogue3', options);
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
    localStorage.setItem('adam', 'Não tenho mais nada a te dizer.')
}

const handleAnswer = (optionsPassada, divPassada, dialogo, linha, npc2, divAtual, pAtual, optionsAtual, answerAtual, answerPAtual, pAtualTyped) => {
    optionsPassada.addEventListener('click', () => {
        optionsPassada.style.display = 'none';
        divPassada.style.display = 'none';
        divAtual.style.display = 'flex';
        const options = {
            strings: [npc2.dialogue[dialogo].npcLine[linha]],
            typeSpeed: 30,
          };
          
          const typed = new Typed('#npc-dialogue2', options);
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
    }
}

let adamSpriteX = 550;
let adamSprite;
let nPCS = [];
let characters = [];
let doors;
let entries;
let collisions;
let boundaries;
let movables;
let adam;
let player;
let background;
let level = '1';
const levels = {
    1: {
        init: () => {
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
                    hold: 10,
                },
                sprites: {
                    walkUp: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerUp.png',
                        frames: {
                            max: 4,
                            hold: 10,
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

            characters = [];
            adam = new NPC({
                position: {
                    x: 311.333333333333,
                    y: 200.666666666667,
                },
                imageSrc: "./Data/Imagens/Personagens/NPC's/Adam/Adam.png",
                frames: {
                    max: 6,
                    hold: 10,
                },
                name: 'adam',
                animate: true,
                dialogue: [{
                    npcLine: ['Olá. Eu sou o Adam! Você é novo por aqui, certo?'],
                    playerOptions: [ 'Não, não sou novo. Eu só.. perdí minha memória.',
                     'E se eu for? O que você tem a ver com isso?', 'Ok. Esquisito..'],
                }, {
                    npcLine: ['Perdeu sua memória? O que houve?', 'Não muito.. Só estava sendo educado.', 'Esquisito? Eu?! Por quê?'],
                    playerOptions: ['Eu acordei na ala psiquiátrica. Disseram que eu estava andando pelado na rua...', 'Tudo bem, perdão pela grosseria..', 'Abordando pessoas que você nem conhece pela rua...',]
                }, {
                    npcLine: ['Cara, que bizarro. Melhor tomar mais cuidado.', 'Tranquilo, passou.', 'Eu só estava sendo educado, otário.'],
                    playerOptions: ['Sair..', 'Sair..', 'Sair..']
                }]
            });
            nPCS = [adam]

            adamSprite = new NPCSprites({
                position: {
                    x: 311.333333333333,
                    y: 200.666666666667,
                },
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
                }
            })

            characters = [adamSprite];

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
                            }
                        }))
                })
            })

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
                            }
                        }))
                })
            })

            if (localStorage.getItem('movables')) {
                const savedMovables = JSON.parse(localStorage.getItem('movables'));
                nPCS = [];
                characters = [];
                boundaries = [];
                entries = [];
                savedMovables.forEach((movable) => {
                    switch (movable.class) {
                        case 'sprite':
                            background = new Sprite({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                            });
                            break;
                        case 'boundary':
                            boundaries.push(new Boundary({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                }
                            }))
                            break;
                        case 'enter':
                            entries.push(new Enter({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
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
                            }))
                            break;
                        case 'npcSprites':
                            characters.push(new NPCSprites({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                name: movable.name,
                                animate: movable.animate,
                                frames: movable.frames,
                            }))
                    }
                })
                characters = [...characters, player]
                movables = [background, ...boundaries, ...entries, ...nPCS, characters[0], ...adamPath]
            } else {
                background = new Sprite({
                    position: {
                        x: -699,
                        y: -560,
                    },
                    imageSrc: './Data/Imagens/Mapa/testeMap.png',
                });
                movables = [background, ...boundaries, ...entries, ...nPCS, characters[0], ...adamPath]
            }
            characters = [...characters, player]
        },
    },
    2: {
        init: () => {
            level = '2';
            if (localStorage.getItem('level')) {
                localStorage.removeItem('level')
            } else {
                localStorage.setItem('level', '2')
            }
            player = new Sprite({
                position: {
                    x: 500,
                    y: 250,
                },
                imageSrc: './Data/Imagens/Personagens/Player/player.png',
                frames: {
                    max: 6,
                    hold: 10,
                },
                sprites: {
                    walkUp: {
                        imageSrc: './Data/Imagens/Personagens/Player/playerUp.png',
                        frames: {
                            max: 4,
                            hold: 10,
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
            background = new Sprite({
                position: {
                    x: -100,
                    y: -150,
                },
                imageSrc: './Data/Imagens/Mapa/roomMap2.png',
            })
            characters = [player];
            nPCS = [];
            entries = [];
            boundaries = [];
            movables = [background]
            if (localStorage.getItem('movables')) {
                const savedMovables = JSON.parse(localStorage.getItem('movables'));
                nPCS = [];
                characters = [];
                boundaries = [];
                entries = [];
                savedMovables.forEach((movable) => {
                    switch (movable.class) {
                        case 'sprite':
                            background = new Sprite({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                            });
                            break;
                        case 'boundary':
                            boundaries.push(new Boundary({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                }
                            }))
                            break;
                        case 'enter':
                            entries.push(new Enter({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
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
                            }))
                            break;
                        case 'npcSprites':
                            characters.push(new NPCSprites({
                                position: {
                                    x: movable.position.x,
                                    y: movable.position.y,
                                },
                                imageSrc: movable.imageSrc,
                                name: movable.name,
                                animate: movable.animate,
                                frames: movable.frames,
                            }))
                    }
                })
                characters = [...characters, player]
                movables = [background, ...boundaries, ...entries, ...nPCS]
            }
        },
    },
}

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

if (localStorage.getItem('movables')) {
    buttons[0].innerHTML = 'Continue'
}

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

let lastKey = '';
let lastKey2 = '';


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

const dialogue = {
    initiated: false,
}

const game = {
    initiated: false,
    changeMap: false,
}

const overlay = {
    opacity: 0,
}


function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    characters.sort((a, b) => {
        return a.position.y - b.position.y
    }).forEach((characters) => {
        characters.draw();
    })
    boundaries.forEach((boundary) => {
        boundary.draw();
    })
    entries.forEach((enter) => {
        enter.draw();
    })
    
    context.save()
    context.globalAlpha = overlay.opacity;
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore()
    if (!game.initiated) return;
    let moving = true;
    player.animate = true;

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
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete() {
                        gsap.to(overlay, {
                            opacity: 1,
                            onComplete() {
                                game.changeMap = true;
                                levels[2].init();
                                gsap.to(overlay, {
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

    for (let i = 0; i < nPCS.length; i++) {
        const npc = nPCS[i];
        if (!rectangularCollisionForNPC({
            rectangle1: player,
            rectangle2: {...npc, position: {
                x: npc.position.x,
                y: npc.position.y,
            }}
        }) && !dialogue.initiated && !game.changeMap) {
            drawings = [adamSprite, player];
            drawings.sort((a, b) => {
              return  a.position.y - b.position.y
            }).forEach((drawing) => {
                drawing.update()
            })
            adam.update()
        } else {
            adamSprite.switchSprites(adamSprite.lastSprite)
        }
    }


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
            nPCS.forEach((npc2) => {
                if (npc2.position.x === npc.position.x) {
                    dialogue.initiated = true;
                    dialogueDiv.style.display = 'flex';
                    npcName.innerText = npc2.name;
                    if (localStorage.getItem(npc2.name)) {
                        npcLastDialogueDiv.style.display = 'flex';
                        npcLastDialogue.innerText = localStorage.getItem(npc2.name);
                        const button = document.createElement('button');
                        button.className = "player-options";
                        button.innerText = "Tudo bem, adeus..";
                        button.addEventListener('click', () => {
                            dialogue.initiated = false;
                            dialogueDiv.style.display = 'none';
                        })
                        if (playerLastOptionContainer.children.length === 1) return;
                        playerLastOptionContainer.appendChild(button);
                        playerLastOptionContainer.style.display = 'flex';
                        return;
                    }
                    const options = {
                        strings: [npc2.dialogue[0].npcLine[0]],
                        typeSpeed: 30,
                      };
                      
                      const typed = new Typed('#npc-dialogue', options);
                    npcDialogueDiv.addEventListener('click', () => {
                        npcDialogue.innerText = '';
                        npcDialogueDiv.style.display = 'none';
                        playerOptionsContainer.style.display = 'flex';
                        npcAnswerDiv.style.display = 'flex';
                        npcAnswer.innerText = npc2.dialogue[0].npcLine[0];
                        npc2.dialogue[0].playerOptions.forEach((playerOption) => {
                            const button = document.createElement('button');
                            button.className = "player-options";
                            button.innerText = playerOption;
                            button.addEventListener('click', () => {
                                handleDialogue(event, npc2)
                            })
                            playerOptionsContainer.appendChild(button);
                        })
                    })
                }
            })
        }
        break;
    }


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
                break;
            }
        }

        
        if (moving) {
            movables.forEach((movable) => {
                movable.position.y += 3
            })
        }
    }

    if (!keys.w.pressed && lastKey === 'w') {
        player.switchSprites('idleUp')
    }

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
                break;
            }
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
        }
    }

    if (!keys.s.pressed && lastKey === 's') {
        player.switchSprites('idleDown')
    }

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
                break;
            }
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.x += 3
            })
        }
    }

    if (!keys.a.pressed && lastKey === 'a') {
        player.switchSprites('idleLeft')
    }

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
                break;
            }
        }
        if (moving) {
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
        }
    }

    if (!keys.d.pressed && lastKey === 'd') {
        player.switchSprites('idleRight')
    }
}


if (localStorage.getItem('level') === '2') {
    levels[2].init()
} else {
levels[1].init()
}
animate()