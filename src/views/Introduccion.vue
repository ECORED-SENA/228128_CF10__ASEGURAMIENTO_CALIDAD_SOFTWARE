<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4          
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='')         
      .col-lg-7.my-3 
        .bg1.h-100.p-4.text-white 
          p(data-aos="fade-down").mb-0 Bienvenido al presente componente formativo. Desarrollar software de calidad, implica también conocer cómo funcionan y cómo se comportan las bases de datos, aprovechando al máximo sus funcionalidades, por lo tanto, entender las estructuras de datos, el funcionamiento de los algoritmos de búsqueda, y en qué caso utilizarlos, así como analizar una sentencia de búsqueda y mejorarlas, junto con la afinación adecuada del motor de la base de datos según la arquitectura y las necesidades del cliente, logra mejorar el desempeño de las bases de datos, ofreciendo una buena experiencia al usuario con respecto a las solicitudes que él mismo realice.      

    .bg2.p-4.brad(data-aos="flip-down")
      p(data-aos="fade-down") Cabe resaltar, que para este proceso, existen técnicas como la medición a través de indicadores de gestión, observación, encuestas, entre otras herramientas, que permiten el mejoramiento continuo de los procedimientos relacionados con los clientes internos y externos.

      h5.tb(data-aos="fade-down").mb-0 Y todo esto, al final, se convierte en calidad del #[i software].    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
