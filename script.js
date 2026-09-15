// Array con notas de amor inspiradas en Snoopy y dedicadas a ella
const notasDeAmor = [
    "«Si pudiera darte una cosa en la vida, te daría la capacidad de verte a ti misma a través de mis ojos...» 🐾",
    "Eres el abrazo cálido que arregla cualquier mal día, mi bella Maracuchita. ❤️",
    "¡Abrazo de Snoopy rápido solo para recordarte que me encantas muchísimo! 🐶✨",
    "Ni todas las estrellas que mira Snoopy desde su techo se comparan con lo mucho que brillas tú. 🌟",
    "Estar contigo es bailar de felicidad como lo hace Snoopy cuando está alegre. 💃🎶",
    "Mi lugar favorito en el universo es justo a tu lado. 🥰",
    "Tu sonrisa tiene el poder de alegrar mi corazón al instante. ¡Gracias por ser como eres!"
];

// Función para cambiar las notas al pulsar el botón
function mostrarNotaSorpresa() {
    const contenedorNota = document.getElementById('dynamic-note');
    const indiceAleatorio = Math.floor(Math.random() * notasDeAmor.length);
    
    // Efecto visual suave de cambio
    contenedorNota.style.opacity = '0';
    setTimeout(() => {
        contenedorNota.innerText = notasDeAmor[indiceAleatorio];
        contenedorNota.style.opacity = '1';
        contenedorNota.style.transition = 'opacity 0.4s ease';
    }, 200);

    // Generar corazones extra al hacer clic
    crearCorazonEspecifico();
}

// Función para generar lluvia de corazones flotantes
function crearLluviaDeCorazones() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    
    // Emojis variados de amor y estilo Snoopy
    const simbolos = ['❤️', '💖', '🐾', '💕', '💛', '🐥'];
    heart.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

function crearCorazonEspecifico() {
    for (let i = 0; i < 5; i++) {
        setTimeout(crearLluviaDeCorazones, i * 150);
    }
}

// Event Listeners e inicialización
document.addEventListener('DOMContentLoaded', () => {
    const btnCartita = document.getElementById('btn-cartita');
    if (btnCartita) {
        btnCartita.addEventListener('click', mostrarNotaSorpresa);
    }

    // Iniciar lluvia de corazones automática a intervalos
    setInterval(crearLluviaDeCorazones, 600);
});