<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 <i>Software</i> de diagramación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img12.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen diversos software de diagramación, sin embargo en diseño es muy utilizado el programa de Adobe InDesign, 
          span(style='color:#FFA726') #[b esta aplicación especializada aporta al proceso de maquetación gran riqueza y versatilidad, en este se pueden crear diversidad de elementos ] 
          span(style='color:#00223D') como por ejemplo, un flayer básico, una revista, un libro físico o electrónico. Esta es una herramienta necesaria para realizar la diagramación de cualquier pieza gráfica de manera fácil, cuenta con recursos similares ya utilizados de programas como AI y Ps, con recursos como creación de columnas, márgenes y guías, paginación, estilos de párrafo y de carácter entre otras. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left") 
        p 
          span(style='color:#F57C00') InDesign también permite la interacción entre diferentes programas de Adobe como Photoshop e Illustrator,  
          span(style='color:#00223D') recursos, plantillas y elementos compartidos. Acepta una gran cantidad de formatos en cuanto a imagen, audio y video. 

      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-stretch
          .col-lg-5.bg-color-t1-1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img13.svg', alt='') 

          .col-lg-7.bg-color-t1-2.d-flex.align-content-center.flex-wrap
            p Permite exportar archivos en formatos JPG, PNG, PF O FLASH, entre otros lo cual da gran versatilidad en los documentos.
             
            p.p-color-primario #[b Las letras que identifican al programa son ID.]

    .card-bg-color.card-bg-color__mint.mt-5.pb-5
      .texto-adorno.bg-yellow.px-4.py-2(data-aos="fade-right")
        h4.mb-0.me-3 Interfaz de usuario
      .row.justify-content-center.align-items-start.mt-5
        .col-lg-6(data-aos="fade-left")
          p La interfaz de InDesign se compone de la pantalla principal en la cual se abre el programa y los íconos, herramientas y comandos que conforman como tal toda la base del programa.        
        .col-lg-6(data-aos="fade-right")
          .titulo-sexto.color-primario
            h5 Figura 1
            span Interfaz de usuario InDesing
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img14.jpg', alt='') 
          figcaption Nota. Captura realizada del programa InDesign.
      p(data-aos="fade-down").mt-5 A continuación, se realizará una descripción de los elementos que conforman dicho programa:

      ImagenInfografica.color-acento-botones.mt-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/ilustraciones/img15.jpg', alt='Texto que describa la imagen')

        .tarjeta.color-secundario.p-3(x="54.2%" y="3%" numero="1")
          .h5.mb-2.p-color-primario Barra de menús
          p Ubicada en la parte superior, la barra de menús contiene diversos elementos que nos permite el control sobre los archivos, desde los cuales se pueden abrir y guardar documentos, seleccionar elementos, crear tablas, introducir columnas, etc.

        .tarjeta.color-secundario.p-3(x="9.7%" y="8.5%" numero="2")
          .h5.mb-2.p-color-primario  Pestaña de documentos
          p En esta pestaña se pueden observar todos los documentos que se tienen abiertos.          

        .tarjeta.color-secundario.p-3(x="2.1%" y="73%" numero="3")
          .h5.mb-2.p-color-primario  Barra de herramientas
          p La barra de herramientas ubicada en la parte izquierda de la interfaz contiene las herramientas que tiene el programa.     

        .tarjeta.color-secundario.p-3(x="44%" y="52%" numero="4")
          .h5.mb-2.p-color-primario  Área de trabajo
          p El área de trabajo es el área destinada para desarrollar el proyecto.     

        .tarjeta.color-secundario.p-3(x="93%" y="6%" numero="5")
          .h5.mb-2.p-color-primario  Barra de propiedades
          p Desde esta barra podemos controlar las propiedades de una herramienta seleccionada, como el color, la forma, el grosor entre otros.

        .tarjeta.color-secundario.p-3(x="93%" y="70.5%" numero="6")
          .h5.mb-2.p-color-primario  Paneles
          p Los paneles ubicados a la derecha contienen información, propiedades y características divididas por grupos de herramientas.                                 

      p(data-aos="fade-down").mt-5 Para profundizar, se debe observar los siguientes videos que permitirán tener un mayor reconocimiento de la plataforma InDesign y sus funcionalidades:

    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Primeros pasos" :icono="require('@/assets/ilustraciones/video.svg')")       

        .row.justify-content-center.align-items-center           
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/xVYnHa0wtiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
      .py-4.py-md-5(titulo="Otras herramientas importantes " :icono="require('@/assets/ilustraciones/video.svg')")
        .row.justify-content-center.align-items-center           
          .col-lg-12(data-aos="fade-left")     
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/n7Neg6LNpAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                   

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
</style>
