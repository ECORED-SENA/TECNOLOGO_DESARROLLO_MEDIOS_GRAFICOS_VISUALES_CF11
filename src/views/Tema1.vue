<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Fundamentos y principios de diagramación

    p(data-aos="fade-down-right") Se afirma que la diagramación nace con diferentes métodos de reproducción que se han empleado desde tiempos remotos en culturas como la China con el uso de la xilografía. A continuación se verá su avance a través del tiempo: 
    .row(data-aos="fade-left")     
      .col-lg-11
        PasosA.color-primario.mt-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-6(data-aos="zoom-in-right")
              figure
                img.img-a.img-t(src='@/assets/ilustraciones/img4.png', alt='Texto que describa la imagen')      
            .col-md-6.mb-4.mb-md-0
              h3(data-aos="fade-down") Xilografía
              p(data-aos="fade-down") La xilografía fue un método anterior parecido al de la imprenta, en donde en bloques de madera se tallaban diversos signos y símbolos que luego eran impresos sobre una superficie (papel).

          .row.justify-content-center.align-items-center    
            .col-md-6.mb-4.mb-md-0
              h3(data-aos="fade-down") Escribas
              p(data-aos="fade-down") Posteriormente en algunos países de Europa los escribas, personas encargadas básicamente de escribir algunos libros como la biblia, ordenaban los espacios en donde tenían que ir los textos y algunos dibujos que acompañaban la publicación, también realizados a mano alzada. 
            .col-md-6(data-aos="zoom-in-left")
              figure
                img.img-a.img-t(src='@/assets/ilustraciones/img5.png', alt='Texto que describa la imagen') 

          .row.justify-content-center.align-items-center
            .col-md-6(data-aos="zoom-in-right")
              figure
                img.img-a.img-t(src='@/assets/ilustraciones/img6.png', alt='Texto que describa la imagen')      
            .col-md-6.mb-4.mb-md-0
              h3(data-aos="fade-down") Imprenta
              p(data-aos="fade-down") Ya con el invento de Gutenberg (La imprenta, en 1440), el libro se empezó a popularizar pues las cantidades que se podían imprimir eran significativas, se empezaron a dar los principios estructurales de la diagramación. 

          .row.justify-content-center.align-items-center    
            .col-md-6.mb-4.mb-md-0
              h3(data-aos="fade-down") Revolución Industrial
              p(data-aos="fade-down") Posteriormente con la llegada de la revolución industrial y el auge en diversas piezas gráficas, la diagramación se convirtió en un oficio importante en los talleres de impresión, se convirtió casi que en una profesión la cual era realizada por una persona experta.
            .col-md-6(data-aos="zoom-in-left")
              figure
                img.img-a.img-t(src='@/assets/ilustraciones/img7.png', alt='Texto que describa la imagen')    

          .row.justify-content-center.align-items-center
            .col-md-6(data-aos="zoom-in-right")
              figure
                img.img-a.img-t(src='@/assets/ilustraciones/img8.png', alt='Texto que describa la imagen')      
            .col-md-6.mb-4.mb-md-0
              h3(data-aos="fade-down") Modernidad
              p(data-aos="fade-down") A finales del siglo 20 y comienzos del siglo 21, los avances del diseño, los programas informáticos y las herramientas que se tienen a mano, las publicaciones se han vuelto cotidianas y necesarias para un público que requiere de más información, no solo en formatos de papel sino también en formatos digitales.

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left") 
        p 
          span(style='color:#F57C00') La diagramación se puede definir como el oficio del diseño el cual se encarga de establecer, distribuir y organizar todos los elementos del mensaje bimedia (texto e imagen), 
          span(style='color:#00223D') en un espacio o formato determinado, con diversos tipos de contenido, teniendo en cuenta el uso de jerarquías en la ubicación de estos, para así lograr armonía y una fácil lectura por parte del lector.   

      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-stretch
          .col-lg-5.bg-color-t1-1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img9.svg', alt='') 

          .col-lg-7.bg-color-t1-2.d-flex.align-items-center
            p.my-3 Si los elementos de una diagramación generan caos, se pierde el interés por la pieza. 
              span(style='color:#F57C00')  Hay estar seguros de lo que se quiere organizar y cómo se va a hacer. 
              span  Aunque parezca muy fácil y sencilla su ejecución, su complejidad se ve inmersa en el hecho que de ella depende que haya una lectura fácil y coherente. 

    .bg_t1-1.mt-5.p-5(data-aos="fade-right").d-none.d-lg-block       
      .row.justify-content-start.p-5.pt-0      
        .col-lg-6.my-2
          p.mb-0 Cuando se habla de los fundamentos de la diagramación, se hace referencia a elementos básicos del diseño gráfico, como el correcto uso del texto, la tipografía, el color y la composición, elementos que serán estudiados a lo largo de este componente. 

    .row.pt-0.d-block.d-lg-none.mt-5  
      .col-lg-12
        p Cuando se habla de los fundamentos de la diagramación, se hace referencia a elementos básicos del diseño gráfico, como el correcto uso del texto, la tipografía, el color y la composición, elementos que serán estudiados a lo largo de este componente. 
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img11.png', alt='')                              

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
