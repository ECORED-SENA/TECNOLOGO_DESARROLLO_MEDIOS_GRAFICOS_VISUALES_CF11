<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Formatos de impresión

    .row.justify-content-center.align-items-start.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left") 
        p Los formatos de impresión hacen referencia específicamente a los diferentes tamaños de papel que se encuentran disponibles en el mercado, que cumplen un propósito y uso específico, de acuerdo con las necesidades, establecidas en la elaboración de diversas piezas gráficas. 

      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-stretch
          .col-lg-5.bg-color-t1-1.mb-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img59.svg', alt='') 

          .col-lg-7
            p Cabe decir que de acuerdo con cada proyecto se utilizan diferentes tipos de papeles de acuerdo con las especificaciones requeridas, 
              span(style='color:#F57C00')  estos papeles varían de acuerdo con el poro que contenga y su apertura a la tinta, su pureza, textura, opacidad, blancura, gramaje, brillo, densidad, hilo o grano, humedad relativa, resistencia al doblez, entre otros.       

    .card-bg-color-3.card-bg-color-3__mint
      .row.justify-content-end.align-items-center(data-aos="fade-left")
        .col-lg-5
          p.mb-0.text-center.mt-5 #[b Algunos elementos son: ] 
        .col-lg-7.sup
          .row.justify-content-evenly.align-items-stretch.mt-5
            .col-sm-6.col-lg-5.mb-4.mb-lg-0.tarjeta--boton.color-primario.p-4(data-aos="fade-left") 
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.img-t.img-a(src='@/assets/ilustraciones/img60.svg', alt='Texto que describa la imagen')

              h5.text-center Publicitarios
              p.text-small.text-center  Volante
              p.text-small.text-center  Folleto (díptico o tríptico) 
              p.text-small.text-center  Cartel 
              p.text-small.text-center  Valla

            .col-sm-6.col-lg-5.mb-4.mb-lg-0.tarjeta--boton.color-primario.p-4(data-aos="fade-left") 
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.img-t.img-a(src='@/assets/ilustraciones/img61.svg', alt='Texto que describa la imagen')

                h5.text-center Publicaciones
                p.text-small.text-center Periódico
                p.text-small.text-center Revista
                p.text-small.text-center Libro   

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left")
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img62.svg', alt='')
      .col-lg-8(data-aos="fade-right")
        p El diseñador debe considerar para la elección del papel lo siguiente: 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p
              span(style='color:#F57C00') #[b Comunicación: ]
              span el mensaje que puede comunicar el papel, tomando en cuenta: color, textura, brillo, opacidad y calibre.                    
          li 
            .lista-ol--cuadro__vineta
              span 2
            p
              span(style='color:#F57C00') #[b Uso: ]
              span el uso que se le dará al papel, en qué medio va a estar.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p
              span(style='color:#F57C00') #[b Función: ]
              span a función del papel se basa tradicionalmente en los gramajes: 

        .row.justify-content-center.align-items-center.mt-3(data-aos="zoom-in")      
          .col-lg-2 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img63.svg', alt='')
          .col-lg-10
            p
              span(style='color:#F57C00') #[b De 80 a 120 grs: ]
              span se utiliza principalmente en papelerías corporativas, folletos publicitarios y páginas de libros, entre otras.      

        .row.justify-content-center.align-items-center.mt-3(data-aos="zoom-in")      
          .col-lg-2 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img63.svg', alt='')
          .col-lg-10
            p
              span(style='color:#F57C00') #[b De 120 a 220 grs: ]
              span es usado en folletos, catálogos e inserciones publicitarias. 

        .row.justify-content-center.align-items-center.mt-3(data-aos="zoom-in")      
          .col-lg-2 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img63.svg', alt='')
          .col-lg-10
            p
              span(style='color:#F57C00') #[b Más de 220 grs: ]
              span en cubiertas o forros, tarjetas, tarjetones, folders, display y catálogos publicitarios.                                                         
    p.text-center.mt-5(data-aos="fade-down") Se establecen a partir de la norma ISO 216, los parámetros en cuanto a tamaño y utilización: 

    .card-bg-color.card-bg-color__mint.mt-5
      SlyderA(tipo="b")(data-aos="fade-left")
        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A0. MEDIDAS:  
            h5.p-color-primario 841 X 1.189 MM:
            p Es el formato más grande de todos. Se puede usar para carteles, aunque los formatos más utilizados en este ámbito son:
            p 700×1000 mm y 
            p 1000x1400 mm.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img64.svg', alt='') 

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A1. MEDIDAS: 
            h5.p-color-primario 594 X 841 MM: 
      
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img65.svg', alt='')  

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A2. MEDIDAS: 
            h5.p-color-primario 420 X 594 MM:
            p Los usos del formato A2 pueden ser varios: diseño, impresión fotográfica, carteles, diagramas, calendarios de pared grandes.

          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img66.svg', alt='')                         

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A3. MEDIDAS: 
            h5.p-color-primario 297 X 420 MM: 
            p Junto con el A4 es, sin duda, uno de los cortes más comunes. Precisamente por ello, la mayor parte de las impresoras utilizadas en las oficinas también están diseñadas para hojas A3, además de A4. 
            p ¿Para qué se usa? Se utiliza para imprimir dibujos, gráficos, pósteres, fotografías, revistas, partituras, carteles y diplomas. 
                  
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img67.svg', alt='')  

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A4. MEDIDAS: 
            h5.p-color-primario 210 X 297 MM: 
            p El A4 es el folio clásico para impresora, el usado para los documentos estándar, ya sean cartas o formularios. 
            p Es el formato de los cuadernos que se utilizan en los colegios, de los libros infantiles y de las enciclopedias (que requieren más espacio para las ilustraciones), de las revistas y de los folletos. De hecho, el folleto clásico es un A4 plegado en tres.
                  
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img68.svg', alt='')       

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A5. MEDIDAS: 
            h5.p-color-primario 841 X 1.189 MM: 
            p El A5 es el formato perfecto para los blocs de notas, el A5 también puede ir bien para la impresión de libros, además de revistas y folletos.
                  
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img69.svg', alt='')      


        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A6. MEDIDAS: 
            h5.p-color-primario 105 X 148 MM 
                  
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img70.svg', alt='')    

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A7. MEDIDAS: 
            h5.p-color-primario 74 X 105 MM:
            p Dado su tamaño más pequeño, el A7 se puede utilizar para crear, por ejemplo, un calendario de bolsillo con los horarios de los cursos de un centro deportivo o de un colegio, así como folletos o tarjetas de felicitación. 
                  
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img71.svg', alt='') 

        .row
          .col-md-6.mb-4.mb-md-0
            h4.p-color-primario Formato A8. MEDIDAS: 
            h5.p-color-primario 52 X 74 MM: 
            p Tarjetas de presentación normalmente tienen un formato similar, ligeramente más grande (85 × 55 mm). 
                  
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img72.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left") 
        p Sin embargo, existen diferentes tipos de formatos en Estados Unidos, Canadá y algunos países europeos, donde cuentan con sus propios estándares. 
          span(style='color:#F57C00') Después, a la serie A se suman las series B y C, las «complementarias», que también siguen una numeración. 

      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-stretch
          .col-lg-5.bg-color-t1-1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img73.svg', alt='') 

          .col-lg-7.bg-color-t1-2.d-flex.align-items-center
            p.my-3 
              span(style='color:#F57C00')  #[b ¿Qué significa «fundamental» y «complementario»?  ]
              span  Significa que una carta escrita en una hoja A4 puede introducirse en un sobre C4, mientras que el sobre C4 puede introducirse en un sobre B4. Esto es así porque la hoja C4 es ligeramente más ancha que una A4, y la B4 es ligeramente más ancha que la C4. 

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img74.svg', alt='') 

    .row.justify-content-end.align-items-center(data-aos="fade-left")
      .col-lg-8.bg-color-t4-1.p-3.sup.row-top-1
        p En la 
          span(style='color:#F57C00')  #[b serie B]
          span , los formatos van del B0 (1000×1414 mm) al B10 (31×44 mm), si se está en el mundo editorial. De hecho, el B5 (176×250 mm) es un buen formato para libros. El B0 (1000×1414 mm), el B1 (707×1000 mm) y el B2 (500×707 mm), dadas sus grandes proporciones, pueden ir bien para imprimir pósteres y carteles o para presentaciones de oficina.
        p En cuanto a la serie C, que va de C0 (917×1297 mm) a C10 (28×40 mm), basta con saber que es la serie «complementaria» por excelencia, ya que es la que se usa, sobre todo, para crear sobres postales o sobres para cartas.                                                            
    Separador 
    #t_4_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 4.1. Sistemas de plegados
    p.mt-5(data-aos="fade-down") Consisten en los plegados a realizar sobre los pliegos impresos, hasta obtener el tamaño y forma deseada, tal como se puede ver a continuación:                            

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Folletos plegados, díptico y tríptico:")
            .col-lg-12
              p Existen varios tipos de formatos para folletos, los cuales pueden ser modificados y doblados de maneras diferentes.  
              img.img-t.img-a(src='@/assets/ilustraciones/img76.svg', alt='') 
              p Cuadríptico 8 caras (plegado envolvente y plegado acordeón) 

          .row(titulo="Publicidad gráfica, posters, anuncios:")
            .col-lg-12
              p Formatos A y B, utilizados en piezas generalmente planas. 
              img.img-t.img-a(src='@/assets/ilustraciones/img77.svg', alt='') 
              p Formatos A y B

          .row(titulo="Papelería corporativa:")
            .col-lg-12
              p Pequeños formatos para papelería comercial
              img.img-t.img-a(src='@/assets/ilustraciones/img78.svg', alt='') 
              p Tarjeta de presentación 85x55 mm, Folio A4 y Sobre 220x110 mm                           
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img75.png', alt='') 

    Separador 
    #t_4_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2  4.2. Proceso de maquetación 

    p.mt-5(data-aos="fade-down") Para iniciar el proceso de maquetación es importante dar respuesta a las siguientes preguntas:   
    img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img79.svg', alt='')
    p.mt-5(data-aos="fade-down") Dar inicio respondiendo estas dos preguntas, 
      span(style='color:#F57C00')  #[b nos permite desarrollar una idea más clara y concisa, ]
      span porque no es lo mismo trabajar en una revista de contenido religioso, que en una revista de diseño, música, moda, gastronomía o en una de contenido político.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        p El proceso de maquetación va a garantizar los requisitos básicos de forma y calidad, al igual que dar un estilo coherente a la publicación.
        p Una vez definidas las primeras preguntas y recopilado el material necesario, como textos e imágenes, se puede empezar a maquetar, para lo cual se requieren tener en cuenta diversos aspectos como:  
        .list.mt-3
          .list__item
            .list__item__icon(data-aos="zoom-in") 
              img(src='@/assets/ilustraciones/v1.svg', alt='')
          .list__txt
            p(data-aos="fade-down").mb-0
              span(style='color:#F57C00') #[b Tener en cuenta el público objetivo: ]
              span es importante definir el público al cual va a ir dirigido el libro o la revista, esto nos da pautas para definir los elementos que irán en la publicación, colores a utilizar, tipografías que sean acordes al tema, tamaño de papel, inclusive el uso de ciertas retículas.  

        .list.mt-3
          .list__item
            .list__item__icon(data-aos="zoom-in") 
              img(src='@/assets/ilustraciones/v1.svg', alt='')
          .list__txt
            p(data-aos="fade-down").mb-0
              span(style='color:#F57C00') #[b De igual forma se pueden clasificar los elementos a maquetar, ]
              span de acuerdo con los siguientes parámetros:                
      .col-lg-6
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img80.jpg', alt='') 

    .row
      .col-12
        .card-bg-color-4.card-bg-color-4__mint.mt-5
          .row.justify-content-around.align-items-stretch.mt-5
            .col-sm-6.col-lg-4.mb-4.mb-lg-0.tarjeta--boton.color-primario.sup.p-4.card-size(data-aos="fade-left") 
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.img-t.img-a(src='@/assets/ilustraciones/img81.svg', alt='Texto que describa la imagen')

              h5.text-center De acuerdo con la frecuencia en la cual va a salir la publicación, esta puede ser:
              p.text-small.text-center Una sola edición
              p.text-small.text-center De circulación diaria
              p.text-small.text-center Semanal
              p.text-small.text-center Quincenal
              p.text-small.text-center Mensual
              p.text-small.text-center Trimestral
              p.text-small.text-center Semestral
              p.text-small.text-center O inclusive anual, como por ejemplo el anuario de un colegio.
 

            .col-sm-6.col-lg-4.mb-4.mb-lg-0.tarjeta--boton.color-primario.sup.p-4.card-size(data-aos="fade-left") 
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.img-t.img-a(src='@/assets/ilustraciones/img82.svg', alt='Texto que describa la imagen')

                h5.text-center De acuerdo con el público al cual se va a dirigir:
                p.text-small.text-center Hombres y mujeres
                p.text-small.text-center Hombres
                p.text-small.text-center Mujeres
                p.text-small.text-center Niños
                p.text-small.text-center Niñas
                p.text-small.text-center Otras comunidades
                p.text-small.text-center Personas adultas
                p.text-small.text-center Pensionados

            .col-sm-6.col-lg-4.mb-4.mb-lg-0.tarjeta--boton.color-primario.sup.p-4.card-size(data-aos="fade-right") 
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.img-t.img-a(src='@/assets/ilustraciones/img83.svg', alt='Texto que describa la imagen')

              h5.text-center De acuerdo con los temas:
              p.text-small.text-center Profesionales
              p.text-small.text-center Culturales
              p.text-small.text-center Educativos
              p.text-small.text-center Deportivos
              p.text-small.text-center Políticos 

    .list.mt-5
      .list__item
        .list__item__icon(data-aos="zoom-in") 
          img(src='@/assets/ilustraciones/v1.svg', alt='')
      .list__txt
        p(data-aos="fade-down").mb-0
          span(style='color:#F57C00') Arreglar los textos o manuscritos que se van a utilizar,  
          span esto incluye:  

    .row.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.text-center Revisado y corregido
              p.text-center Generalmente los textos van a ser recibidos en el programa Word, el cual en las primeras instancias nos va a servir para hacer cierto tipo de correcciones en cuanto a la gramática y ortografía de los textos que se van a trabajar, sin embargo, en el programa de diseño en el cual vamos a maquetar, podremos realizar cambios más profundos en cuanto a la parte estructural del texto como tal.

              p.text-center Todos los cambios de contenido que se hagan una vez maquetado el libro, por pequeños o menores que parezcan, influyen en el flujo de texto y en la estructura
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img84.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img85.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.text-center Estructurado
              p.text-center Para poder aplicar correctamente los estilos que organizarán el contenido del libro la estructura tiene que ser clara en el manuscrito.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/ilustraciones/img86.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h5.text-center Corregido tipográficamente
              p.text-center  Normalmente cuando corregimos el texto solo prestamos atención a los errores ortográficos, sin embargo, cuando escribimos cometemos muchos errores tipográficos. Estos son dobles espacios, dobles saltos de párrafo, uso incorrecto de los guiones cortos para diálogos, uso incorrecto de comillas.

              p.text-center  Todo ello es importante para que durante la maquetación nos concentremos en organizar y componer el texto. En esta fase no debemos prestar ninguna atención al contenido sino a la forma.  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img87.svg', alt='') 
      .col-lg-9
        p(data-aos="fade-down") Una vez realizados los pasos anteriores, se puede entrar a seleccionar los diferentes programas que se van a utilizar y que van a servir para llevar a cabo el proceso, 
          span(style='color:#F57C00')  generalmente se utilizará InDesign. Como ya fue establecido, este es un programa especializado para llevar a cabo dicha tarea.
        p(data-aos="fade-down") La principal norma es la coherencia, es decir, elegir un estilo o estilos y aplicarlos a lo largo de todo el texto de manera coherente. 
        p(data-aos="fade-down") Para elegir el estilo que se va a utilizar, se pueden tener en cuenta los siguientes pasos y/o recomendaciones: 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="2" titulo="Paso 1: Elige el formato adecuado") Estos dependen del número de páginas y del tipo de encuadernación. La clave es que pienses como un lector, a todos nos gustan los márgenes funcionales, que no sean ni muy estrechos ni demasiado amplios.

          p.text-small(numero="1" titulo="Paso 2: Elige unos márgenes correctos") Lo mejor es que utilices uno de los más habituales. Antes de elegirlo asegurarte de que la imprenta o la plataforma de publicación trabaja con este. 

          p.text-small(numero="3" titulo="Paso 3: Haz un croquis de las partes el libro") Haz un croquis de las partes el libro. Quizá esta es la parte que más atención requiere a la hora de maquetar un libro. Para ello es útil que tomes un libro que tengas a mano y lo abras. Verás el orden de sus partes. 

          p.text-small(numero="4" titulo="Paso 4:  La portadilla") Verás que la portadilla será la primera página con texto de la maqueta, pero antes de ella debes incluir dos páginas en blanco. 

          p.text-small(numero="5" titulo="Paso 5:  Página de créditos") También verás que tras la portadilla hay una página de créditos, después la página con la dedicatoria y después el índice. Tras todo ello el contenido del libro. 

          p.text-small(numero="6" titulo="Paso 6:  Y no olvides") Y no olvides el documento siempre comenzará en página impar (derecha según el lector) y finalizará en página par. 

          p.text-small(numero="7" titulo="Paso 7: Elige una tipografía") Elige una tipografía y estilo que exprese la forma y esencia del libro. La regla de oro es que sea un tipo de letra cómoda para leer. Las tipografías más utilizadas para impresión en papel son Adobe Garamond, Century Gothic o Baskerville.                                                               
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img88.jpg', alt='') 

    Separador 
    #t_4_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 4.3.  Del machote al armado  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7(data-aos="fade-right")
        p El machote se puede definir como el prototipo final de la publicación que se va a presentar al cliente, en donde se estipulan entre otras cosas los dobleces y los cortes finales que se van a realizar, para dar la aproximación más real de cómo será el producto final. Se podría decir que es la estructura o esqueleto inicial de la publicación, es una hoja guía, en donde el impresor puede definir la cantidad de papel que necesita, las hojas que van en cada uno de los pliegos de papel, para así contemplar los costos, hacer un ahorro de papel y definir los procesos que se tienen que llevar a cabo en el proceso de impresión.       
        .cajon.color-primario.p-4.mb-4
          p Realizar un machote esencialmente es un ejercicio básico que se realiza en algún programa de diseño o de manera manual en una hoja de papel doblada por la mitad para así simular la doble paginación, en donde se determinan márgenes, divisiones para textos, imágenes, diversos contenidos, paginación entre otros elementos. 
        p
          span(style='color:#F57C00') Nota: 
          span Es importante tener en cuenta que una página es cada cara de un folio, lo cual define que un folio tiene 2 páginas.     
        p El armado de igual manera se puede realizar de manera digital o manual, para empezar, sería bueno ejecutar el ejercicio de manera manual, teniendo todas las páginas que van a hacer parte de la publicación, para así estipular la paginación y enfrentar las hojas que van en cada uno de los lados, por lo general las páginas pares quedaran al lado izquierdo y las páginas impares al lado derecho. 
       
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img89.svg', alt='')       

</template>

<script>
export default {
  name: 'Tema3',
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
