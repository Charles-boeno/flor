// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Na época", time: 15 },
  { text: "O sussurro dos pássaros", time: 18 },
  { text: "Solitário antes que o sol chorasse", time: 27 },
  { text: "Caiu do céu", time: 32 },
  { text: "Como gotas de água", time: 33 },
  { text: "Onde estou agora? Não sei por quê", time: 41 },
  { text: "Lindas borboletas em minhas mãos", time: 47 },
  { text: "Muita luz para o crepúsculo", time: 54 },
  { text: "No clima do amor das flores", time: 59 },
  { text: "Essa visão", time: 67 },
  { text: "Muito forte, me surpreendeu", time: 72 },
  { text: "Silêncio Deixe-me ver o que foi", time: 78 },
  { text: "Eu só quero viver nas nuvens", time: 83 },
  { text: "Onde estou agora? Não sei por quê", time: 91 },
  { text: "Lindas borboletas em minhas mãos", time: 97 },
  { text: "Muita luz para o crepúsculo", time: 104 },
  { text: "No clima do amor das flores", time: 108 },
  { text: "No momento", time: 144 },
  { text: "O sussurro dos pássaros", time: 148 },
  { text: "Solitário antes que o sol chorasse", time: 153 },
  { text: "Caiu do céu", time: 158 },
  { text: "Como gotas de água", time: 164 },
  { text: "Onde estou agora? Não sei por quê", time: 169 },
  { text: "Lindas borboletas em minhas mãos", time: 176 },
  { text: "Muita luz para o crepúsculo", time: 183 },
  { text: "No clima das flores", time: 188 },
  { text: "Amor.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);