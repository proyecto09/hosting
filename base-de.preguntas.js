function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Cuál es el hueso más largo del esqueleto humano?",
    imagen: "https://i.ibb.co/xq3CKhr/FEMUR.jpg",
    respuesta: "Fémur",
    distractores: ["Parietal", "Occipital", "Radio"],
  },
 
  {
    pregunta: "Señale la función que no corresponde al sistema óseo:",
    respuesta: "Almacenar proteínas y glucógeno",
    distractores: [" Servir de palanca para los músculos", "Almacenar calcio y fósforo", "Proteger órganos vitales"],
  }, 
  {
    pregunta: "El hueso más pequeño del cuerpo humano es",
    imagen: "https://i.ibb.co/R4xCChc/estr.jpg",
    respuesta: "Estribo",
    distractores: ["Yunque", "Martillo", "Cubito"],
  }, {
    pregunta: "¿Cuántos huesos tiene el cuerpo humano?",
    imagen: "https://i.ibb.co/cX2xGtg/esqqq.jpg",
    respuesta: "206",
    distractores: ["205", "210", "207"],
  },
   {
    pregunta: "La médula ósea es:",
    imagen: "https://i.ibb.co/hsHQgWY/medula-osea.jpg",
    respuesta: "Sustancia interior de los huesos, que tiene funciones hematopoyéticas",
    distractores: ["Membrana densa y delgada ubicada en la superficie de los huesos", "Parte rígida y dura del hueso", "Un tejido flexible"],
  },
];
