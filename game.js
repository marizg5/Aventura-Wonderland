/*Dados do jogo*/
const storyData = {
    start: {
        text: "Ao cair pelo buraco, você começa a ver objetos flutuando ao seu redor e vê um livro, você toca?",
        choices: [
            { text: "Você toca no livro", next: "toca_no_livro" },
            { text: "Você ignora o livro e continua caindo", next: "ignora_o_livro" }
        ]
    },
    
    ignora_o_livro: {
        text: "As imagens ganham vida e um portal se abre, transportando você para um novo cenário onde encontra o Coelho Branco. Ele está com pressa e diz para você o seguir para não se atrasar.",
        choices: [
            { text: "Você segue o Coelho Branco sem questioná-lo", next: "sem_questionar" },
            { text: "Ignorando o coelho, você dispara para o lado contrário", next: "Seguir" }
        ]
    },
    
    sem_questionar: {
        text: "Seguindo o Coelho, você chega a uma mesa de chá maluca. O Chapeleiro Louco e seus amigos excêntricos a convidam para se juntar a eles, mas primeiro você deve resolver um enigma. A decisão de aceitar o desafio para participar é sua.",
        choices: [
            { text: "Você aceita o desafio e se concentra para decifrar o enigma", next: "Aceita" },
            { text: "Você tenta sair correndo da sala", next: "Não_aceita" }
        ]
    },
    
    Não_aceita: {
        text: "Em um movimento sincronizado, os gêmeos batem as portas, bloqueando sua saída um instante antes que você escape.",
        choices: [
            { text: "Correr para o outro lado", next: "Desvio" },
            { text: "Aceitar o desafio", next: "Aceita" }
        ]
    },
    
    Desvio: {
        text: "Ao correr para o lado oposto, você se depara com um grande espelho de moldura dourada. Seu reflexo parece assustado, mas por um instante, ele pisca para você, algo que você tem certeza que não fez.",
        choices: [
            { text: "Tocar o espelho", next: "atravessa_o_espelho" },
            { text: "Se render e aceitar o desafio", next: "Aceita" }
        ]
    },
    
    atravessa_o_espelho: {
        text: "Ao atravessar o espelho, você acorda de repente. O alívio de ter sido apenas um sonho é quebrado por um sussurro em seu ouvido: O enigma ainda estará te esperando",
        choices: [
            { text: "Esquecer de tudo o que aconteceu e viver normalmente", next: "fim_de_jogo" },
            { text: "Voltar e resolver o enigma", next: "Aceita" }
        ]
    },
    
    fim_de_jogo: {
        text: "Você acorda em sua cama, com a sensação de que tudo foi um sonho. Mas ao olhar ao redor, percebe que o livro de Alice ainda está sobre sua mesa, aberto na página onde você parou. A aventura no País das Maravilhas parece ter terminado, mas quem sabe... talvez o próximo capítulo ainda esteja por vir.",
        choices: [
            { text: "Fim de jogo", next: "finalizar_jogo" }
        ]
    },
    
    Aceita: {
        text: "Dizem que sou rei e não tenho reino, dizem que sou loiro mas cabelo não tenho, dizem que ando mas não me movo, acerto relógios sem ser relojoeiro. Quem sou eu?",
        choices: [
            { text: "Digite sua resposta:", type: "input", correct: "Sol", correct: "sol", correct: "SOL"}
        ]
    },
    
    Errou: {
        text: "Você errou! Como consequência, você é condenada a um lugar permanente na mesa de chá, presa em um ciclo eterno de enigmas e loucuras.",
        choices: [
            { text: "Tente novamente", next: "Aceita" },
            { text: "Ficar presa na festa do chá para sempre", next: "fim_de_jogo2" }
        ]
    },
    
    fim_de_jogo2: {
        text: "Você foi condenada a uma eternidade naquela sala, presa em um ciclo sem fim: o chá que nunca acaba, os enigmas que a perseguem, a loucura do Chapeleiro como trilha sonora e o sarcasmo do Gato como sua única e torturante companhia.",
        choices: [
            { text: "Fim de jogo", next: "finalizar_jogo" }
        ]
    },
    
    Acertou: {
        text: "Parabéns, você acertou! Em troca de sua companhia para uma rodada de chá, o Chapeleiro Maluco lhe presenteia com um mapa encantado, cujo destino é o grandioso castelo da Rainha de Copas.",
        choices: [
            { text: "Você segue as direções do mapa", next: "Seguir" },
            { text: "Confiando na sua intuição, você ignora o mapa e segue seu próprio caminho", next: "Intuição" }
        ]
    },
    
    Intuição: {
        text: "Após o que pareceu uma longa caminhada, um som caótico quebra o silêncio: uma verdadeira guerra de xícaras de chá. Com um arrepio, você percebe que andou em círculos e está, inevitavelmente, de volta à sala do Chapeleiro Maluco.",
        choices: [
            { text: "Usar o mapa", next: "Seguir" },
            { text: "Ficar e participar da guerra do chá", next: "guerra_do_chá" }
        ]
    },
    
    guerra_do_chá: {
        text: "Parabéns! Sua habilidade e jogo limpo impressionaram a todos. Como prêmio, o Chapeleiro e seus companheiros a escoltaram pessoalmente através dos jardins, garantindo que chegasse em segurança ao castelo.",
        choices: [
            { text: "Você aceita a ajuda deles", next: "Acompanhada" },
            { text: "Você vai sozinha seguindo o mapa", next: "Seguir" }
        ]
    },
    
    Acompanhada: {
        text: "Você consegue chegar rapidamente ao castelo da Rainha de copas. O que faz agora?",
        choices: [
            { text: "Chamá-la para jogar croquet", next: "croquet" },
            { text: "Você a confronta, exigindo respostas sobre todas as maravilhas e loucuras que presenciou neste lugar.", next: "confronta" }
        ]
    },
    
    confronta: {
        text: "Você deixou a rainha irritada!",
        choices: [
            { text: "Continuar questionando", next: "raivosa" },
            { text: "Chama-la para uma partida de croquet", next: "croquet" }
        ]
    },
    
    raivosa: {
        text: "A Rainha chamou o batalhão de cartas para prende-la por desacato",
        choices: [
            { text: "Correr", next: "Cartas" },
            { text: "Pedir perdão", next: "Vida" }
        ]
    },
    
    Cartas: {
        text: "As cartas marcham em perfeita sincronia, fechando um círculo ao seu redor e bloqueando qualquer rota de fuga. Você é pega e arrastada até o trono, onde a Rainha, com um sorriso cruel, a declara seu novo 'animal de estimação'",
        choices: [
            { text: "Fim de jogo", next: "finalizar_jogo" }
        ]
    },
    
    Seguir: {
        text: "No caminho você encontra flores falantes que tentam te convencer a ficar com elas para fofocar.",
        choices: [
            { text: "Ficar para conversar com elas", next: "fofocar" },
            { text: "Seguir seu caminho sem distrações", next: "Acompanhada" }
        ]
    },
    
    // No nó fofocar, removendo a opção "Jogar Novamente"
    fofocar: {
        text: "A fofoca termina com uma traição: as flores com quem você falava a devora. Você está morto(a)!",
        choices: [
            { text: "Finalizar o jogo", next: "finalizar_jogo" }
        ]
    },
    
    croquet: {
        text: "Sua única chance de retornar ao seu mundo é superar a Rainha. Você a enfrenta, apostando tudo na vitória.",
        choices: [
            { text: "Aproveitando um momento de distração, você arrisca um movimento desonesto, torcendo para não ser descoberta", next: "Desonesto" },
            { text: "Apesar da pressão, você escolhe a honestidade e joga limpo", next: "Honesto" }
        ]
    },
    
    Honesto: {
        text: "Você perde o jogo, mas a Rainha, impressionada com sua rara honestidade, poupa sua cabeça. Em vez disso, ela lhe entrega um frasco com o sangue do Jaguadarte e decreta: 'Beba. É a sua passagem de volta para casa.'",
        choices: [
            { text: "Beber o liquído", next: "líquido" },
            { text: "'Por que eu voltaria para um mundo sem enigmas ou gatos sorridentes?' - Você questiona, devolvendo o frasco. 'Eu escolho ficar.'", next: "fim_de_jogo3" }
        ]
    },
    
    fim_de_jogo3: {
        text: "Sua resposta atrevida faz a Rainha rir. Em vez de raiva, você fica impressionada por você ter finalmente entendido a lógica do lugar. Você a declara uma deles e a aceita na corte. Você não é mais uma intrusa, mas sim uma residente permanente, exatamente como escolheu.",
        choices: [
            { text: "Fim de jogo", next: "finalizar_jogo" }
        ]
    },
    
    líquido: {
        text: "Ao beber, você sente uma leveza e é puxada para cima, refazendo o caminho da queda em reverso. Os cenários passam rapidamente até você aterrissar suavemente na grama, de volta ao seu mundo.",
        choices: [
            { text: "Fim de jogo", next: "finalizar_jogo" }
        ]
    },
    
    Desonesto: {
        text: "A Rainha percebe sua jogada e fica furiosa! Ela imediatamente ordena que contem a sua cabeça.",
        choices: [
            { text: "Você tenta correr", next: "Escapar" },
            { text: "Implora pela sua vida", next: "Vida" }
        ]
    },
    
    Vida: {
        text: "A Rainha decide poupar sua cabeça, mas decreta uma sentença diferente: em vez da morte, você é banida permanentemente do País das Maravilhas e exilada no reino de sua irmã, a Rainha Branca.",
        choices: [
            { text: "Fim de jogo", next: "finalizar_jogo" }
        ]
    },
    
    Escapar: {
        text: "O exército de cartas a capturou e, sem demora, a sentença da Rainha foi executada: Cortem-lhe a cabeça!",
        choices: [
            { text: "Finalizar o jogo", next: "finalizar_jogo" }
        ]
    },
    
    toca_no_livro: {
        text: "O livro começa a girar, e você é puxada junto. Você se vê agora em um ambiente onde tudo gira como um carrossel. As paredes se tornam onduladas, e a gravidade parece não existir. Você precisa encontrar uma forma de parar o movimento para poder sair.",
        choices: [
            { text: "Você tenta segurar um objeto flutuante para se estabilizar", next: "estabilizar" },
            { text: "Você grita pedindo ajuda", next: "grita" }
        ]
    },
    
    grita: {
        text: "Ao gritar, a voz que responde dá uma pista: 'Para parar o movimento, você deve primeiro entender o que está em movimento.' Você percebe que precisa analisar o ambiente para descobrir o que está causando o giro, talvez uma solução seja refletir sobre a natureza da gravidade e do carrossel.",
        choices: [
            { text: "Você tenta descobrir o que está em movimento ao seu redor e encontra um padrão", next: "chave" },
            { text: "Você decide ignorar a voz e tenta se concentrar em parar o movimento sozinha", next: "desacelerar" }
        ]
    },
    
    desacelerar: {
        text: "Você tenta encontrar uma forma de desacelerar o carrossel, mas descobre que o movimento é mais forte do que você imaginava. Você começa a se perder em uma espiral de confusão, onde o tempo e o espaço se tornam ainda mais distorcidos.",
        choices: [
            { text: "Você começa a pensar na pista da voz", next: "chave" },
            { text: "Você espera para ver o que pode acontecer", next: "morte_vazia" }
        ]
    },
    
    morte_vazia: {
        text: "Você se perde na imensidão entre o espaço tempo.",
        choices: [
            { text: "Finalizar o jogo", next: "finalizar_jogo" }
        ]
    },
    
    estabilizar: {
        text: "Você consegue se estabilizar com a ajuda de uma corda flutuante. A gravidade começa a voltar aos poucos, mas você encontra uma chave dourada flutuando, que pode ser útil para o próximo passo. O que você faz com a chave?",
        choices: [
            { text: "Você tenta usar a chave para abrir uma porta invisível no ambiente", next: "invisible" },
            { text: "Você guarda a chave e começa a explorar mais o ambiente, procurando uma saída", next: "chave" }
        ]
    },
    
    chave: {
        text: "Você encontra uma parede ondulada que a puxa em uma direção. Você percebe que deve tomar uma decisão: ou atravessa a parede ou tenta encontrar um outro caminho, mais seguro.",
        choices: [
            { text: "Atravessar a parede", next: "ignora_o_livro" },
            { text: "Encontrar caminho seguro", next: "Intuição2" }
        ]
    },
    
    Intuição2: {
        text: "Após o que pareceu uma longa caminhada, um som caótico quebra o silêncio: uma verdadeira guerra de xícaras de chá. Com um arrepio, você percebe que andou em círculos e está, inevitavelmente, de volta à sala do Chapeleiro Maluco.",
        choices: [
            { text: "Voltar", next: "chave" },
            { text: "Ficar e participar da guerra do chá", next: "guerra_do_chá" }
        ]
    },
    
    invisible: {
        text: "Ao usar a chave, uma porta secreta se revela, levando você para uma sala cheia de espelhos. Você deve resolver um enigma sobre identidade para continuar sua jornada: Se me bater com força posso até rachar, mas você nunca poderá me impedir de devolver o seu olhar.",
        choices: [
            { text: "Digite sua resposta:", type: "input", correct: "espelho", correct: "Espelho" , correct: "ESPELHO"}
        ]
    },
    
    espelho: {
        text: "Você sussurra a resposta correta. O espelho central vibra e sua superfície se torna líquida, revelando uma nova passagem.",
        choices: [
            { text: "Atravessar a passagem.", next: "ignora_o_livro" }
        ]
    },
    
    reflexo: {
        text: "Sua voz ecoa...Os espelhos permanecem frios e imóveis. A resposta está próxima, mas não é essa. A passagem continua selada.",
        choices: [
            { text: "Tentar novamente", next: "espelho" },
            { text: "Desistir e tentar achar outra saída", next: "chave" }
        ]
    }
};

// Elementos do DOM
const introScreen = document.getElementById('intro');
const gameScreen = document.getElementById('game');
const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const startButton = document.getElementById('start-button');
const finalScreen = document.getElementById('final-screen');

// Função para mostrar o jogo
function showGame() {
    introScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadStory('start');
}

// Função para mostrar tela final
function showFinalScreen() {
    gameScreen.style.display = 'none';
    finalScreen.style.display = 'block';
}

// Função para carregar a história
function loadStory(nodeId) {
    const node = storyData[nodeId];
    storyElement.innerHTML = `<p>${node.text}</p>`;
    choicesElement.innerHTML = '';
    
    if (node.choices && node.choices.length > 0) {
        // Verifica se é um input
        if (node.choices[0].type === 'input') {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = node.choices[0].text;
            input.style.padding = '10px';
            input.style.fontSize = '1em';
            input.style.borderRadius = '5px';
            input.style.border = '1px solid #ccc';
            input.style.marginBottom = '10px';
            input.style.display = 'block';
            input.style.width = '80%';
            input.style.maxWidth = '400px';
            input.style.margin = '15px auto';

            const button = document.createElement('button');
            button.textContent = 'Enviar';

            button.addEventListener('click', () => {
                const userAnswer = input.value.trim().toLowerCase();
                const correctAnswer = node.choices[0].correct.toLowerCase();
                if (userAnswer === correctAnswer) {
                    loadStory('Acertou');
                } else {
                    loadStory('Errou');
                }
            });

            choicesElement.appendChild(input);
            choicesElement.appendChild(button);
        } else {
            // Renderização padrão de botões
            node.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                if (choice.next === "finalizar_jogo") {
                    button.addEventListener('click', showFinalScreen);
                } else {
                    button.addEventListener('click', () => loadStory(choice.next));
                }
                choicesElement.appendChild(button);
            });
        }
    }
}

// Evento do botão iniciar
startButton.addEventListener('click', showGame);
