function Hover(btn) {
    btn.style.position = 'absolute';
    btn.style.top = Posicao(10, 90);
    btn.style.left = Posicao(10, 90);
}

function Posicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}

function Sim() {
    var escreve = document.getElementById('textinho');
    escreve.style.fontSize = '15px'
    escreve.style.fontFamily = "'Poppins', sans-serif"; 
    escreve.innerHTML = 'Alguns acasos são essenciais pra nossa vida, e pode ter certeza que voçê foi um desses acasos!<br>Te conhecer, foi e tem sido a melhor coisa que aconteceu na minha vida.<br>Desde que te conheci eu consigo ver nitidamente a evolução que eu passei ao teu lado.<br>Lembra quando eu me deitava no teu colo quando começamos a conversar mais?<br>Lembra que eu te olhava e quando você repara que eu tava te olhando, eu rapidamente disfarçava?<br>Bom, nesses momentos eu conseguia te olhar e ver o quão incrível você é!<br>Ao te olhar, eu sentia algo diferente, estranho, algo bom, mas que eu nunca havia sentido antes<br>e que aumentava ainda mais so por estar perto de você.<br>Foi naquele momento que conheci o amor, só de te olhar.<br>Eu não sou bom com palavras e muito menos com textos kkk,<br>não consigo descrever o quanto sou grato ao universo pelo nosso "acaso",<br> não posso explicar com palavras o quanto te ter perto me faz bem e o quanto eu sou o homem mais sortudo do mundo por te ter ao meu lado.<br>Passamos por muitas coisas juntos; brigas,desentedimentos, momentos bons, momentos ruins, e eu agradeço por ter sido tudo ao teu lado.<br>Pode ter total certeza de duas coisas: 1. eu prometo que sempre será eu + voçê<br>2. eu prometo que se algum dia precisasse fazer tudo de novo, saiba que eu sempre escolheria você!<br>Eu te amo muitão, meu amor!! Você sempre será minha princesa, independente de tudo! 💖🥺✨'
}


