export default {
  global: {
    componenteFormativo: 'Maquetación de productos editoriales',
    descripcionCurso:
      'La principal función de la maquetación o diagramación es la de resaltar y volver atractivo cualquier producto editorial, teniendo en cuenta los elementos más importantes que la conforman como la tipografía, las imágenes, el color, entre otros. También existen diversos programas especializados que permiten la creación de diversos productos, que requieren de un proceso de maquetación, como folletos, libros y revistas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos y principios de diagramación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Software</i> de diagramación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Composición en maquetación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos de estructura',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Elementos de texto',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Elementos de imagen',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Jerarquías',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Retículas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Módulos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Formatos de impresión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Sistemas de plegados',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Proceso de maquetación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Del machote al armado',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Adobe. (2020). Photoshop Elements. ',
      link:
        'https://helpx.adobe.com/es/photoshop-elements/key-concepts/raster-vector.html',
    },
    {
      referencia: 'Gráfica EC.I (2012). Fundamentos de Diseño. ',
      link:
        'https://graficaeci2012.files.wordpress.com/2012/03/fundamentos-de-diagramacic3b3n1.pdf',
    },
    {
      referencia:
        'Romero, B. (2021). ¿Cuáles son los mejores tipos de formatos de imágenes que existen? ',
      link: 'https://www.begoromero.com/formatos-de-imagen/',
    },
    {
      referencia:
        'Romero, E. (2019). ¿Qué es la retícula en diseño gráfico y para qué sirve? ',
      link:
        'https://revistadigital.inesem.es/diseno-y-artes-graficas/que-es-la-reticula-en-diseno-grafico/',
    },
    {
      referencia:
        'Rodríguez, R. (2016). Manual profesional de diseño editorial. ',
      link: 'https://issuu.com/rosalythr/docs/manual_dise_c3_b1o_editorial',
    },
  ],
  glosario: [
    {
      termino: 'Asimétrico  ',
      significado: 'Que carece de simetría.',
    },
    {
      termino: 'Bimedia',
      significado: 'Elementos del mensaje, texto e imagen.',
    },
    {
      termino: 'Hemisferio',
      significado: 'Cada una de las dos mitades de una esfera.',
    },
    {
      termino: 'Maqueta',
      significado:
        'Modelo previo de un texto o libro que se va a publicar, usado para determinar sus características definitivas.',
    },
    {
      termino: 'Píxel',
      significado:
        'hEs la menor unidad homogénea en color que forma parte de una imagen digital.',
    },
    {
      termino: 'Simétrico',
      significado: 'Que tiene simetría.',
    },
    {
      termino: 'Xilografía',
      significado:
        'Impresión tipográfica hecha con planchas de madera grabadas.',
    },
  ],
  complementario: [
    {
      texto: 'Fundamentos y principios de diagramación',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0sv2ma0khZ0',
    },
    {
      texto: 'Composición en maquetación',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=d6gtkrnqtTw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario “La Granja” - Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
