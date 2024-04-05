export default {
  global: {
    componenteFormativo: 'Pruebas de rendimiento bases de datos',
    descripcionCurso:
      'Este componente explicará cómo se afina un motor de base de datos, cómo se analizan y se optimizan las consultas mejorando sus tiempos de respuesta, y explica cómo funcionan los algoritmos de búsqueda. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tiempos computacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Complejidad algorítmica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Algoritmos de búsqueda',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Índices y rendimiento en bases de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de rendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis de plan de ejecución de consultas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Optimización de consultas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recomendaciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Afinamiento de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Motor de almacenamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Parámetros de configuración y herramientas de monitoreo',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF10_DU.pdf',
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
  complementario: [
    {
      tema: 'Estructura de datos',
      referencia:
        'Universitat Politecnica de Valencia. (2011). <i>Estructura de datos Lineales: Pila, Cola y Lista con Punto de Interés</i> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-Shr2s0gYao',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'Francisco, T. (2015). <i>Explicación del método de la burbuja (BubbleSort)</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/zVjZdrh3tSA',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'Chio Code. (2021). <i>Ordenamiento por selección Selection Sort</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/Myy-eU-SWbE',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'KhanAcademyEspañol. (2014). <i>Algoritmo de ordenamiento por inserción</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/bB8Px8D9QdQ ',
    },
    {
      tema: 'Estructura de datos',
      referencia:
        'Montero, L. (2017). <i>Algoritmos - Ordenamiento rapido - Quicksort</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/DYmTpUfcyT8 ',
    },
    {
      tema: 'Índices y rendimiento en bases de datos',
      referencia:
        'Domínguez Gutú, J. (2020). <i>Índices en bases de datos - conceptos</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/C4_kHhpY5jE ',
    },
    {
      tema: 'Análisis de rendimiento',
      referencia:
        'Cerebrum VE. (2013). <i>BD Avanzadas – Cómo optimizar una consulta</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/1HH4ZYXhJYE ',
    },
    {
      tema: 'Análisis de rendimiento',
      referencia:
        'Decharlas Castellón. (2014). <i>Optimización del rendimiento con MySQL</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/rsHXazV__Ec ',
    },
    {
      tema: 'Afinamiento de bases de datos',
      referencia:
        'Mora, J. (2015). <i>Herramientas para optimizar mysql mysqltuner</i> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WUKZ2SCuMUQ ',
    },
  ],
  glosario: [
    {
      termino: '<em>Array</em>',
      significado: 'colección de elementos y sus posiciones.',
    },
    {
      termino: 'Iterar',
      significado: 'realizar cierta acción o acciones varias veces.',
    },
    {
      termino: 'Aplicación',
      significado:
        'es un programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: 'Servidor',
      significado:
        'es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
    {
      termino: 'Implementación',
      significado:
        'poner en funcionamiento o aplicar métodos, medidas, etc., para llevar algo a cabo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Guillermo, J. (2018).<i> ¿Qué es la complejidad algorítmica y con qué se come?</i> ',
      link:
        'https://medium.com/@joseguillermo_/qu%C3%A9-es-la-complejidad-algor%C3%ADtmica-y-con-qu%C3%A9-se-come-2638e7fd9e8c',
    },
    {
      referencia:
        'Montero, L. (2017).  <i>Algoritmos y notación asintótica</i>.',
      link:
        'https://medium.com/laboratoria-developers/algoritmos-y-notaci%C3%B3n-asint%C3%B3tica-817a666ca444',
    },
    {
      referencia:
        'Davidochobits. (2020). Motores de almacenamiento en MySQL y MariaDB. ',
      link:
        'https://www.ochobitshacenunbyte.com/2020/08/11/motores-de-almacenamiento-en-mysql-y-mariadb/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'David Eduardo Lozada Cerón',
          cargo: 'Experto temático',
          centro:
            'Centro de teleinformática y producción industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
