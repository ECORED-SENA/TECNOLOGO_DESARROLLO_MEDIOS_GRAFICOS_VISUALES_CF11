<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.mt-5     
      .col-lg-3(data-aos="fade-left")
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img90.svg', alt='')       

      .col-lg-7(data-aos="fade-right") 
        p.borde-color.py-5(data-aos="fade-down") El diseño editorial, es la rama del diseño gráfico, dedicada a todos los procesos concernientes a la maquetación editorial de libros, revistas, diarios, fanzines, entre otros.
    p.text-center.mt-5(data-aos="fade-down") #[b Recuerda que en el proceso de maquetación editorial te encontrarás con varios elementos o formatos como los siguientes:]

    .row.justify-content-center.align-items-center.pt-5 
      .col-lg-10
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img91.svg', alt='')       

    .bg-sintesis-1.mt-4.pt-4
      p.text-center(data-aos="fade-down") #[b Ten siempre presente cada uno de ellos y su uso, tampoco olvides que:]
      .row.justify-content-center.align-items-center.pt-5 
        .col-lg-3.p-3
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img92.svg', alt='')       
          p.mt-3.text-center(data-aos="fade-down") La simetría y mantener el equilibrio será fundamental en tu diseño, ten en cuenta aspectos como forma, tamaño y color.     

        .col-lg-4.p-3
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img93.svg', alt='')       
          p.mt-3.text-center(data-aos="fade-down") Las tipografías e imágenes que uses te ayudarán a transmitir mejor tus ideas.   

        .col-lg-3.p-3
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img94.svg', alt='')       
          p.mt-3.text-center(data-aos="fade-down") Hay muchos programas que podrás usar, uno especializado es InDesign de Adobe, usa el que más te guste.  

</template>

<script>
export default {
  name: 'Sintesis',
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
