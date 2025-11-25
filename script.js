// 1. Troca automática de frases
const frases = [
    "Você é o melhor capítulo da minha vida.",
    "Cada sorriso seu muda meu dia inteiro.",
    "Te amar é fácil, natural e a melhor escolha que já fiz.",
    "Sou grato a Deus todos os dias por você existir.",
    "Se eu pudesse escolher de novo, escolheria você toda vez.",
    "Seu jeito é o meu ponto de paz."
];

let index = 0;
const caixaFrase = document.querySelector('.frase');

if (caixaFrase) {
    setInterval(() => {
        caixaFrase.style.opacity = 0;
        setTimeout(() => {
            caixaFrase.textContent = frases[index];
            caixaFrase.style.opacity = 1;
            index = (index + 1) % frases.length;
        }, 400);
    }, 4000);
}


// 2. Scroll reveal
const elementos = document.querySelectorAll('.frase, .foto');
function revelar() {
    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < window.innerHeight - 80) {
            el.classList.add('mostrar');
        }
    });
}
window.addEventListener('scroll', revelar);
revelar();


// 3. Corações subindo
function criarCoracao() {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.classList.add("coracao");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(criarCoracao, 700);


// 4. Efeito máquina de escrever
function typeWriter(texto, elemento, velocidade = 70) {
    if (!elemento) return;
    let i = 0;
    elemento.innerHTML = '';
    function escrever() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escrever, velocidade);
        }
    }
    escrever();
}

const titulo = document.querySelector("#titulo-animado");
if (titulo) {
    typeWriter("Eu te amo, meu amor ❤️", titulo);
}


// 5. Modal de imagens
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const fechar = document.getElementById('fechar');

if (modal && modalImg && fechar) {
    document.querySelectorAll('.foto').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    fechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
}