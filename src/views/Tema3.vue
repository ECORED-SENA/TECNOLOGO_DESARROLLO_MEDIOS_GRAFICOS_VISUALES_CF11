<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Composición en maquetación
    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left") 
        p La composición se puede definir como  
          span(style='color:#F57C00') la disposición equilibrada de los elementos dentro del espacio a trabajar, 
          span(style='color:#00223D') esta genera sensaciones agradables al lector, es la encargada de mantener el equilibrio del peso visual en la publicación, eliminando el peso que pueda perturbar la expresión visual, porque si el lector inconscientemente ve que el peso de los elementos no está equilibrado, tratará de ordenarlo mentalmente y tiende a perder el interés en la publicación.   

      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-stretch
          .col-lg-5.bg-color-t1-1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img16.svg', alt='') 

          .col-lg-7.bg-color-t1-2.d-flex.align-items-center
            p.my-3 Los elementos deben contar con una estructura o base interna definida de acuerdo con el proyecto a realizar, en donde se busca una intención clara y concisa, donde se persigue un interés en particular en el diseño, generando un equilibrio entre los elementos ubicados de manera vertical y horizontal, 
              span(style='color:#F57C00')  lo cual se expresa en la fuerza de las líneas por medio del movimiento que se genera mediante la tensión y la dirección. 
              span  A continuación se presentan dichos elementos:

    .card-bg-color.card-bg-color__mint.mt-5
      SlyderE(indicadores="derecha")(data-aos="fade-left")
        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b La tensión]
            p La tensión es la fuerza concentrada en un elemento. El punto tiene tensión, pero no dirección, la línea combina la tensión con la dirección.
            p Se puede definir como una “fuerza” que atrae la vista del espectador hacia cierto “lugar” de una imagen.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img17.svg', alt='') 

        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Tensión y equilibrio]
            p La necesidad de equilibrar los elementos no siempre es lo que se busca en el diseño, por lo tanto, algunas veces intencionalmente provocamos la carga de tensiones en algunos lugares de la composición. 

            p Cuando somos conscientes de nuestra capacidad para determinar zonas de mayor tensión y sabemos que esto desequilibra los componentes del mensaje visual, podemos decir que estamos en condiciones de hacer composiciones más complejas.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img18.svg', alt='') 

        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Parámetros a destacar, dentro de la composición]
            p.p-color-primario #[b Simetría]
            p Consiste en que un elemento guarde relación y correspondencia exacta entre los hemisferios por ejemplo izquierdo y derecho, en cuanto a elementos del diseño como la forma, color y el tamaño.  
            p.p-color-primario #[b Equilibrio simétrico]
            p Indica que cada uno de los hemisferios, tiene el mismo peso en sus elementos.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img19.svg', alt='')             

        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Parámetros a destacar, dentro de la composición]
            p.p-color-primario #[b Equilibrio asimétrico]
            p Este equilibrio se produce al dividir la composición en partes iguales, sin existir las dimensiones o proporciones exactas en cuanto a color, peso, tamaño, el efecto es variado.
            p.p-color-primario #[b Ritmo]
            p Es la repetición de elementos con algunos intervalos entre sí, el cual crea una sensación constante de movimiento entre todos los elementos.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img20.svg', alt='') 

    #t_3_1.titulo-segundo.color-primario.mt-5(data-aos="zoom-in-left")
      h2 3.1  Elementos de estructura 
    .row.justify-content-center.align-items-start.mt-5
       .col-lg-6
        p(data-aos="fade-down") En diagramación se intenta tener armonía y equilibrio entre todos los elementos de los cuales se dispone para llevar a cabo la estructura
          span(style='color:#F57C00') . Todas las publicaciones requieren de componentes estructurales para su diagramación.
          span  Para empezar, es importante pensar en divisiones por bloques, esto se hace por medio del uso de retículas, en donde se disponen todos los elementos necesarios y su espacio respecto al texto, que por lo general es el elemento predominante en una publicación.       
       .col-lg-6
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img21.png', alt='') 

    p.mt-5(data-aos="fade-down") Algunos de los elementos estructurales en diagramación son: 

    TabsC.color-primario
      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Papel - Páginas")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Papel - Páginas]
            p La página es el soporte principal en donde se van a diagramar y organizar todos los elementos con los que se cuenta.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img22.png', alt='') 

      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Retícula")
        .row.justify-content-center.align-items-center
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img23.png', alt='')         
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Retícula]
            p La retícula es una estructura invisible, sobre la cual se distribuyen los elementos con el fin de generar una diagramación ordenada y atractiva al lector.
        
      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Columnas")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Columnas]
            p Las columnas corresponden al espacio que va a ocupar el texto y en algunos casos las imágenes, es una guía general que por lo general rige a todo el documento, sin ser una imposición, esto depende de la publicación y el tipo de lectores al cual se quiere llegar.
            p Las columnas por lo general suelen ser utilizadas de manera vertical, ya que generan mayor facilidad de lectura.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img24.png', alt='') 

      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Márgenes")
        .row.justify-content-center.align-items-center
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img25.png', alt='')         
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Márgenes]
            p Las márgenes son los espacios en blanco que se deben ajustar del borde del papel a la parte interna del contenido. Los márgenes utilizados están compuestos por la cabeza, pie, lomo y corte. 
            p Dentro de este espacio en blanco suelen aparecer la numeración, citas importantes, entre otros.

      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Interlineado")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Interlineado]
            p El interlineado es el espacio que existe entre líneas, el cual por lo general es dado por el programa que es utilizado, dependiendo generalmente del puntaje de la letra.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img26.png', alt='') 

      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Espaciado")
        .row.justify-content-center.align-items-center
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img27.png', alt='')         
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Espaciado]
            p El espaciado en diseño es otro elemento que permite tener mayor organización y mejor visualización.
            p Es un espacio que deben tener los elementos entre sí, para mantener una distancia que permita una mejor lectura y visualización.

      .py-3.py-md-4.bg_color-t3-1.p-5(titulo="Sangrado o rebase")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Sangrado o rebase]
            p El sangrado es un espacio adicional o extra que se da, con el fin de que, al realizar el corte en una guillotina, el documento conserve las características y el tamaño estipulado en el proceso de diseño, el estándar de la medida es de 3mm, adicionales.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img28.png', alt='') 

    Separador.my-5 
    #t_3_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.2  Elementos de texto 
    .row.justify-content-center.align-items-start.mt-5(data-aos="zoom-in")      
      .col-lg-3(data-aos="fade-left") 
        p.my-2 La tipografía es el arte y la técnica del manejo y selección de tipos para crear trabajos de impresión, es sin duda alguna un elemento primordial que hace parte de la comunicación, 
          span(style='color:#F57C00')  aparece desde tiempos remotos como herramienta esencial de la interacción entre seres humanos.   

      .col-lg-9(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-5
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img29.svg', alt='') 

          .col-lg-7.d-flex.align-items-center
            p.my-2 Las tipografías juegan un papel fundamental de atención en cualquier tipo de pieza comunicativa, ya que por sus atributos pueden denotar un sinfín de cualidades que atribuyen o restan importancia al contenido, son utilizadas con diferentes intenciones. Cada tipografía posee diferentes elementos de identificación que van desde su denominación como Serif y Sans Serif, atributos que denotan cantidad de variaciones como la forma, el movimiento o lo estático de la misma, la delicadeza que transmite, el peso y la solidez, el dinamismo entre otros. Sumado a los atributos propios que posee cada tipografía, se pueden utilizar otro tipo de herramientas como el color, las texturas, transparencias o el tamaño, para así dar peso al concepto que se quiere transmitir.  


    .row.justify-content-start.align-items-center.mt-5
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img30.svg', alt='') 

    .row.justify-content-end.align-items-center(data-aos="fade-left")
      .col-lg-8.bg-color-t3-2.p-3.sup.row-top
        p Elegir una tipografía para una diagramación requiere de estudiar previamente el producto para el cual se va a desarrollar, recogiendo datos del cliente, el mercado, las tendencias y demás factores que puedan influir al momento de elegir.

        p.mb-0 Una tipografía seleccionada de manera correcta da legibilidad haciendo que el mensaje se lea sin ningún tipo de esfuerzo. Las letras gruesas dan lugar a bloques oscuros, mientras que las letras delgadas dan lugar a espacios claros. Características como el ancho, el alto, su forma y estructura, sirven para identificar estilos propios de las tipografías como, light, normal, bold, black, entre otras, que pueden ayudar a transformar el mensaje que se quiere transmitir. Cabe resaltar que algunas marcas o productos, diseñan sus propias tipografías esto con el fin de dar exclusividad y relevancia a su marca. 

    p.mt-5(data-aos="fade-down") Las tipografías se pueden dividir principalmente en tipografías Serif y Sans Serif, pero también existen otras, como se verá a continuación:

    TabsA.color-acento-botones.mt-5(data-aos="fade-right")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Serif")    
        .row.justify-content-end.align-items-center
          .col-lg-7
            h4 Serif o con serifa (Romanas)
            p También conocidas como las fuentes con remate, son las tipografías con “adornos” que rematan los extremos de las líneas. Suele ser percibida como una tipografía seria, respetable, institucional y clásica.
            p Gracias a sus remates o serifas, las líneas imaginarias que se crean debajo de las letras con serifa ayudan a guiar la lectura haciéndola más ágil y cómoda. 
          .col-lg-5
            img.img-t.img-a(src='@/assets/ilustraciones/img31.svg', alt='') 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Sans Serif")    
        .row.justify-content-end.align-items-center
          .col-lg-7
            h4 Sans Serif
            p Las tipografías de palo seco, también conocidas como tipografía sans serif, son famosas por no tener estos adornos. Es decir, los diferentes trazos que componen una letra u otras son constantes y no presentan remates. Esta tipografía se utiliza para transmitir seguridad, minimalismo, modernidad o neutralidad. Dan buenos resultados en diseños sencillos, con poca letra. 
          .col-lg-5
            img.img-t.img-a(src='@/assets/ilustraciones/img32.svg', alt='') 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Cursiva (Manuscrita)")    
        .row.justify-content-end.align-items-center
          .col-lg-7
            h4 Cursiva (Manuscrita)
            p Denominadas así por su aspecto manual, imitan la escritura realizada a mano. Suelen poseer ligaduras y florituras que unen unas letras con otras.
            p Son utilizadas para frases cortas o firmas, ya que en textos largos su legibilidad puede ser complicada. 
          .col-lg-5
            img.img-t.img-a(src='@/assets/ilustraciones/img33.svg', alt='') 
            
      .tarjeta.color-acento-botones--borde.p-4(titulo="Decorativa")    
        .row.justify-content-end.align-items-center
          .col-lg-7
            h4 Decorativa
            p Esta última clasificación engloba a aquellas tipografías que han sido diseñadas con un estilo propio y concreto con un fin ornamental.
            p Son utilizadas para usos aislados y puntuales como frases publicitarias, pero nunca en textos amplios, ya que suelen ser complicada su legibilidad en frases largas.
          .col-lg-5
            img.img-t.img-a(src='@/assets/ilustraciones/img34.svg', alt='')                        
    .card-bg-color-1.card-bg-color-1__mint.mt-5
      .row.justify-content-end.align-items-center(data-aos="fade-left")
        .col-lg-3
          p.mb-0.text-center #[b Otros conceptos importantes de aprender son: ] 
        .col-lg-9.sup 
          SlyderF(columnas="col-lg-6")
            .crd.crd-yelow.crd--100.p4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/ilustraciones/img35.svg' alt='AvatarTop')
              h5.text-center Fuente
              p.text-center Es un conjunto de signos gráficos en un procesador de textos, con un tipo y tamaño determinados. En otras palabras, fuente es el estilo o apariencia de un grupo completo de caracteres guiados por características comunes. Poniendo un ejemplo se puede decir que Times New Roman es una fuente.
            .crd.crd-yelow.crd--100.p4                
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/ilustraciones/img36.svg' alt='AvatarTop')
              h5.text-center Tipo
              p.text-center Es una pieza de la imprenta y de la máquina de escribir en que está grabada una letra u otro signo. Contextualizando esta definición, se puede definir tipo como el modelo o diseño de una letra determinada.       

            .crd.crd-yelow.crd--100.p4                
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/ilustraciones/img37.svg' alt='AvatarTop')
              h5.text-center Tipografía
              p.text-center La tipografía es el arte y la técnica de crear y componer tipos o fuentes para comunicar un mensaje. También se ocupa del estudio y clasificación de las distintas fuentes tipográficas. Por tanto, la tipografía hace referencia a la labor de crear fuentes y no a la fuente en sí. 

            .crd.crd-yelow.crd--100.p4                
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/ilustraciones/img38.svg' alt='AvatarTop')
              h5.text-center Familia tipográfica: 
              p.text-center Es el conjunto de tipos basado en una misma fuente, con algunas variaciones, tales como, por ejemplo, en el grosor y anchura, pero manteniendo características comunes. Los miembros que integran una familia se parecen entre sí, pero tienen rasgos propios. Por ejemplo: arial negrita, arial italic, arial cursiva y arial condensed pertenecen a la misma familia tipográfica: Arial.

    Separador.my-5 
    #t_3_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.3  Elementos de imagen

    .row.justify-content-center.align-items-center.mt-5(data-aos="zoom-in")      
      .col-lg-4(data-aos="fade-left") 
        p Las imágenes son representaciones visuales de un objeto real o imaginario y son elementos muy poderosos en diseño, ya que captan la atención del lector, por eso se dice que una imagen vale más que mil palabras.  
          span(style='color:#F57C00') Dichas imágenes deben tener relación con los textos o temas que se van a tratar, pues así se refuerzan los conceptos que se quieren dar a conocer.  

      .col-lg-8(data-aos="fade-right")
        .row.justify-content-center.align-items-stretch
          .col-lg-5.bg-color-t1-1
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img39.svg', alt='') 

          .col-lg-7.bg-color-t1-2.d-flex.align-items-center
            p.my-3 Por otra parte, las imágenes pueden ser utilizadas de diversas maneras, estas suelen tener una mayor flexibilidad que otros elementos como el texto, ya que pueden ir sobre la retícula superpuestas ocupando una mayor cantidad de columnas que el texto, por ejemplo. Las imágenes más utilizadas son las fotografías, sin embargo, se pueden utilizar otro tipo de elementos como ilustraciones, trazos o dibujos, incluso caricaturas como las que se utilizan aun hoy en día en algunos diarios y periódicos.

    .card-bg-color-2.card-bg-color-2__mint-yelow.mt-5.p-5(data-aos="fade-left") 
      h3.p-color-primario.text-center #[b Las imágenes se pueden clasificar específicamente en:] 
      .row.justify-content-between.align-items-stretch
        .col-lg-5.my-3
          p.text-center Imágenes vectoriales, compuestas por elementos geométricos, como la línea o el punto:
          .titulo-sexto.color-primario
            h5 Ejemplo
            span de imagen vectorial
          img.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img40.svg', alt='') 
        .col-1.d-none.d-lg-block
          img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img42.svg', alt='') 

        .col-lg-5.my-3
          p.text-center Por otra parte, están las imágenes de mapas de bits, formadas por píxeles dentro de las cuales están las fotografías:
          .titulo-sexto.color-primario
            h5 Ejemplo          
            span de imagen de mapa de bits
          img.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img41.png', alt='')
    .card-bg-color-2.card-bg-color-2__mint-blue.p-5(data-aos="fade-right") 
      .row.justify-content-between.align-items-center
        .col-lg-5.my-3
          p Los espacios en blanco sirven para dar forma, orden y estructura dentro de la diagramación, ayudan a generar la sensación de libertad y claridad, aunque son espacios que no son programados, siempre es tienen en cuenta intuitivamente, debido a que sin estos se formaría el caos y el desorden en la publicación. A continuación se presentan algunos ejemplos:                
        .col-lg-7.my-3.sup
          SlyderF(columnas="col-12")
            .crd.crd-blue.crd--100.p4                
              .row.justify-content-center
                .col-12
                  img.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img43.png', alt='AvatarTop')

            .crd.crd-blue.crd--100.p4                
              .row.justify-content-center
                .col-12
                  img.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img44.png', alt='AvatarTop')

            .crd.crd-blue.crd--100.p4                
              .row.justify-content-center
                  img.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img45.png', alt='AvatarTop')

            .crd.crd-blue.crd--100.p4                
              .row.justify-content-center
                  img.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img46.png', alt='AvatarTop') 

    Separador.my-5 
    #t_3_4.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.4. Jerarquías                                    
    .row.justify-content-between.align-items-start
      .col-lg-7.my-3(data-aos="fade-right") 
        p La jerarquía es uno de los conceptos más importantes dentro de la maquetación, se refiere a la importancia, orden o peso visual de cada uno de los elementos dan a la composición, de acuerdo con su importancia o a la intención que se quiera conseguir. 
          span(style='color:#F57C00') Los elementos que generan jerarquía son el tamaño, el contraste, el color, la proximidad, la orientación, la alineación, la repetición, entre otros.
        p Saber organizar estos elementos dentro del diseño, ayuda a transmitir de manera fácil, óptima, clara y directa el mensaje a transmitir, aporta diseño, estilo y creatividad al diseño:
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img47.png', alt='') 

    .row.align-items-stretch.mt-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-primario.p-4.br-white(data-aos="fade-left") 
        .row.justify-content-center.mb-3
          .col-7
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img48.svg', alt='Texto que describa la imagen')

        h5.text-center.p-color-primario Color
        p.text-small El color ayuda a esta jerarquía, por ejemplo, se suelen colocar los títulos en cierto color y los subtítulos en un tono con menor intensidad, de acuerdo con el proyecto el color es una herramienta que ayuda a generar jerarquía, con espacios o bloques de color y contrates en espacios más claros u oscuros. 

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-primario.p-4.br-white(data-aos="fade-left") 
        .row.justify-content-center.mb-3
          .col-7
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img49.svg', alt='Texto que describa la imagen')

          h5.text-center.p-color-primario Alineación
          p.text-small La alineación en textos, imágenes e ilustraciones crea una jerarquía dentro del espacio de referencia.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-primario.p-4.br-white(data-aos="fade-right") 
        .row.justify-content-center.mb-3
          .col-7
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img50.svg', alt='Texto que describa la imagen')

        h5.text-center.p-color-primario Posición
        p.text-small La posición de los elementos es clave, aquellos que se encuentran en la parte central por lo general tienen una mayor importancia, por ejemplo, en los periódicos se suelen centrar las imágenes en la página principal.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-primario.p-4.br-white(data-aos="fade-right") 
        .row.justify-content-center.mb-3
          .col-7
            figure
              img.img-t.img-a(src='@/assets/ilustraciones/img51.svg', alt='Texto que describa la imagen')

        h5.text-center.p-color-primario Repetición
        p.text-small La repetición de elementos refuerza los parámetros de jerarquía, estos elementos pueden ser textos, formas en diferentes tamaños, en proporciones diferentes de intensidad de color, por ejemplo.     

    Separador.my-5 
    #t_3_5.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.5.  Retículas 

    .row.justify-content-between.align-items-center
      .col-lg-7.my-3(data-aos="fade-right")
        p Las retículas o rejillas en diagramación son parte fundamental del proceso, porque nos ayudan a estructurar y componer todos los elementos compositivos que van a hacer parte de la publicación. Una retícula es conjunto de líneas verticales y horizontales imaginarias, organizadas y estructuradas de forma geométrica, que disponen y organizan los elementos gráficos en el espacio o formato a trabajar.  
        p 
          span(style='color:#F57C00') Sobre las retículas irán entonces elementos como textos, imágenes, elementos compositivos, etc. La función principal de la retícula es la de proporcionar armonía, funcionalidad, uniformidad y coherencia al producto editorial, logrando una coherencia y uniformidad en todo el documento. 
        p El empleo de la retícula como sistema de ordenación, constituye la expresión de cierta actitud mental en que el diseñador concibe su trabajo de forma constructiva, pretendiendo obtener: orden, claridad, llegar a lo esencial, la concreción objetividad y no subjetividad, rentabilidad, integración de los elementos formales, cromáticos y materiales, dominio de la superficie y el espacio, disciplina en los procesos mentales.
      .col-lg-5
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img52.png', alt='')

    p.text-center.mt-5(data-aos="fade-down") Las partes de la retícula son: 
    
    img.img-t.img-a.mt-5(data-aos="zoom-in")(src='@/assets/ilustraciones/img53.svg', alt='')

    p.text-center.mt-5(data-aos="fade-down") Existen diferentes tipos de retículas, según el uso u objetivo que se desee. Las principales son:

    .card-bg-color.card-bg-color__mint.mt-5
      SlyderE(indicadores="derecha")(data-aos="fade-left")
        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Retícula manuscrito]
            p Este tipo de retícula se caracteriza por su disposición grande y rectangular, ocupando la mayor parte de la página y se caracteriza por su sencillez.
            p Los textos que contiene son largos y seguidos, estructurados en bloques y una margen, como se observa en los libros. En forma secundaria dispone la numeración o folio de página, las notas al pie de si son necesarias y los títulos de los capítulos. Es importante, que, en esta disposición, se tenga en cuenta que la lectura de los textos resulte fácil y cómoda para el lector, procurando captar el interés visual y evitar la fatiga visual. Por esas razones, el uso de márgenes amplias, así como la adecuada tipografía, el interlineado y el espacio adecuado entre palabras es significativo, para marcar diferencias.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img54.svg', alt='')     

        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Retícula de columnas]
            p Este tipo de retícula es muy flexible, pues se utiliza especialmente cuando hay información discontinua, es decir, su disposición es en columnas que separan los diversos tipos de información, pero unas pueden cruzarse para crear columnas más anchas y unas pueden depender de las otras.
            p Del cuerpo tipográfico que se decida utilizar dependerá el ancho de las columnas, propendiendo por acomodar el mayor número de caracteres, sin sacrificar la lectura cómoda. Es ideal, evitar que haya exageración en la partición de palabras, lo que se presentará si las columnas son estrechas, pero si son muy anchas se le dificultará al lector encontrar el inicio de líneas consecutivas.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img55.svg', alt='')  

        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Retícula modular]
            p Es una retícula de columnas que contiene una gran cantidad de líneas de flujo horizontales que generan subdivisión de las columnas en filas, formando una matriz de celdas denominada módulos, como un enrejado. Esta retícula se utiliza especialmente en proyectos de gran complejidad, por ser la más versátil de las estructuras de las que dispone el campo editorial. 
            p Las áreas o zonas espaciales, está integrada por la agrupación de varios módulos, cada uno de los cuales es una parte del espacio informativo. Estos módulos pueden tener diferentes tamaños y pueden tener disposición vertical u horizontal dependiendo de las imágenes a insertar, según las decisiones y parámetros que el diseñador gráfico quiera implementar. Como ejemplos de retícula modular podemos verla en los formularios, periódicos, en donde se puede observar que hay módulos sin información, espacios en blanco, con la finalidad de balancear la densidad de otros módulos.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img56.svg', alt='')  

        .row
          .col-md-6.mb-4.mb-md-0
            p.p-color-primario #[b Retícula jerárquica]
            p En este tipo de retícula no se sigue un orden estricto ni una estructura definida, se fundamenta en la proporción de los elementos, en el análisis intuitivo y en la imaginación libre adaptándose a las necesidades de la información y a los elementos de la composición, en diferentes alturas, dimensiones o superpuestos, es decir, con libertad total del criterio del diseñador gráfico, pero teniendo en cuenta el orden, la claridad de la información, la lectura fácil y que logre captar la atención visual del lector.
        
          .col-md-6
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img57.svg', alt='') 

    Separador.my-5 
    #t_3_6.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.6.  Módulos 
    p(data-aos="fade-down") El módulo es un elemento utilizado como unidad de medida para determinar las proporciones entre las diferentes partes de una composición y que se repite sistemáticamente en el espacio.                 
    .row.justify-content-between.align-items-center
      .col-lg-6(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p Los módulos son formas repetitivas que aparecen más de una vez en un diseño, lo cual tiende a unificar el diseño, aportando unión y armonía. Si los módulos utilizados son de gran tamaño, se puede denotar en el diseño simpleza y audacia, mientras que, si su tamaño es más pequeño, puede dar la sensación de una textura uniforme.
        p Si los módulos, al ser organizados en un diseño, se agrupan para convertirse en una forma mayor, que luego es utilizada en repetición, denominamos supermodelos a estas formas mayores o nuevas. 
        p
          span(style='color:#F57C00') Un ejemplo claro del uso de módulos en diagramación, son las retículas las cuales repiten un patrón específico para ordenar los elementos de la composición.                 
      .col-lg-6 
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/ilustraciones/img58.svg', alt='') 

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
