<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.bg_intro(data-aos="zoom-in")      
      .col-lg-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img2.png', alt='') 
      .col-lg-7
        p(data-aos="fade-down-right").my-3 Antes de tener un producto editorial como un libro, un diario o una revista en las manos, 
          span.text-color #[b existe un proceso de ideación, construcción y planeación de cómo se deben presentar dichos contenidos]
          span , los mismos deben pasar siempre por un proceso de producción y edición editorial, el cual conoceremos a continuación: 
      .col-lg-1
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img3.png', alt='') 
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    
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
